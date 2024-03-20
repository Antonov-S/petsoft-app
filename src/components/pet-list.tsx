import Image from "next/image";

import { PET_IMAGE_PLACEHOLDER } from "@/lib/constants";

export default function PetList() {
  return (
    <ul className="bg-white border-b border-black/[0.08]">
      <li>
        <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
          <Image
            src={PET_IMAGE_PLACEHOLDER}
            alt="Pet image"
            width={45}
            height={45}
            className="w-[45px] h-[45px] rounded-full object-cover"
          />
          <p className="font-semibold">Benjamin</p>
        </button>
      </li>
    </ul>
  );
}
