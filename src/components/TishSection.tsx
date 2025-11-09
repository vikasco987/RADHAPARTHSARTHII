// "use client";

// import React from "react";
// import Image from "next/image";

// const categories = [
//   { id: 1, name: "Men Wellness", image: "/c1.jpg" },
//   { id: 2, name: "Women Wellness", image: "/c2.jpg" },
//   { id: 3, name: "Supplements", image: "/c3.jpg" },
//   { id: 4, name: "Ayurvedic Oils", image: "/c4.jpg" },
//   { id: 5, name: "Stomach Problem", image: "/c5.avif" },
//   { id: 6, name: "Immunity Booster", image: "/c6.avif" },
//   { id: 7, name: "Memory Booster", image: "/c7.avif" },
//   { id: 8, name: "Weight Gain", image: "/c8.avif" },
// ];

// export default function TishSection() {
//   // duplicate is done in JSX to create two groups for seamless animation
//   return (
//     <section className="bg-white py-12 md:py-20">
//       <div className="container mx-auto px-4 max-w-6xl text-center">
//         {/* headline */}
//         <div className="mb-8">
//           <p className="text-sm font-medium tracking-widest uppercase text-[#b99c68] mb-2">
//             welcome
//           </p>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
//             Discover our <span className="font-extrabold">Ayurvedic</span> approach to{" "}
//             <span className="font-extrabold">Wellness</span>
//           </h2>
//           <p className="text-lg mt-4 font-light text-gray-700">
//             Ancient wisdom, <span className="italic text-[#b99c68]">modern healing.</span>
//           </p>
//         </div>

//         {/* scroller */}
//         <div className="tish-scroller no-scrollbar" aria-hidden>
//           <div className="tish-track">
//             {/* Group 1 */}
//             <div className="tish-group">
//               {categories.map((cat) => (
//                 <div key={"g1-" + cat.id} className="tish-item">
//                   {/* Next Image - using fill would require relative parent, so using width/height fallback */}
//                   <Image
//                     src={cat.image}
//                     alt={cat.name}
//                     layout="fill"
//                     className="next-image"
//                     priority={false}
//                     sizes="(min-width:1024px) 300px, (min-width:768px) 260px, 220px"
//                     style={{ objectFit: "cover" }}
//                   />
//                   <div className="label">{cat.name}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Group 2 (duplicate) */}
//             <div className="tish-group" aria-hidden>
//               {categories.map((cat) => (
//                 <div key={"g2-" + cat.id} className="tish-item">
//                   <Image
//                     src={cat.image}
//                     alt={cat.name}
//                     layout="fill"
//                     className="next-image"
//                     priority={false}
//                     sizes="(min-width:1024px) 300px, (min-width:768px) 260px, 220px"
//                     style={{ objectFit: "cover" }}
//                   />
//                   <div className="label">{cat.name}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import React from "react";
// import Image from "next/image";

// // 🖼️ Image List
// const imageItems = [
//   { id: 1, image: "/y1.avif" },
//   { id: 2, image: "/y2.avif" },
//   { id: 3, image: "/y3.avif" },
//   { id: 4, image: "/y4.avif" },
//   { id: 5, image: "/y5.avif" },
//   { id: 6, image: "/y6.avif" },
//   { id: 7, image: "/y7.avif" },
//   { id: 8, image: "/y8.avif" },
// ];

// // ✅ Reusable Card
// const ImageCard = ({ src }: { src: string }) => (
//   <div className="flex-shrink-0 w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] rounded-full overflow-hidden shadow-md transition-transform hover:scale-105">
//     <Image
//       src={src}
//       alt=""
//       width={280}
//       height={180}
//       className="w-full h-full object-cover"
//     />
//   </div>
// );

