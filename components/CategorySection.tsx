

"use client";

import React from "react";
import Image from "next/image";

const imageItems = [
  { id: 1, image: "/y1.avif" },
  { id: 2, image: "/y2.avif" },
  { id: 3, image: "/y3.avif" },
  { id: 4, image: "/y4.avif" },
  { id: 5, image: "/y5.avif" },
  { id: 6, image: "/y6.avif" },
  { id: 7, image: "/y7.avif" },
  { id: 8, image: "/y8.avif" },
];

// ✅ Reusable ImageCard
const ImageCard = ({ src }: { src: string }) => (
  <div className="flex-shrink-0 w-[200px] h-[150px] sm:w-[280px] sm:h-[180px] rounded-2xl overflow-hidden shadow-md">
    <Image
      src={src}
      alt=""
      width={280}
      height={180}
      className="w-full h-full object-cover"
    />
  </div>
);

// ✅ Continuous Scrolling Row
const ScrollingRow = ({
  items,
  speed = 40,
  reverse = false,
}: {
  items: any[];
  speed?: number;
  reverse?: boolean;
}) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex gap-4 whitespace-nowrap ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Duplicate for seamless looping */}
        {[...items, ...items].map((item, index) => (
          <ImageCard key={index} src={item.image} />
        ))}
      </div>
    </div>
  );
};

// ✅ Main Component
const CategorySection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-snug mb-12">
          Discover the <span className="font-extrabold">TRUE</span> Essence of Wellness:
          <br />
          Ancient Wisdom for a Modern Life.
        </h1>

        <div className="space-y-8">
          <ScrollingRow items={imageItems.slice(0, 6)} speed={40} />
          <ScrollingRow items={imageItems.slice(2, 8)} speed={50} reverse />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
