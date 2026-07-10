"use client";

import { useCart } from "@/components/CartProvider";
import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart, isMounted } = useCart();
  const { addOrder } = useAuth();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();

      addOrder({
        orderId,
        date: new Date().toLocaleDateString(),
        total: cartTotal,
        items: cartItems.reduce((acc, item) => acc + item.quantity, 0),
        status: "Processing"
      });

      clearCart();
      router.push(`/order/${orderId}`);
    }, 2000);
  };

  if (!isMounted) return null;

  if (cartItems.length === 0) {
    return (
      <main className="pt-32 pb-16 min-h-screen flex items-center justify-center bg-[#f4f4f0]">
        <h1 className="text-4xl font-black uppercase">Your cart is empty</h1>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-16 min-h-screen bg-[#f4f4f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 text-black">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleCheckout} className="flex flex-col gap-8">
              {/* Contact Information */}
              <div className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">Contact Info</h2>
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                  />
                </div>
              </div>

              {/* Shipping Information */}
              <div className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors md:col-span-2"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                  />
                </div>
              </div>

              {/* Payment Section (Placeholder) */}
              <div className="border-4 border-black bg-[#ffff00] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">Payment</h2>
                <div className="bg-white border-2 border-dashed border-black p-8 text-center">
                  <p className="font-mono text-gray-500 mb-2">Payment Gateway Integration Placeholder</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#ff0055]">User to add payment key here</p>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mt-8 bg-black text-white py-4 px-8 font-black uppercase tracking-widest text-lg hover:bg-[#ff0055] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "Processing..." : `Pay ₹${cartTotal}`}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary (Checkout) */}
          <div>
            <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-32">
              <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">Summary</h3>

              <div className="flex flex-col gap-4 mb-6 max-h-96 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 border-2 border-black flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                      <span className="absolute -top-2 -right-2 bg-[#ff0055] text-white text-[10px] font-bold min-w-[20px] h-[20px] px-1 flex items-center justify-center rounded-full z-10 border border-white leading-none text-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <p className="font-bold text-sm uppercase leading-tight break-words [overflow-wrap:anywhere]">{item.name}</p>
                      <p className="text-black font-mono text-xs font-bold">Size: {item.size}</p>
                    </div>
                    <p className="font-bold">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="border-t-4 border-black pt-4">
                <div className="flex justify-between mb-2 font-bold text-lg">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between mb-2 font-bold text-lg">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t-2 border-black border-dashed font-black text-3xl">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
