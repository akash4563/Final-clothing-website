export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex-1 mt-20">
        {children}
      </div>
      <Footer />
    </>
  );
}
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
