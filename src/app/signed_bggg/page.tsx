// import React from "react";
// import Image from "next/image";

// const SignedBGPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 relative overflow-hidden">
//       {/* Main Container */}
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
//         {/* Left: Text & CTA */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold leading-snug">
//             The{" "}
//             <span className="text-yellow-400">Bhagavad Gita</span> Is Lord Krishna's{" "}
//             <span className="text-yellow-400">Timeless</span> Voice, Sharing{" "}
//             <span className="text-yellow-400">Vedic Wisdom</span>
//           </h1>
//           <p className="text-gray-300 text-lg">
//             Join us in sharing the eternal wisdom of the Bhagavad Gita by gifting this sacred text to
//             loved ones. Enlighten hearts and minds, and be a part of a spiritual journey.
//           </p>

//           {/* Statistics */}
//           <div className="flex items-center space-x-4">
//             <div className="text-4xl md:text-5xl font-bold text-yellow-400">50,000</div>
//             <div className="text-gray-300 text-lg">Gita Distributed</div>
//           </div>

//           {/* Stars */}
//           <div className="flex space-x-1">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <span key={i} className="text-yellow-400 text-xl">
//                 ★
//               </span>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <button className="mt-4 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:shadow-lg transition">
//             Gift Gita →
//           </button>
//         </div>

//         {/* Right: Book Image with Krishna behind it */}
//         <div className="relative flex justify-center items-center">
//           {/* Halo */}
//           <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-400 opacity-20 animate-pulse z-10"></div>

//           {/* Krishna background image - now spinning */}
//           {/* <div className="absolute bottom-6 w-80 md:w-96 lg:w-[28rem] z-0 animate-spin-slow"> */}
//           {/* <div className="absolute bottom-0 w-80 md:w-96 lg:w-[28rem] z-0 animate-spin-slow"> */}
//           <div className="absolute -bottom-10 w-80 md:w-96 lg:w-[28rem] z-0 animate-spin-slow">


//             <Image
//               src="/krishna.png"
//               alt="Krishna Background"
//               className="object-contain"
//               width={448}   // increased width
//               height={448}  // increased height
//             />
//           </div>

//           {/* Bhagavad Gita Book Image */}
//           <div className="relative w-64 md:w-72 shadow-2xl z-20">
//             <Image
//               src="/gita-cover.png"
//               alt="Bhagavad Gita Cover"
//               className="rounded-xl"
//               width={288}
//               height={400}
//             />
//           </div>

//           {/* Angular accents */}
//           <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white opacity-30 rotate-12 z-20"></div>
//           <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white opacity-30 rotate-45 z-20"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignedBGPage;



















import React from "react";
import Image from "next/image";

const SignedBGPage = () => {
  return (
    <div className="w-full h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden m-0 p-0">
      {/* Main Container */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10 px-8 md:px-12">
        {/* Left: Text & CTA */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-snug">
            The{" "}
            <span className="text-yellow-400">Bhagavad Gita</span> Is Lord
            Krishna's{" "}
            <span className="text-yellow-400">Timeless</span> Voice, Sharing{" "}
            <span className="text-yellow-400">Vedic Wisdom</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Join us in sharing the eternal wisdom of the Bhagavad Gita by
            gifting this sacred text to loved ones. Enlighten hearts and minds,
            and be a part of a spiritual journey.
          </p>

          {/* Statistics */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400">
              50,000
            </div>
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

        {/* Right: Book Image with Spinning Krishna behind it */}
        <div className="relative flex justify-center items-center">
          {/* Glowing Halo */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-400 opacity-20 animate-pulse z-10"></div>

          {/* Krishna Image (spinning behind the Gita) */}
          <div
            className="absolute animate-spin-slow z-0"
            style={{
              bottom: "-40px",
              transformOrigin: "center center",
            }}
          >
            <Image
              src="/krishna.png"
              alt="Krishna Background"
              className="object-contain opacity-90 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]"
              width={500} // larger
              height={500}
            />
          </div>

          {/* Bhagavad Gita Cover (in front) */}
          <div className="relative w-64 md:w-72 shadow-2xl z-20">
            <Image
              src="/gita-cover.png"
              alt="Bhagavad Gita Cover"
              className="rounded-xl"
              width={288}
              height={400}
            />
          </div>

          {/* Decorative Angular Borders */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white opacity-30 rotate-12 z-20"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white opacity-30 rotate-45 z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SignedBGPage;

