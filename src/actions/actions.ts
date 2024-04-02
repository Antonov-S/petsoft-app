"use server";

import { revalidatePath } from "next/cache";

import { PET_IMAGE_PLACEHOLDER } from "@/lib/constants";
import prisma from "@/lib/db";

export async function addPet(formData) {
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
}
