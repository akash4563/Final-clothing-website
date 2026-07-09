"use client";

import { useCart } from "@/components/CartProvider";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isMounted } = useCart();

  if (!isMounted) {
    return (
      <main className="pt-32 pb-16 min-h-screen bg-[#f4f4f0] flex items-center justify-center">
        <div className="text-2xl font-black uppercase">Loading Cart...</div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-16 min-h-screen bg-[#f4f4f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 text-black">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mx-4 md:mx-0">
            <h2 className="text-3xl font-bold mb-4 uppercase text-black">It's empty in here</h2>
            <p className="text-gray-700 mb-8 font-mono text-lg">Add some items to get started.</p>
            <Link
              href="/shop"
              className="bg-black text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-[#ff0055] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
            >
              Back to Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex flex-col sm:flex-row gap-6 border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                >
                  <div className="relative w-full sm:w-32 sm:h-32 md:w-40 md:h-40 h-48 border-2 border-black flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1 justify-between w-full">
                    <div className="flex justify-between items-start gap-4">
                      <div className="overflow-hidden flex-1">
                        <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-2 text-black break-words overflow-wrap-anywhere">
                          {item.name}
                        </h3>
                        <p className="text-gray-700 font-mono text-sm font-bold">Size: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-gray-500 hover:text-[#ff0055] transition-colors flex-shrink-0 mt-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center sm:items-end mt-6 gap-4">
                      <div className="flex items-center border-2 border-black bg-white text-black w-fit">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}
                          className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-bold text-lg border-x-2 border-black h-10 flex items-center justify-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-2xl font-black text-black">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border-4 border-black bg-[#ffff00] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-32 text-black">
                <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-4">Order Summary</h3>

                <div className="flex justify-between mb-4 font-bold text-lg">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between mb-4 font-bold text-lg">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>

                <div className="flex justify-between mt-6 pt-6 border-t-4 border-black font-black text-3xl mb-8">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full text-center bg-black text-white py-4 font-black uppercase tracking-widest text-lg hover:bg-[#ff0055] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
