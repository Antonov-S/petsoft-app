"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { PetEssentials } from "@/lib/types";
import { Pet } from "@prisma/client";
import { petFormSchema, petIdSchema } from "@/lib/validations";

export async function addPet(pet: unknown) {
  await sleep(1000);

  const validatedPet = petFormSchema.safeParse(pet);
  if (!validatedPet.success) {
    return {
      message: "Invalid pet data."
    };
  }

  try {
    await prisma.pet.create({
      data: validatedPet.data
    });
  } catch (error) {
    return {
      message: "Could not add pet."
    };
  }

  revalidatePath("/app", "layout");
}

export async function editPet(petId: unknown, petData: unknown) {
  await sleep(1000);

  const validatedPet = petFormSchema.safeParse(petData);
  const validatedPetId = petIdSchema.safeParse(petId);
  if (!validatedPet.success || !validatedPetId.success) {
    return {
      message: "Invalid pet data."
    };
  }

  try {
    await prisma.pet.update({
      where: { id: validatedPetId.data },
      data: validatedPet.data
    });
  } catch (error) {
    return {
      message: "Could not edit pet"
    };
  }
  revalidatePath("/app", "layout");
}

export async function deletePet(petId: unknown) {
  await sleep(1000);

  const validatedPetId = petIdSchema.safeParse(petId);
  if (!validatedPetId.success) {
    return {
      message: "Invalid pet data."
    };
  }

  try {
    await prisma.pet.delete({
      where: { id: validatedPetId.data }
    });
  } catch (error) {
    return {
      message: "Could not delete pet"
    };
  }
  revalidatePath("/app", "layout");
}
