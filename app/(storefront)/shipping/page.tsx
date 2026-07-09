export default function ShippingReturnsPage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Shipping & Returns</h1>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Shipping Policy</h2>
          <p>We offer free standard shipping on all orders over ₹4999 within India.</p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li>Standard Shipping (5-7 business days): ₹99</li>
            <li>Express Shipping (2-3 business days): ₹299</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black mt-12 mb-4">Return Policy</h2>
          <p>We want you to be completely satisfied with your purchase. If you are not happy, we accept returns within 14 days of delivery for a full refund or exchange.</p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li>Items must be unworn, unwashed, and in their original condition with all tags attached.</li>
            <li>Return shipping costs are the responsibility of the customer unless the item received was damaged or incorrect.</li>
            <li>Refunds will be processed to the original payment method within 5-7 business days after we receive the return.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
