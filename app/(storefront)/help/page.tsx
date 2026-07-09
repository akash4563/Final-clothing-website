export default function HelpCenterPage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Help Center</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg">Where is my order?</h3>
                <p className="text-gray-600 mt-2">You can track your order status by logging into your profile and navigating to the Order History section. You will also receive an email with a tracking link once your order ships.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg">Do you ship internationally?</h3>
                <p className="text-gray-600 mt-2">Currently, we only ship within India. We hope to expand internationally soon.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
