import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Collections } from "@/components/Collections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Collections />
    </main>
  );
}
