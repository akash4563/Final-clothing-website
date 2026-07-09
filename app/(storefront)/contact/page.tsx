"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-500">
            Have a question or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg relative overflow-hidden">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-500 mb-6">
                Thanks for reaching out. We've received your message and will get back to you within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-black font-medium hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4 border bg-white"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4 border bg-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4 border bg-white"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </main>
  );
}
