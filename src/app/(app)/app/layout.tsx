import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPatten from "@/components/background-patten";
import PetContextProvider from "@/contexts/pet-context-provider";
import SearchContextProvider from "@/contexts/search-context-provider";
import { Toaster } from "@/components/ui/sonner";

import prisma from "../../../lib/db";
import { checkAuth } from "@/lib/server-utils";

export default async function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // authentication check
  const session = await checkAuth();

  const pets = await prisma.pet.findMany({
    where: {
      userId: session.user.id
    }
  });
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

      <Toaster position="top-right" />
    </>
  );
}
