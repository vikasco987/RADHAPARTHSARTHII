// // components/IskconDwarkaHero.jsx

// import React from 'react';

// const IskconDwarkaHero = () => {
//   // Mock data based on the ISKCON Dwarka details
//   const templeData = {
//     welcome: "WELCOME TO ISKCON DWARKA",
//     title: "Where the Lord Reigned: A Temple of Pure Devotion",
//     history: "The ISKCON Dwarka Dham, also known as Sri Rukminidevi Dwarkadhish Dham, was established in 1996 by His Holiness Mahavishnu Goswami Maharaj. He arrived in this sacred land—the legendary kingdom of Lord Krishna—with a singular, unwavering desire: to build a beautiful, solid stone temple for the worship of the presiding Deities, Lord Dwarkadhish and Sri Rukmini Devi. Inspired by the teachings of Srila Prabhupada, Maharaj resolved to rely purely on his service to Krishna. Today, this unique, entirely stone-built temple stands as a potent manifestation of absolute faith and devotion, inviting seekers to experience the divine presence of the Lord in His own eternal city.",
//     imageUrl: "/images/iskcon-dwarka-placeholder.jpg", // Replace with your actual image path
//   };

//   return (
//     // Outer container matching the dark theme background
//     <section className="bg-gray-800 text-white pt-20 pb-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between">
          
//           {/* Left Side: Image and Background Graphic */}
//           <div className="md:w-1/2 relative p-4 order-2 md:order-1">
//             {/* Background pattern similar to the Vrindavan image */}
//             <div className="absolute inset-0 bg-pink-600/30 rounded-full blur-3xl opacity-20 transform translate-x-12 translate-y-8 z-0 hidden lg:block"></div>
            
//             {/* Placeholder for the main image (replace with a Next.js <Image> component for production) */}
//             <div className="relative w-full h-96 bg-gray-700 rounded-lg shadow-xl overflow-hidden z-10">
//               {/* NOTE: In a real Next.js app, use: 
//                 <Image src={templeData.imageUrl} alt="ISKCON Dwarka Temple" layout="fill" objectFit="cover" className="rounded-lg" /> 
//               */}
//               <img
//                 src={templeData.imageUrl}
//                 alt="ISKCON Dwarka Temple"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                   <span className="text-xl font-bold text-white/80">
                      
//                   </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Text Content */}
//           <div className="md:w-1/2 p-4 space-y-6 order-1 md:order-2">
            
//             {/* WELCOME TO ISKCON DWARKA */}
//             <p className="text-sm font-semibold tracking-widest uppercase text-pink-500">
//               {templeData.welcome}
//             </p>

//             {/* Hero Title */}
//             <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
//               {templeData.title.split(':').map((part, index) => (
//                 <React.Fragment key={index}>
//                   {index > 0 && <span className="block mt-2">{part.trim()}</span>}
//                   {index === 0 && part.trim()}
//                 </React.Fragment>
//               ))}
//             </h1>

//             {/* History/Body Text */}
//             <p className="mt-4 text-lg text-gray-300 leading-relaxed">
//               {templeData.history.split('Lord Dwarkadhish and Sri Rukmini Devi').map((part, index) => {
//                 if (index === 0) {
//                   return part;
//                 }
//                 // Highlighted text
//                 return (
//                   <React.Fragment key={index}>
//                     <strong className="text-yellow-400">Lord Dwarkadhish and Sri Rukmini Devi</strong>
//                     {part}
//                   </React.Fragment>
//                 );
//               })}
//             </p>
            
//             {/* Call to Action Buttons (Optional, added for complete structure) */}
//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="/donate"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition duration-150"
//               >
//                 Donate
//               </a>
//               <a
//                 href="/guest-house"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-pink-500 text-base font-medium rounded-md text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white transition duration-150"
//               >
//                 Guest House
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IskconDwarkaHero;














// // components/IskconDwarkaHero.jsx

// import React from 'react';

// const IskconDwarkaHero = () => {
//   // Mock data based on the ISKCON Dwarka details
//   const templeData = {
//     welcome: "WELCOME TO ISKCON DWARKA",
//     title: "Where the Lord Reigned: A Temple of Pure Devotion",
//     history: "The ISKCON Dwarka Dham, also known as Sri Rukminidevi Dwarkadhish Dham, was established in 1996 by His Holiness Mahavishnu Goswami Maharaj. He arrived in this sacred land—the legendary kingdom of Lord Krishna—with a singular, unwavering desire: to build a beautiful, solid stone temple for the worship of the presiding Deities, Lord Dwarkadhish and Sri Rukmini Devi. Inspired by the teachings of Srila Prabhupada, Maharaj resolved to rely purely on his service to Krishna. Today, this unique, entirely stone-built temple stands as a potent manifestation of absolute faith and devotion, inviting seekers to experience the divine presence of the Lord in His own eternal city.",
//     imageUrl: "/images/iskcon-dwarka-placeholder.jpg", // Replace with your actual image path
//   };

