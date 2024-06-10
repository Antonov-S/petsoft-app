import H1 from "@/components/h1";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <main className="flex flex-col items-center space-y-10">
      <H1>PetSoft access requires payment</H1>
      <Button>Buy lifetime access for $19.99</Button>
    </main>
  );
}

export default Page;
