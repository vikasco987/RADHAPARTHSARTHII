
// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// const banners = [
//   { id: 1, image: "/iskon1.jpg" },
//   { id: 2, image: "/iskon2.png" },
//   { id: 3, image: "/iskon3.png" },
//   { id: 4, image: "/iskon4.png"},
 
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % banners.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden mt-16 sm:mt-20">
//       {/* ✅ Adjust height per device */}
//       <div className="relative w-full h-[35vh] sm:h-[50vh] lg:h-[80vh]">
//         <Image
//           key={banners[current].id}
//           src={banners[current].image}
//           alt="Banner"
//           fill
//           priority
//           sizes="100vw"
//           // 👉 On mobile: show full image (object-contain)
//           // 👉 On larger screens: cover horizontally (object-cover)
//           className="object-contain sm:object-cover object-center"
//         />
//       </div>

//       {/* ✅ Dots Navigation */}
//       <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
//         {banners.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
//               index === current
//                 ? "bg-white scale-125 shadow-md"
//                 : "bg-gray-400 hover:bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }















"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const banners = [
  { id: 1, image: "/iskon1.jpg" },
  { id: 2, image: "/iskon2.png" },
  { id: 3, image: "/iskon3.png" },
  { id: 4, image: "/iskon4.png" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden mt-0 pt-0">
      {/* ✅ Adjust height per device */}
      <div className="relative w-full h-[35vh] sm:h-[50vh] lg:h-[80vh]">
        <Image
          key={banners[current].id}
          src={banners[current].image}
          alt="Banner"
          fill
          priority
          sizes="100vw"
          className="object-contain sm:object-cover object-center"
        />
      </div>

      {/* ✅ Dots Navigation */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-125 shadow-md"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