//   return (
//     // Outer container: CHANGED from bg-gray-800 to bg-gray-100 and text-white to text-gray-900
//     <section className="bg-gray-100 text-gray-900 pt-20 pb-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between">
          
//           {/* Left Side: Image and Background Graphic */}
//           <div className="md:w-1/2 relative p-4 order-2 md:order-1">
//             {/* Background pattern: Adjusted opacity/color for a light background */}
//             <div className="absolute inset-0 bg-pink-600/30 rounded-full blur-3xl opacity-50 transform translate-x-12 translate-y-8 z-0 hidden lg:block"></div>
            
//             {/* Placeholder for the main image */}
//             <div className="relative w-full h-96 bg-gray-300 rounded-lg shadow-xl overflow-hidden z-10">
//               {/* NOTE: Image background changed to a lighter shade (bg-gray-300) */}
//               <img
//                 src={templeData.imageUrl}
//                 alt="ISKCON Dwarka Temple"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
//                 <span className="text-xl font-bold text-gray-900/80">
                  
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Text Content */}
//           <div className="md:w-1/2 p-4 space-y-6 order-1 md:order-2">
            
//             {/* WELCOME TO ISKCON DWARKA - Color remains pink for accent */}
//             <p className="text-sm font-semibold tracking-widest uppercase text-pink-600">
//               {templeData.welcome}
//             </p>

//             {/* Hero Title - CHANGED to dark text (text-gray-900) */}
//             <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
//               {templeData.title.split(':').map((part, index) => (
//                 <React.Fragment key={index}>
//                   {index > 0 && <span className="block mt-2">{part.trim()}</span>}
//                   {index === 0 && part.trim()}
//                 </React.Fragment>
//               ))}
//             </h1>

//             {/* History/Body Text - CHANGED to dark text (text-gray-700) */}
//             <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//               {templeData.history.split('Lord Dwarkadhish and Sri Rukmini Devi').map((part, index) => {
//                 if (index === 0) {
//                   return part;
//                 }
//                 // Highlighted text color remains yellow
//                 return (
//                   <React.Fragment key={index}>
//                     <strong className="text-pink-600">Lord Dwarkadhish and Sri Rukmini Devi</strong>
//                     {part}
//                   </React.Fragment>
//                 );
//               })}
//             </p>
            
//             {/* Call to Action Buttons */}
//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="/donate"
//                 // Button 1: Text color adjusted for light background
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition duration-150"
//               >
//                 Donate
//               </a>
//               <a
//                 href="/guest-house"
//                 // Button 2: Text color adjusted for light background
//                 className="inline-flex items-center justify-center px-6 py-3 border border-pink-500 text-base font-medium rounded-md text-pink-600 bg-transparent hover:bg-pink-600 hover:text-white transition duration-150"
//               >
//                 Guest House
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IskconDwarkaHero;

















// // components/IskconDwarkaHero.jsx

// import React from 'react';

// const IskconDwarkaHero = () => {
//   // Mock data based on the ISKCON Dwarka details
//   const templeData = {
//     welcome: "WELCOME TO ISKCON DWARKA",
//     title: "Where the Lord Reigned: A Temple of Pure Devotion",
//     history: "The ISKCON Dwarka Dham, also known as Sri Rukminidevi Dwarkadhish Dham, was established in 1996 by His Holiness Mahavishnu Goswami Maharaj. He arrived in this sacred land—the legendary kingdom of Lord Krishna—with a singular, unwavering desire: to build a beautiful, solid stone temple for the worship of the presiding Deities, Lord Dwarkadhish and Sri Rukmini Devi. Inspired by the teachings of Srila Prabhupada, Maharaj resolved to rely purely on his service to Krishna. Today, this unique, entirely stone-built temple stands as a potent manifestation of absolute faith and devotion, inviting seekers to experience the divine presence of the Lord in His own eternal city.",
//     // !!! VIDEO PATH HAS BEEN UPDATED HERE !!!
//     // The path starts from the 'public' directory, so we use '/' in the component.
//     videoUrl: "/[ZapCap AI] - Sri Balarama Purnima Maha Mahotsava at I....mp4", 
//   };

//   return (
//     <section className="bg-gray-100 text-gray-900 pt-20 pb-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between">
          
//           {/* Left Side: Video Component */}
//           <div className="md:w-1/2 relative p-4 order-2 md:order-1">
//             {/* Background pattern */}
//             <div className="absolute inset-0 bg-pink-600/30 rounded-full blur-3xl opacity-50 transform translate-x-12 translate-y-8 z-0 hidden lg:block"></div>
            