// // ✅ Continuous Scroll Row
// const ScrollingRow = ({
//   items,
//   speed = 40,
//   direction = "left",
// }: {
//   items: any[];
//   speed?: number;
//   direction?: "left" | "right";
// }) => {
//   return (
//     <div className="relative overflow-hidden w-full">
//       <div
//         className={`flex gap-6 whitespace-nowrap ${
//           direction === "right"
//             ? "animate-scroll-right"
//             : "animate-scroll-left"
//         }`}
//         style={{ animationDuration: `${speed}s` }}
//       >
//         {[...items, ...items].map((item, index) => (
//           <ImageCard key={index} src={item.image} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // ✅ Main Section
// const TishSection = () => {
//   return (
//     <section className="bg-white py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 max-w-6xl text-center">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-snug mb-12">
//           Discover the <span className="font-extrabold">TRUE</span> Essence of Wellness:
//           <br />
//           Ancient Wisdom for a Modern Life.
//         </h1>

//         <div className="space-y-10">
//           {/* 👈 First Row: slow, left to right */}
//           <ScrollingRow items={imageItems} speed={50} direction="right" />

//           {/* 👉 Second Row: faster, right to left */}
//           <ScrollingRow items={imageItems} speed={30} direction="left" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TishSection;








// "use client";

// import React from "react";
// import Image from "next/image";

// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     <div
//       className={`tish-scroller ${reverse ? "reverse" : ""}`}
//       style={{
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       <div
//         className={`tish-track ${reverse ? "animate-[tish-scroll_reverse_linear_infinite]" : ""}`}
//         style={{
//           animationDuration: duration,
//           animationDirection: reverse ? "reverse" : "normal",
//         }}
//       >
//         <div className="tish-group">
//           {images.map((src, i) => (
//             <div key={i} className="tish-item custom-oval-radius">
//               <Image
//                 src={src}
//                 alt={`Image ${i + 1}`}
//                 fill
//                 sizes="300px"
//                 className="object-cover rounded-full"
//               />
//             </div>
//           ))}
//         </div>
//         {/* duplicate group for seamless looping */}
//         <div className="tish-group">
//           {images.map((src, i) => (
//             <div key={`dup-${i}`} className="tish-item custom-oval-radius">
//               <Image
//                 src={src}
//                 alt={`Duplicate ${i + 1}`}
//                 fill
//                 sizes="300px"
//                 className="object-cover rounded-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component
// const TishSection = () => {
//   return (
//     <section className="bg-white py-16 md:py-24">
//       <div className="container mx-auto px-4 text-center max-w-6xl">
//         <h2 className="text-3xl md:text-4xl font-serif mb-10 text-gray-900">
//           🌼 Our Serene Gallery 🌼
//         </h2>

//         <div className="space-y-10">
//           {/* Slow left-to-right row */}
//           <TishRow duration="35s" />

//           {/* Faster right-to-left row */}
//           <TishRow reverse duration="18s" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TishSection;








// "use client";

// import React from "react";
// import Image from "next/image";

