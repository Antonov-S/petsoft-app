import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPatten from "@/components/background-patten";
import PetContextProvider from "@/contexts/pet-context-provider";
import SearchContextProvider from "@/contexts/search-context-provider";
import prisma from "../../../lib/db";

export default async function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pets = await prisma.pet.findMany();
  return (
    <>
      <BackgroundPatten />

      <div className="flex flex-col max-w-[1500px] mx-auto px-4 min-h-screen">
        <AppHeader />

        <SearchContextProvider>
          <PetContextProvider data={pets}>{children}</PetContextProvider>
        </SearchContextProvider>

        <AppFooter />
      </div>
    </>
  );
}
