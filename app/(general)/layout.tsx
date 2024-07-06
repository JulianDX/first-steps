import { Navbar } from "@/components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black">{children}</div>
    </>
  );
}
