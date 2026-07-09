import { products } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/ProductDetails";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/shop" className="inline-block border-2 border-black px-4 py-2 font-black uppercase text-sm hover:bg-[#ff0055] hover:text-white hover:border-[#ff0055] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200">
            ← Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Product Image */}
          <div className="relative h-[600px] w-full border-4 border-black bg-gray-100 overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              priority
            />
          </div>

          {/* Product Details (Client Component) */}
          <ProductDetails product={product} />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
