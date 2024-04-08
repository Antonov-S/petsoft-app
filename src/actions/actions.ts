"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { Pet } from "@prisma/client";

export async function addPet(pet: Omit<Pet, "id" | "updatedAt" | "createdAt">) {
  // await sleep(1000);
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

export async function editPet(
  petId: string,
  petData: Omit<Pet, "id" | "updatedAt" | "createdAt">
) {
  // await sleep(1000);
  try {
    await prisma.pet.update({
      where: { id: petId },
      data: petData
    });
  } catch (error) {
    return {
      message: "Could not edit pet"
    };
  }
  revalidatePath("/app", "layout");
}

export async function deletePet(petId: string) {
  // await sleep(1000);
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
