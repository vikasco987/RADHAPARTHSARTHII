"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BhagwatGeetaSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-orange-50 py-12 px-6 md:px-16 rounded-2xl shadow-md mt-10">
      {/* Left side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 w-full flex justify-center"
      >
        <Image
          src="/images/bhagwat-geeta.jpg" // put your image in /public/images/
          alt="Bhagwat Geeta"
          width={400}
          height={300}
          className="rounded-2xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Right side - Donation info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-12 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
          Support Bhagavad Gita Seva 🙏
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Help spread the divine wisdom of the Bhagavad Gita.  
          Your kind donation helps us distribute sacred texts and share this timeless knowledge.
        </p>

        {/* Updated button with external link */}
        <a
          href="https://zfrmz.in/7oGOIs1yHb2rUlfpiQ8K"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
        >
          Donate Now 💰
        </a>
      </motion.div>
    </section>
  );
}
