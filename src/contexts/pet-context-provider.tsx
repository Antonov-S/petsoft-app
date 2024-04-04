"use client";

import { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";

import { addPet, deletePet, editPet } from "@/actions/actions";
import { Pet } from "@prisma/client";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet: Pet | undefined;
  numberOfPets: number;
  handleCheckoutPet: (id: string) => Promise<void>;
  handleAddPet: (newPet: Omit<Pet, "id">) => Promise<void>;
  handleEditPet: (petId: string, newPetData: Omit<Pet, "id">) => Promise<void>;
  handleChangeSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children
}: PetContextProviderProps) {
  //state
  const [optimisticPets, setOptimisticPets] = useOptimistic(
    data,
    (state, newPet: Omit<Pet, "id">) => {
      return [...state, { ...newPet, id: Math.random().toString() }];
    }
  );
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  //derived state
  const selectedPet = optimisticPets.find(p => p.id === selectedPetId);
  const numberOfPets = optimisticPets.length;

  //handlers
  const handleAddPet = async (newPet: Omit<Pet, "id">) => {
    setOptimisticPets(newPet);
    const error = await addPet(newPet);
    if (error) {
      toast.warning(error.message);
      return;
    }
    addPet(newPet);
  };

  const handleEditPet = async (petId: string, newPetData: Omit<Pet, "id">) => {
    const error = await editPet(selectedPet!.id, newPetData);
    if (error) {
      toast.warning(error.message);
      return;
    }
  };

  const handleCheckoutPet = async (petId: string) => {
    await deletePet(petId);
    setSelectedPetId(null);
  };

  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  return (
    <PetContext.Provider
      value={{
        pets: optimisticPets,
        selectedPetId,
        selectedPet,
        numberOfPets,
        handleCheckoutPet,
        handleAddPet,
        handleEditPet,
        handleChangeSelectedPetId
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
