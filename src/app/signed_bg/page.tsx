// src/app/signed_bg/page.tsx
import React from "react";
import Image from "next/image";
import GitaCover from "@/public/gita-cover.png"; // Replace with your Bhagavad Gita cover image

const SignedBGPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      {/* Container */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Text & CTA */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-snug">
            The{" "}
            <span className="text-yellow-400">Bhagavad Gita</span> Is Lord Krishna's{" "}
            <span className="text-yellow-400">Timeless</span> Voice, Sharing{" "}
            <span className="text-yellow-400">Vedic Wisdom</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Join us in sharing the eternal wisdom of the Bhagavad Gita by gifting this sacred text to
            loved ones. Enlighten hearts and minds, and be a part of a spiritual journey.
          </p>

          {/* Statistics */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400">50,000</div>
            <div className="text-gray-300 text-lg">Gita Distributed</div>
          </div>

          {/* Stars */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:shadow-lg transition">
            Gift Gita →
          </button>
        </div>

        {/* Right: Book Image with Halo */}
        <div className="relative flex justify-center items-center">
          {/* Halo */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-400 opacity-20 animate-pulse"></div>

          {/* Book Image */}
          <div className="relative w-64 md:w-72 shadow-2xl">
            <Image
              src={GitaCover}
              alt="Bhagavad Gita Cover"
              className="rounded-xl"
              width={288}
              height={400}
            />
          </div>

          {/* Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white opacity-30 rotate-12"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white opacity-30 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default SignedBGPage;
