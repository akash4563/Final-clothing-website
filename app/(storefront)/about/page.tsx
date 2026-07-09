import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-500">
            Born from a desire to create clothing that matters. We believe in quality, sustainability, and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
              alt="Our store"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Unserious Approach</h2>
            <div className="prose prose-lg text-gray-500">
              <p className="mb-4">
                Founded by maverick, unseriious is a response to the fast-paced, disposable nature of modern fashion.
                We started with a simple idea: create beautifully designed, incredibly comfortable clothing without taking ourselves too seriously.
              </p>
              <p>
                Every piece in our collection is thoughtfully designed in our studio, working directly with ethical manufacturers
                to ensure that our garments not only look good but feel good to wear, both physically and morally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
