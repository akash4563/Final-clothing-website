import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default async function OrderStatusPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const orderId = resolvedParams.id;

  return (
    <main className="pt-32 pb-16 min-h-screen flex items-center justify-center bg-[#f4f4f0]">
      <div className="max-w-2xl w-full mx-4">
        <div className="border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffff00] -rotate-45 translate-x-16 -translate-y-16 border-l-4 border-b-4 border-black z-0"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-[#ff0055] rounded-full flex items-center justify-center border-4 border-black mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={3} />
            </div>

            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight">Order Confirmed!</h1>

            <div className="bg-gray-100 border-2 border-black border-dashed px-6 py-4 mb-8">
              <p className="text-gray-600 font-mono text-sm mb-1 uppercase">Order Number</p>
              <p className="text-2xl font-black tracking-widest">{orderId}</p>
            </div>

            <p className="text-lg font-medium text-gray-700 mb-10 max-w-md mx-auto">
              We've received your order and are getting it ready to drop. You'll get an email confirmation shortly.
            </p>

            <Link
              href="/shop"
              className="w-full sm:w-auto inline-block bg-black text-white px-12 py-4 font-black uppercase tracking-widest text-lg hover:bg-[#ff0055] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
