import Branding from "@/components/branding";
import Stats from "@/components/stats";
import ContentBlock from "@/components/content-block";
import SearchForm from "@/components/search-form";
import PetList from "@/components/pet-list";
import PetDetails from "@/components/pet-details";

import { PETS_API_URL } from "@/lib/constants";

export default async function Page() {
  const pets = await fetch(PETS_API_URL);
  const data = await pets.json();

  if (data.length === 0) {
    throw new Error("No pets found");
  }
  console.log(data);

  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <SearchForm />
        </div>

        <div className="relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <ContentBlock>
            <PetList pets={data} />
          </ContentBlock>
        </div>

        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}
