import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPatten from "@/components/background-patten";

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundPatten />

      <div className="flex flex-col max-w-[1500px] mx-auto px-4 min-h-screen">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
