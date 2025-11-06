"use client";

import React from "react";
import Image from "next/image";

// Placeholder images for the left column (you can replace these with your actual local images)
const heroImages = [
  "/y1.avif", // Assuming this is your main image for the left side
  // You can add more images here if you want a small grid or stacked effect
];

const HeroSectionWithImage = () => {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column: Image Section */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] flex justify-center items-center">
            {/* Main image with rounded corners and shadow */}
            <div className="relative w-[80%] h-[450px] bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
              <Image
                src={heroImages[0] || "/y1.avif"} // Use your main hero image here
                alt="ISKCON Dwarka Youth Forum Activities"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover object-center rounded-3xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
                priority
              />
              {/* Overlay elements or additional images can go here if desired,
                  e.g., small overlapping images like in the reference */}
              {/* Example of a subtle overlay for effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>

            {/* Optional: Add a subtle patterned background or another image if you like */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-500 opacity-20 rounded-full mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-500 opacity-20 rounded-full mix-blend-screen animate-pulse-slow delay-500"></div>

          </div>

          {/* Right Column: Content Section */}
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            {/* Pre-heading */}
            <p className="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
              WELCOME TO ISKCON DWARKA YOUTH FORUM
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-100">
              Where Ancient Wisdom Lights the Path for Modern Youth
            </h2>

            {/* Paragraph Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-prose">
              The ISKCON Dwarka Youth Forum is a vibrant community dedicated to
              empowering young minds with timeless Vedic knowledge and practical
              guidance. We provide a supportive environment for personal growth,
              spiritual exploration, and developing essential life skills. Join us
              to discover purpose, build lasting friendships, and transform your
              life through Krishna consciousness.
            </p>

            {/* Call to Action Button (Optional) */}
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
              Explore Our Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionWithImage;