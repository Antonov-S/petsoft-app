import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPatten from "@/components/background-patten";
import PetContextProvider from "@/contexts/pet-context-provider";
import { PETS_API_URL } from "@/lib/constants";
import { Pet } from "@/lib/types";

export default async function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pets = await fetch(PETS_API_URL);
  const data: Pet[] = await pets.json();

  if (data.length === 0) {
    throw new Error("No pets found");
  }
  return (
    <>
      <BackgroundPatten />

      <div className="flex flex-col max-w-[1500px] mx-auto px-4 min-h-screen">
        <AppHeader />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
}
