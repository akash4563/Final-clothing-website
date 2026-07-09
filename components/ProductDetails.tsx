"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export function ProductDetails({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-black tracking-tighter uppercase text-black mb-2">{product.name}</h1>
      <p className="text-xl text-gray-500 font-mono mb-6">{product.category}</p>
      <p className="text-3xl font-bold text-[#ff0055] mb-8">₹{product.price}</p>

      <div className="prose prose-sm text-gray-600 mb-8 max-w-none">
        <p className="text-lg leading-relaxed font-medium">
          Experience the perfect blend of comfort and style with our {product.name}.
          Carefully crafted with premium materials to ensure longevity and a timeless look.
          Don't do boring. Join the cult.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-4">Select Size</h3>
        <div className="flex flex-wrap gap-4">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                border-2 w-16 h-16 flex items-center justify-center text-lg font-bold transition-all duration-200
                ${selectedSize === size
                  ? 'border-[#ff0055] bg-[#ff0055] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1'
                  : 'border-black text-black hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
        {!selectedSize && added === false && (
          <p className="text-sm text-gray-500 mt-2 font-mono">*Please select a size to continue</p>
        )}
      </div>

      <button
        onClick={handleAddToCart}
        disabled={!selectedSize}
        className={`
          w-full py-4 px-8 font-black uppercase tracking-wider text-lg transition-all duration-300
          border-2 border-black
          ${!selectedSize
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : added
              ? 'bg-green-500 text-white border-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-black text-white hover:bg-[#ff0055] hover:border-[#ff0055] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'
          }
        `}
      >
        {added ? "Added to Cart!" : "Add to Cart"}
      </button>
    </div>
  );
}
