"use server";

import { revalidatePath } from "next/cache";

import { PET_IMAGE_PLACEHOLDER } from "@/lib/constants";
import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";

export async function addPet(formData) {
  await sleep(3000);
  try {
    await prisma.pet.create({
      data: {
        name: formData.get("name"),
        ownerName: formData.get("ownerName"),
        notes: formData.get("notes"),
        imageUrl: formData.get("imageUrl") || PET_IMAGE_PLACEHOLDER,
        age: +formData.get("age")
      }
    });

    revalidatePath("/app", "layout");
  } catch (error) {
    return {
      message: "Could not add pet"
    };
  }
}

export async function editPet(petId, formData) {
  await sleep(3000);
  try {
    await prisma.pet.update({
      where: { id: petId },
      data: {
        name: formData.get("name"),
        ownerName: formData.get("ownerName"),
        notes: formData.get("notes"),
        imageUrl: formData.get("imageUrl") || PET_IMAGE_PLACEHOLDER,
        age: +formData.get("age")
      }
    });
    revalidatePath("/app", "layout");
  } catch (error) {
    return {
      message: "Could not edit pet"
    };
  }
}

export async function deletePet(petId) {
  await sleep(3000);
  try {
    await prisma.pet.delete({
      where: { id: petId }
    });
    revalidatePath("/app", "layout");
  } catch (error) {
    return {
      message: "Could not delete pet"
    };
  }
}
