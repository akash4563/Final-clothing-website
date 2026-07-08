import { products } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
          <Link href="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">
            ← Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[600px] w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl text-gray-500 mb-6">{product.category}</p>
            <p className="text-2xl font-medium text-gray-900 mb-8">₹{product.price}</p>

            <div className="prose prose-sm text-gray-500 mb-8">
              <p>
                Experience the perfect blend of comfort and style with our {product.name}.
                Carefully crafted with premium materials to ensure longevity and a timeless look.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-4 gap-4">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-200 rounded-md py-3 text-sm font-medium text-gray-900 hover:border-black transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 px-8 rounded-md font-semibold hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
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
