"use client";

import Image from "next/image";

import { usePetContext } from "@/lib/hooks";
import { Pet } from "@/lib/types";

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  return (
    <section className="flex flex-col w-full h-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          <TopBar pet={selectedPet} />

          <OtherInfo pet={selectedPet} />

          <Notes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

type Props = {
  pet: Pet;
};

function EmptyView() {
  return (
    <p className="h-full flex justify-center items-center text-2xl font-medium">
      No pet selected
    </p>
  );
}

function TopBar({ pet }: Props) {
  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-light">
      <Image
        src={pet?.imageUrl}
        alt="Selected image"
        width={75}
        height={75}
        className="h-[75px] w-[75px] rounded-full object-cover"
      />
      <h2 className="text-3xl font-semibold leading-7 ml-5">{pet?.name}</h2>
    </div>
  );
}

function OtherInfo({ pet }: Props) {
  return (
    <div className="flex justify-around py-10 px-5 text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.ownerName}</p>
      </div>

      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: Props) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
      {pet.notes}
    </section>
  );
}