// // NOTE: Use local images for better performance and type-checking if possible.
// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     // The main container for the scroller. `relative` is key for positioning the fade masks.
//     <div
//       className={`tish-scroller relative overflow-hidden h-[180px] w-full`}
//       style={{
//         // Set the custom CSS variable for Tailwind JIT or other utility classes to use the duration
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       {/*
//         FADE MASK - Creates a transparent-to-solid gradient overlay on the ends
//         to make the scroll seem infinite and not just stop abruptly.
//       */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         {/* Left Fade */}
//         <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r from-white to-transparent" />
//         {/* Right Fade */}
//         <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l from-white to-transparent" />
//       </div>

//       {/* The animated track */}
//       <div
//         className={`tish-track flex w-max ${
//           reverse
//             ? "animate-[tish-scroll-reverse_linear_infinite]"
//             : "animate-[tish-scroll_linear_infinite]"
//         }`}
//         style={{
//           animationDuration: duration,
//         }}
//       >
//         {/* Group of images 1 */}
//         <div className="tish-group flex gap-8">
//           {images.map((src, i) => (
//             <div
//               key={i}
//               className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer"
//             >
//               <Image
//                 src={src}
//                 alt={`Gallery image ${i + 1}`}
//                 fill
//                 sizes="(max-width: 768px) 150px, 150px"
//                 className="object-cover rounded-full"
//                 priority={i < 4} // Prioritize first few for LCP
//               />
//             </div>
//           ))}
//         </div>
//         {/* Duplicate group for seamless looping */}
//         <div className="tish-group flex gap-8">
//           {images.map((src, i) => (
//             <div
//               key={`dup-${i}`}
//               className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer"
//             >
//               <Image
//                 src={src}
//                 alt={`Duplicate gallery image ${i + 1}`}
//                 fill
//                 sizes="(max-width: 768px) 150px, 150px"
//                 className="object-cover rounded-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component
// const TishSection = () => {
//   return (
//     // Increased padding, vibrant background color, and a sleek dark text color
//     <section className="bg-white py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 text-center max-w-7xl">
//         <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800 tracking-tight">
//           Capturing Moments
//         </h2>
//         <p className="text-lg md:text-xl font-light mb-16 text-gray-600 max-w-2xl mx-auto">
//           A continuous stream of our favorite visuals, always in motion.
//         </p>

//         <div className="space-y-12">
//           {/* Slower row: Gentle movement */}
//           <TishRow duration="40s" />

//           {/* Faster, reversed row: Creates visual complexity and dynamic feel */}
//           <TishRow reverse duration="22s" />

//           {/* Optional: Add a third row for more depth! */}
//           <TishRow duration="30s" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TishSection;

























// "use client";

// import React from "react";
// import Image from "next/image";

// // NOTE: Images array remains the same
// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row (Kept identical for the attractive styling and functionality)
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     // The main container for the scroller. `relative` is key for positioning the fade masks.
//     <div
//       className={`tish-scroller relative overflow-hidden h-[180px] w-full`}
//       style={{
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       {/* FADE MASK - Creates a transparent-to-solid gradient overlay on the ends.
//         (NOTE: Change 'from-white' to match your background color if it's not white)
//       */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         {/* Left Fade */}
//         <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r from-white to-transparent" />
//         {/* Right Fade */}
//         <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l from-white to-transparent" />
//       </div>

//       {/* The animated track */}
//       <div
//         className={`tish-track flex w-max ${
//           reverse
//             ? "animate-[tish-scroll-reverse_linear_infinite]"
//             : "animate-[tish-scroll_linear_infinite]"
//         }`}
//         style={{
//           animationDuration: duration,
//         }}
//       >
//         {/* Group of images 1 */}
//         <div className="tish-group flex gap-8">
//           {images.map((src, i) => (
//             <div
//               key={i}
//               className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer"
//             >
//               <Image
//                 src={src}
//                 alt={`Gallery image ${i + 1}`}
//                 fill
//                 sizes="(max-width: 768px) 150px, 150px"
//                 className="object-cover rounded-full"
//                 priority={i < 4}
//               />
//             </div>
//           ))}
//         </div>
//         {/* Duplicate group for seamless looping */}
//         <div className="tish-group flex gap-8">
//           {images.map((src, i) => (
//             <div
//               key={`dup-${i}`}
//               className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer"
//             >
//               <Image
//                 src={src}
//                 alt={`Duplicate gallery image ${i + 1}`}
//                 fill
//                 sizes="(max-width: 768px) 150px, 150px"
//                 className="object-cover rounded-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component - Now using H1 and exactly TWO rows
// const TishSection = () => {
//   return (
//     <section className="bg-white py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 text-center max-w-7xl">
        
//         {/* 1. The Big Heading (h1) 
//           Using huge font sizes and max-width to control the line break 
//           to achieve the "1 and a half line" look.
//         */}
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-16 text-gray-800 tracking-tight leading-tight max-w-3xl mx-auto">
//           Unveiling Our Featured Collection of Visual Delights
//         </h1>

//         {/* 2. Exactly Two Rows 
//         */}
//         <div className="space-y-12">
//           {/* Row 1: Slower movement (40s) */}
//           <TishRow duration="40s" />

//           {/* Row 2: Faster, reversed movement (22s) */}
//           <TishRow reverse duration="22s" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TishSection;









// "use client";

// import React from "react";
// import Image from "next/image";

// // Images array (assuming you have these files)
// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     <div
//       className={`tish-scroller relative overflow-hidden h-[180px] w-full`}
//       style={{
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       {/* FADE MASK: Critical for the seamless, attractive effect */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r from-white to-transparent" />
//         <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l from-white to-transparent" />
//       </div>

//       <div
//         className={`tish-track flex w-max ${
//           reverse
//             ? "animate-[tish-scroll-reverse_linear_infinite]"
//             : "animate-[tish-scroll_linear_infinite]"
//         }`}
//         style={{
//           animationDuration: duration,
//         }}
//       >
//         {/* Group 1 and Duplicated Group 2 */}
//         {[...images, ...images].map((src, i) => (
//           <div
//             key={i}
//             className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer flex-shrink-0 mx-4" // Added mx-4 to manage internal spacing
//           >
//             <Image
//               src={src}
//               alt={`Dwarka Youth Image ${i + 1}`}
//               fill
//               sizes="150px"
//               className="object-cover rounded-full"
//               priority={i < 4}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component - ISKCON Dwarka Youth Forum
// const TishSection = () => {
//   return (
//     <section className="bg-white py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 text-center max-w-7xl">
        
//         {/* 1. The Big, Attractive Heading (1.5 lines) */}
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-16 text-gray-800 tracking-tight leading-tight max-w-4xl mx-auto">
//           Unlocking Your True Potential: <br className="hidden sm:inline" /> The Dwarka Forum for Inspired Youth.
//         </h1>

//         {/* 2. Exactly Two Dynamic Rows */}
//         <div className="space-y-12">
//           {/* Row 1: Slower movement (40s) */}
//           <TishRow duration="40s" />

//           {/* Row 2: Faster, reversed movement (22s) */}
//           <TishRow reverse duration="22s" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TishSection;






// "use client";

// import React from "react";
// import Image from "next/image";

// // Images array (assuming you have these files)
// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row (Kept identical)
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     <div
//       className={`tish-scroller relative overflow-hidden h-[280px] w-full`}
//       style={{
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       {/* FADE MASK */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r from-white to-transparent" />
//         <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l from-white to-transparent" />
//       </div>

//       <div
//         className={`tish-track flex w-max ${
//           reverse
//             ? "animate-[tish-scroll-reverse_linear_infinite]"
//             : "animate-[tish-scroll_linear_infinite]"
//         }`}
//         style={{
//           animationDuration: duration,
//         }}
//       >
//         {/* Group 1 and Duplicated Group 2 */}
//         {[...images, ...images].map((src, i) => (
//           <div
//             key={i}
//             className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer flex-shrink-0 mx-4"
//           >
//             <Image
//               src={src}
//               alt={`Dwarka Youth Image ${i + 1}`}
//               fill
//               sizes="150px"
//               className="object-cover rounded-full"
//               priority={i < 4}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component - Matching the Heading Structure from the Image
// const TishSection = () => {
//   return (
//     <section className="bg-white py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 text-center max-w-5xl">
        
//         {/* 1. Subtle Pre-Heading (Matching 'welcome' style) */}
//         <p className="text-sm uppercase tracking-widest text-yellow-700 font-serif mb-4">
//           ISKCON Dwarka Youth Forum
//         </p>

//         {/* 2. Large, Multi-Line Main Heading (Matching the Q&A style) */}
//         <h1 className="text-4xl md:text-5xl font-light mb-8 text-gray-800 tracking-tight leading-snug">
//           We believe every young person is searching for
//           <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mx-2">
//             real answers.
//           </span>
//           <br />
//           Who am I? What is my True Purpose?
//         </h1>

//         {/* 3. Small, Italicized Sub-line (Matching 'we're here to speak about it' style) */}
//         <p className="text-xl italic font-serif text-yellow-800/80 mb-20">
//           we're here to discover the timeless answers together.
//         </p>

//         {/* 4. Exactly Two Dynamic Rows */}
//         <div className="space-y-12">
//           <TishRow duration="40s" />
//           <TishRow reverse duration="22s" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TishSection;









// "use client";

// import React from "react";
// import Image from "next/image";

// // Images array (assuming you have these files)
// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row (Kept identical for the attractive styling and functionality)
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     // NOTE: The tish-scroller itself already has w-full, but now its parent also has no max-width.
//     <div
//       className={`tish-scroller relative overflow-hidden h-[180px] w-full`}
//       style={{
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       {/* FADE MASK: CRITICAL for seamless full-width effect. 
//           It must match the background color (from-white in this case). */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r from-white to-transparent" />
//         <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l from-white to-transparent" />
//       </div>

//       <div
//         className={`tish-track flex w-max ${
//           reverse
//             ? "animate-[tish-scroll-reverse_linear_infinite]"
//             : "animate-[tish-scroll_linear_infinite]"
//         }`}
//         style={{
//           animationDuration: duration,
//         }}
//       >
//         {/* Group 1 and Duplicated Group 2 */}
//         {[...images, ...images].map((src, i) => (
//           <div
//             key={i}
//             className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer flex-shrink-0 mx-4"
//           >
//             <Image
//               src={src}
//               alt={`Dwarka Youth Image ${i + 1}`}
//               fill
//               sizes="150px"
//               className="object-cover rounded-full"
//               priority={i < 4}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component - Heading remains centered, rows are now full width
// const TishSection = () => {
//   return (
//     <section className="bg-white py-16 md:py-24 overflow-hidden">
//       {/* Container for the centered heading (constrained to max-width) */}
//       <div className="container mx-auto px-4 text-center max-w-5xl mb-16"> 
        
//         {/* 1. The Attractive Heading Structure */}
//         <p className="text-sm uppercase tracking-widest text-yellow-700 font-serif mb-4">
//           ISKCON Dwarka Youth Forum
//         </p>

//         <h1 className="text-4xl md:text-5xl font-light mb-8 text-gray-800 tracking-tight leading-snug">
//           We believe every young person is searching for
//           <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mx-2">
//             real answers.
//           </span>
//           <br />
//           Who am I? What is my True Purpose?
//         </h1>

//         <p className="text-xl italic font-serif text-yellow-800/80">
//           we're here to discover the timeless answers together.
//         </p>
//       </div>

//       {/* 2. Full-Width Image Section (No container, just space-y) */}
//       <div className="space-y-12">
//         {/* Row 1: Slower movement (40s) */}
//         <TishRow duration="40s" />

//         {/* Row 2: Faster, reversed movement (22s) */}
//         <TishRow reverse duration="22s" />
//       </div>

//     </section>
//   );
// };

// export default TishSection;








// "use client";

// import React from "react";
// import Image from "next/image";

// // Images array (assuming you have these files)
// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     <div
//       className={`tish-scroller relative overflow-hidden h-[180px] w-full`}
//       style={{
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       {/* FADE MASK: CHANGED from 'from-white' to 'from-gray-900' 
//         so images fade smoothly into the dark background.
//       */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         {/* Left Fade */}
//         <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r from-gray-900 to-transparent" /> 
//         {/* Right Fade */}
//         <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l from-gray-900 to-transparent" />
//       </div>

//       <div
//         className={`tish-track flex w-max ${
//           reverse
//             ? "animate-[tish-scroll-reverse_linear_infinite]"
//             : "animate-[tish-scroll_linear_infinite]"
//         }`}
//         style={{
//           animationDuration: duration,
//         }}
//       >
//         {/* Group 1 and Duplicated Group 2 */}
//         {[...images, ...images].map((src, i) => (
//           <div
//             key={i}
//             className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer flex-shrink-0 mx-4"
//           >
//             <Image
//               src={src}
//               alt={`Dwarka Youth Image ${i + 1}`}
//               fill
//               sizes="150px"
//               className="object-cover rounded-full"
//               priority={i < 4}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component - Dark Grey Background and Adjusted Text Colors
// const TishSection = () => {
//   return (
//     // 1. CHANGED bg-white to bg-gray-900
//     <section className="bg-gray-900 py-16 md:py-24 overflow-hidden">
//       {/* Container for the centered heading (constrained to max-width) */}
//       <div className="container mx-auto px-4 text-center max-w-5xl mb-16"> 
        
//         {/* 1. The Attractive Heading Structure - Text colors adjusted for dark background */}
//         <p className="text-sm uppercase tracking-widest text-red-500 font-serif mb-4">
//           ISKCON Dwarka Youth Forum
//         </p>

//         {/* 2. Main Heading text color changed from gray-800 to gray-100 */}
//         <h1 className="text-4xl md:text-5xl font-light mb-8 text-gray-100 tracking-tight leading-snug">
//           We believe every young person is searching for
//           <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300 mx-2"> 
//             real answers.
//           </span>
//           <br />
//           Who am I? What is my True Purpose?
//         </h1>

//         {/* 3. Sub-line text color changed for contrast */}
//         <p className="text-xl italic font-serif text-yellow-500/80">
//           we're here to discover the timeless answers together.
//         </p>
//       </div>

//       {/* 4. Full-Width Image Section */}
//       <div className="space-y-12">
//         <TishRow duration="40s" />
//         <TishRow reverse duration="22s" />
//       </div>
//     </section>
//   );
// };

// export default TishSection;













// "use client";

// import React from "react";
// import Image from "next/image";

// // Images array (assuming you have these files)
// const images = [
//   "/y1.avif",
//   "/y2.avif",
//   "/y3.avif",
//   "/y4.avif",
//   "/y5.avif",
//   "/y6.avif",
//   "/y7.avif",
//   "/y8.avif",
// ];

// // 🔁 Reusable Scroller Row
// const TishRow = ({
//   reverse = false,
//   duration = "30s",
// }: {
//   reverse?: boolean;
//   duration?: string;
// }) => {
//   return (
//     <div
//       className={`tish-scroller relative overflow-hidden h-[180px] w-full`}
//       style={{
//         "--tish-scroll-duration": duration,
//       } as React.CSSProperties}
//     >
//       {/* FADE MASK: Adjusted from-gray-900 to from-indigo-900 to match the new background */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         {/* Left Fade */}
//         <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r from-indigo-900 to-transparent" /> 
//         {/* Right Fade */}
//         <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l from-indigo-900 to-transparent" />
//       </div>

//       <div
//         className={`tish-track flex w-max ${
//           reverse
//             ? "animate-[tish-scroll-reverse_linear_infinite]"
//             : "animate-[tish-scroll_linear_infinite]"
//         }`}
//         style={{
//           animationDuration: duration,
//         }}
//       >
//         {/* Group 1 and Duplicated Group 2 */}
//         {[...images, ...images].map((src, i) => (
//           <div
//             key={i}
//             className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer flex-shrink-0 mx-4"
//           >
//             <Image
//               src={src}
//               alt={`Dwarka Youth Image ${i + 1}`}
//               fill
//               sizes="150px"
//               className="object-cover rounded-full"
//               priority={i < 4}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // 🌿 Main Component - Attractive Colored Background
// const TishSection = () => {
//   return (
//     // 1. CHANGED background color from bg-gray-900 to a deep, attractive bg-indigo-900
//     <section className="bg-indigo-900 py-16 md:py-24 overflow-hidden">
//       {/* Container for the centered heading (constrained to max-width) */}
//       <div className="container mx-auto px-4 text-center max-w-5xl mb-16"> 
        
//         {/* 1. Sub-Heading: Changed text-red-500 to text-orange-400 for better contrast */}
//         <p className="text-sm uppercase tracking-widest text-orange-400 font-serif mb-4">
//           ISKCON Dwarka Youth Forum
//         </p>

//         {/* 2. Main Heading: Changed from gray-100 to a brighter white (text-white) */}
//         <h1 className="text-4xl md:text-5xl font-light mb-8 text-white tracking-tight leading-snug">
//           We believe every young person is searching for
//           {/* Enhanced Gradient: Using pink and yellow for high energy */}
//           <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300 mx-2"> 
//             real answers.
//           </span>
//           <br />
//           Who am I? What is my True Purpose?
//         </h1>

//         {/* 3. Sub-line: Changed from text-yellow-500/80 to a brighter text-green-300 */}
//         <p className="text-xl italic font-serif text-green-300/90">
//           we're here to discover the timeless answers together.
//         </p>
//       </div>

//       {/* 4. Full-Width Image Section */}
//       <div className="space-y-12">
//         <TishRow duration="40s" />
//         <TishRow reverse duration="22s" />
//       </div>
//     </section>
//   );
// };

// export default TishSection;















"use client";

import React from "react";
import Image from "next/image";

// Images array (assuming you have these files)
const images = [
  "/y1.avif",
  "/y2.avif",
  "/y3.jpeg",
  "/y4.avif",
  "/y5.avif",
  "/y6.avif",
  "/y7.avif",
  "/y8.avif",
];

// 🔁 Reusable Scroller Row
const TishRow = ({
  reverse = false,
  duration = "30s",
}: {
  reverse?: boolean;
  duration?: string;
}) => {
  // Define the light background color variable
  const lightBgColor = "from-gray-50"; 
  
  return (
    <div
      className={`tish-scroller relative overflow-hidden h-[180px] w-full`}
      style={{
        "--tish-scroll-duration": duration,
      } as React.CSSProperties}
    >
      {/* FADE MASK: Changed from-indigo-900 to from-gray-50 to match the new light background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left Fade */}
        <div className={`absolute left-0 top-0 bottom-0 w-1/12 bg-gradient-to-r ${lightBgColor} to-transparent`} /> 
        {/* Right Fade */}
        <div className={`absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-l ${lightBgColor} to-transparent`} />
      </div>

      <div
        className={`tish-track flex w-max ${
          reverse
            ? "animate-[tish-scroll-reverse_linear_infinite]"
            : "animate-[tish-scroll_linear_infinite]"
        }`}
        style={{
          animationDuration: duration,
        }}
      >
        {/* Group 1 and Duplicated Group 2 */}
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="tish-item w-[150px] h-[150px] relative rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer flex-shrink-0 mx-4"
          >
            <Image
              src={src}
              alt={`Dwarka Youth Image ${i + 1}`}
              fill
              sizes="150px"
              className="object-cover rounded-full"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// 🌿 Main Component - Light Colored Background
const TishSection = () => {
  return (
    // 1. CHANGED background color from bg-indigo-900 to a light bg-gray-50
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Container for the centered heading (constrained to max-width) */}
      <div className="container mx-auto px-4 text-center max-w-5xl mb-16"> 
        
        {/* 1. Sub-Heading: Retained text-orange-400 for a bright accent */}
        <p className="text-sm uppercase tracking-widest text-orange-600 font-serif mb-4">
          ISKCON Dwarka Youth Forum
        </p>

        {/* 2. Main Heading: Changed from white to dark text (text-gray-900) */}
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight leading-snug">
          We believe every young person is searching for
          {/* Enhanced Gradient: Gradient colors still look vibrant on light background */}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-500 mx-2"> 
            real answers.
          </span>
          <br />
          Who am I? What is my True Purpose?
        </h1>

        {/* 3. Sub-line: Changed from light green to a dark indigo for depth */}
        <p className="text-xl italic font-serif text-indigo-700/90">
          we're here to discover the timeless answers together.
        </p>
      </div>

      {/* 4. Full-Width Image Section */}
      <div className="space-y-12">
        <TishRow duration="40s" />
        <TishRow reverse duration="22s" />
      </div>
    </section>
  );
};

export default TishSection;