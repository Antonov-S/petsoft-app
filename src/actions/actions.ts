"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { Pet } from "@prisma/client";

export async function addPet(pet: Omit<Pet, "id">) {
  await sleep(2000);
  try {
    await prisma.pet.create({
      data: pet
    });
  } catch (error) {
    return {
      message: "Could not add pet"
    };
  }

  revalidatePath("/app", "layout");
}

export async function editPet(petId: string, petData: Omit<Pet, "id">) {
  await sleep(3000);
  try {
    await prisma.pet.update({
      where: { id: petId },
      data: petData
    });
    revalidatePath("/app", "layout");
  } catch (error) {
    return {
      message: "Could not edit pet"
    };
  }
}

export async function deletePet(petId: string) {
  await sleep(3000);
  try {
    await prisma.pet.delete({
      where: { id: petId }
    });
  } catch (error) {
    return {
      message: "Could not delete pet"
    };
  }

  revalidatePath("/app", "layout");
}