//             {/* The Video Element */}
//             <div className="relative w-full h-96 bg-gray-300 rounded-lg shadow-xl overflow-hidden z-10">
//               <video
//                 // Video is loaded using the updated path
//                 src={templeData.videoUrl}
//                 alt="ISKCON Dwarka Balarama Purnima Video"
//                 className="w-full h-full object-cover"
//                 autoPlay 
//                 loop 
//                 muted 
//                 playsInline 
//                 controls={false} 
//               />
//               <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
//                 <span className="text-xl font-bold text-gray-900/80">
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Text Content */}
//           <div className="md:w-1/2 p-4 space-y-6 order-1 md:order-2">
            
//             {/* WELCOME TO ISKCON DWARKA */}
//             <p className="text-sm font-semibold tracking-widest uppercase text-pink-600">
//               {templeData.welcome}
//             </p>

//             {/* Hero Title */}
//             <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
//               {templeData.title.split(':').map((part, index) => (
//                 <React.Fragment key={index}>
//                   {index > 0 && <span className="block mt-2">{part.trim()}</span>}
//                   {index === 0 && part.trim()}
//                 </React.Fragment>
//               ))}
//             </h1>

//             {/* History/Body Text */}
//             <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//               {templeData.history.split('Lord Dwarkadhish and Sri Rukmini Devi').map((part, index) => {
//                 if (index === 0) {
//                   return part;
//                 }
//                 // Highlighted text color
//                 return (
//                   <React.Fragment key={index}>
//                     <strong className="text-pink-600">Lord Dwarkadhish and Sri Rukmini Devi</strong>
//                     {part}
//                   </React.Fragment>
//                 );
//               })}
//             </p>
            
//             {/* Call to Action Buttons */}
//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="/donate"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition duration-150"
//               >
//                 Donate
//               </a>
//               <a
//                 href="/guest-house"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-pink-500 text-base font-medium rounded-md text-pink-600 bg-transparent hover:bg-pink-600 hover:text-white transition duration-150"
//               >
//                 Guest House
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IskconDwarkaHero;












// components/IskconDwarkaHero.jsx

import React from 'react';

const IskconDwarkaHero = () => {
  const templeData = {
    welcome: "WELCOME TO ISKCON DWARKA",
    title: "Where the Lord Reigned: A Temple of Pure Devotion",
    history:
      "The ISKCON Dwarka Dham, also known as Sri Rukminidevi Dwarkadhish Dham, was established in 1996 by His Holiness Mahavishnu Goswami Maharaj. He arrived in this sacred land—the legendary kingdom of Lord Krishna—with a singular, unwavering desire: to build a beautiful, solid stone temple for the worship of the presiding Deities, Lord Dwarkadhish and Sri Rukmini Devi. Inspired by the teachings of Srila Prabhupada, Maharaj resolved to rely purely on his service to Krishna. Today, this unique, entirely stone-built temple stands as a potent manifestation of absolute faith and devotion, inviting seekers to experience the divine presence of the Lord in His own eternal city.",
    videoUrl: "/[ZapCap AI] - Sri Balarama Purnima Maha Mahotsava at I....mp4",
  };

  return (
    <section className="bg-gray-100 text-gray-900 pt-16 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Flex */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Video */}
          <div className="w-full md:w-1/2 relative order-2 md:order-1">
            <div className="absolute inset-0 bg-pink-600/30 rounded-full blur-3xl opacity-50 transform translate-x-6 translate-y-6 z-0 hidden lg:block"></div>

            <div className="relative w-full aspect-video bg-gray-300 rounded-lg shadow-xl overflow-hidden z-10">
              <video
                src={templeData.videoUrl}
                alt="ISKCON Dwarka Balarama Purnima Video"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left space-y-4 md:space-y-6">
            {/* Welcome Line */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-pink-600">
              {templeData.welcome}
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {templeData.title.split(':').map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="block mt-2">{part.trim()}</span>}
                  {index === 0 && part.trim()}
                </React.Fragment>
              ))}
            </h1>

            {/* History */}
            <p className="mt-2 text-base sm:text-lg text-gray-700 leading-relaxed">
              {templeData.history.split('Lord Dwarkadhish and Sri Rukmini Devi').map((part, index) => {
                if (index === 0) return part;
                return (
                  <React.Fragment key={index}>
                    <strong className="text-pink-600">
                      Lord Dwarkadhish and Sri Rukmini Devi
                    </strong>
                    {part}
                  </React.Fragment>
                );
              })}
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition duration-150"
              >
                Donate
              </a>
              <a
                href="/guest-house"
                className="inline-flex items-center justify-center px-6 py-3 border border-pink-500 text-base font-medium rounded-md text-pink-600 bg-transparent hover:bg-pink-600 hover:text-white transition duration-150"
              >
                Guest House
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IskconDwarkaHero;
