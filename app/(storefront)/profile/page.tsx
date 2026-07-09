"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Package, User, LogOut } from "lucide-react";

export default function ProfilePage() {
  const { user, orders, logout, isMounted } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isMounted && !user) {
      router.push("/login");
    }
  }, [user, isMounted, router]);

  if (!isMounted || !user) return null;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <main className="pt-32 pb-16 min-h-screen bg-[#f4f4f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 text-black">
          My Account
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Details */}
          <div className="lg:col-span-1">
            <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-32">
              <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-6">
                <div className="w-16 h-16 bg-[#ffff00] border-2 border-black flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase">{user.name}</h2>
                  <p className="font-mono text-gray-500">{user.email}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#ff0055] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black uppercase mb-6 flex items-center gap-4">
              <Package className="w-10 h-10 text-[#ff0055]" />
              Order History
            </h2>

            {orders.length === 0 ? (
              <div className="border-4 border-black bg-white p-12 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl font-bold uppercase mb-4">No orders yet</p>
                <p className="font-mono text-gray-500 mb-8">Time to cop some fresh gear.</p>
                <Link
                  href="/shop"
                  className="inline-block border-2 border-black px-8 py-3 font-black uppercase tracking-widest hover:bg-[#ff0055] hover:text-white hover:border-[#ff0055] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {orders.map((order, index) => (
                  <div key={index} className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-black text-white text-xs font-black px-2 py-1 uppercase tracking-widest">
                          {order.status}
                        </span>
                        <p className="font-mono text-gray-500 text-sm">{order.date}</p>
                      </div>
                      <p className="text-2xl font-black uppercase">Order #{order.orderId}</p>
                      <p className="font-mono text-gray-600 mt-2">{order.items} item{order.items > 1 ? 's' : ''}</p>
                    </div>

                    <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
                      <p className="text-3xl font-black text-[#ff0055]">₹{order.total}</p>
                      <Link
                        href={`/order/${order.orderId}`}
                        className="w-full md:w-auto text-center border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
