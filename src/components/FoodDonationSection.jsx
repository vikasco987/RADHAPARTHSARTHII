// "use client" ;

// import React from 'react';

// // Mock image paths (Replace these with your actual public image URLs)
// // We are using standard <img> tags now, so these paths must be publicly accessible.
// const imagePaths = {
//     // NOTE: Please replace these placeholder links with your actual image paths (e.g., "/images/feeding_seva.jpg")
//     feedingDevotees: "https://placehold.co/300x300/f59e0b/ffffff?text=Feeding+Seva",
//     childrenEating: "https://placehold.co/300x300/4ade80/ffffff?text=Children+Seva",
//     boyEating: "https://placehold.co/300x300/3b82f6/ffffff?text=Happy+Child"
// };

// // Reusable component for the circular image to keep the code clean
// const CircularImage = ({ src, alt, sizeClass, innerPadding }) => (
//     <div className={`image-card relative z-10 ${sizeClass} my-8 md:my-0`}>
//         {/* White border/shadow wrapper */}
//         <div className={`w-full h-full ${innerPadding} bg-white rounded-full shadow-2xl shadow-indigo-400/50 transition-transform hover:scale-[1.03] duration-300 overflow-hidden`}>
//             <img
//                 src={src}
//                 alt={alt}
//                 className="w-full h-full object-cover rounded-full"
//             />
//         </div>
//     </div>
// );


// const FoodDonationSection = () => {
//     return (
//         // Modern Section Container with soft gradient background
//         <section className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-200 py-16 md:py-24 text-gray-800 font-sans">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
//                 {/* Main Title - Modern Indigo color */}
//                 <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-indigo-800 tracking-tight mb-8">
//                     Food Donation
//                 </h1>

//                 {/* Descriptive Text */}
//                 <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-16 px-4 text-gray-700">
//                     You generally buy many things in your life, sometimes even you don't need them, but still, 
//                     you bought them for your luxury desire. So, your little contribution to society can feed those 
//                     who cannot even buy one-time meals. **ISKCON Dwarka feeding Hungry and Needy People**. You can help 
//                     us by donating and can join our hands in the devotional service of Lord Krishna.
//                 </p>

//                 {/* Images and CTA Layout */}
//                 <div className="flex flex-col md:flex-row justify-center items-end gap-x-8 lg:gap-x-12 mt-10">
                    
//                     {/* Image 1: Feeding Seva (Left) */}
//                     <CircularImage
//                         src={imagePaths.feedingDevotees}
//                         alt="A devotee feeding Prasad to others"
//                         sizeClass="w-64 h-64 md:w-72 md:h-72"
//                         innerPadding="p-6"
//                     />

//                     {/* Image 2: Children Eating (Center) with DONATE NOW Button (Largest Image) */}
//                     <div className="image-card relative z-20 w-72 h-72 md:w-80 md:h-80 my-8 md:my-0">
//                         <div className="w-full h-full p-8 bg-white rounded-full shadow-2xl shadow-indigo-400/50 transition-transform hover:scale-[1.03] duration-300 overflow-hidden">
//                             <img
//                                 src={imagePaths.childrenEating}
//                                 alt="Group of children happily eating meals"
//                                 className="w-full h-full object-cover rounded-full"
//                             />
//                         </div>
//                         {/* CTA Button placed over the image */}
//                         <a
//                             href="/donate/food"
//                             className="absolute inset-0 m-auto w-40 h-40 flex items-center justify-center 
//                                 rounded-full text-white bg-red-600 hover:bg-red-700 
//                                 font-extrabold text-lg shadow-xl transform transition-transform 
//                                 hover:scale-110 duration-300 z-30 cursor-pointer"
//                         >
//                             DONATE NOW
//                         </a>
//                     </div>

//                     {/* Image 3: Happy Child (Right) */}
//                     <CircularImage
//                         src={imagePaths.boyEating}
//                         alt="A boy happily eating Prasad"
//                         sizeClass="w-64 h-64 md:w-72 md:h-72"
//                         innerPadding="p-6"
//                     />
//                 </div>

//                 {/* Custom CSS for the round, shadowed effect */}
//                 <style jsx>{`
//                     /* Styles to match the tilted/organic look from the original image */
//                     .image-card {
//                         transform: rotate(2deg);
//                     }
//                     .image-card:nth-child(1) { /* Left Image */
//                         transform: rotate(-3deg) translateY(20px);
//                     }
//                     .image-card:nth-child(3) { /* Right Image */
//                         transform: rotate(4deg) translateY(10px);
//                     }
//                     /* Center Image has a neutral 2deg tilt */
//                 `}</style>
//             </div>
//         </section>
//     );
// };

// export default FoodDonationSection;











// "use client";

// import React from 'react';
// // Using Lucide icons for aesthetics and clarity
// import { Clock, Calendar, MapPin, Sun, Moon, Info } from 'lucide-react';

// const timingData = {
//     darshan: [
//         { time: "04:30 AM - 05:00 AM", description: "Mangala Aarti" },
//         { time: "07:15 AM - 11:30 AM", description: "Morning Darshan & Lectures" },
//         { time: "12:00 PM - 04:00 PM", description: "Temple Closed (Raja Bhoga)" },
//         { time: "04:30 PM - 08:30 PM", description: "Evening Darshan & Sandhya Aarti" },
//         { time: "09:00 PM", description: "Shayan Aarti (Temple Closes)" },
//     ],
//     aarti: [
//         { name: "Mangala Aarti", time: "04:30 AM" },
//         { name: "Sringara Darshan", time: "07:15 AM" },
//         { name: "Guru Puja", time: "07:30 AM" },
//         { name: "Sandhya Aarti", time: "06:30 PM" },
//         { name: "Shayan Aarti", time: "09:00 PM" },
//     ],
//     guidelines: [
//         "Please maintain silence and respect the sacred atmosphere.",
//         "Photography is generally restricted inside the main temple hall.",
//         "Kindly adhere to the simple, modest dress code.",
//     ],
//     address: "ISKCON Dwarka, Sector-1, Dwarka, New Delhi, 110075"
// };

// // Reusable component for displaying a single timing entry
// const TimingCard = ({ time, description, Icon }) => (
//     <div className="flex items-start space-x-4 p-4 border-l-4 border-pink-500 bg-white shadow-md rounded-lg">
//         <Icon size={24} className="text-pink-600 mt-1 flex-shrink-0" />
//         <div>
//             <p className="text-lg font-semibold text-gray-800">{description}</p>
//             <p className="text-sm text-gray-600 font-mono">{time}</p>
//         </div>
//     </div>
// );


// const TempleTimings = () => {
//     return (
//         <section className="bg-gray-50 py-16 md:py-24 font-sans">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-sm uppercase tracking-widest text-pink-600 font-semibold mb-2">
//                         Plan Your Darshan
//                     </h2>
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
//                         Temple Timings & Visitor Information
//                     </h1>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
//                     {/* Column 1: Daily Darshan Timings */}
//                     <div className="lg:col-span-2 space-y-8">
//                         <h3 className="text-3xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-3 mb-6 flex items-center">
//                             <Sun size={28} className="mr-3 text-yellow-600" /> 
//                             Daily Darshan Schedule
//                         </h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {timingData.darshan.map((item, index) => (
//                                 <TimingCard 
//                                     key={index} 
//                                     time={item.time} 
//                                     description={item.description} 
//                                     Icon={Clock}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Column 2: Aarti Schedule and Guidelines */}
//                     <div className="space-y-10">
                        
//                         {/* Aarti Timings */}
//                         <div className="bg-white p-6 rounded-xl shadow-xl">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
//                                 <Moon size={20} className="mr-2 text-indigo-500" />
//                                 Major Aarti Timings
//                             </h3>
//                             <ul className="space-y-3">
//                                 {timingData.aarti.map((item, index) => (
//                                     <li key={index} className="flex justify-between text-gray-700 text-base">
//                                         <span className="font-medium">{item.name}</span>
//                                         <span className="font-mono text-pink-600 font-semibold">{item.time}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Guidelines */}
//                         <div className="bg-white p-6 rounded-xl shadow-xl">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
//                                 <Info size={20} className="mr-2 text-red-500" />
//                                 Visitor Guidelines
//                             </h3>
//                             <ul className="space-y-3 text-sm text-gray-600">
//                                 {timingData.guidelines.map((item, index) => (
//                                     <li key={index} className="flex items-start">
//                                         <span className="mr-2 text-red-400 font-bold">•</span>{item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
                        
//                         {/* Address and Map Link */}
//                         <a 
//                             href="https://maps.app.goo.gl/YourDwarkaTempleMapLink" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="block bg-pink-600 text-white p-4 rounded-xl shadow-lg hover:bg-pink-700 transition duration-300 text-center font-bold flex items-center justify-center space-x-3"
//                         >
//                             <MapPin size={20} />
//                             <span>{timingData.address}</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TempleTimings;














// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { Clock, Calendar, MapPin, Sun, Moon, Info } from 'lucide-react';

// const timingData = {
//     darshan: [
//         { time: "04:30 AM - 05:00 AM", description: "Mangala Aarti" },
//         { time: "07:15 AM - 11:30 AM", description: "Morning Darshan & Lectures" },
//         { time: "12:00 PM - 04:00 PM", description: "Temple Closed (Raja Bhoga)" },
//         { time: "04:30 PM - 08:30 PM", description: "Evening Darshan & Sandhya Aarti" },
//         { time: "09:00 PM - 09:15 PM", description: "Shayan Aarti (Temple Closes)" },
//     ],
//     aarti: [
//         { name: "Mangala Aarti", time: "04:30 AM" },
//         { name: "Sringara Darshan", time: "07:15 AM" },
//         { name: "Guru Puja", time: "07:30 AM" },
//         { name: "Sandhya Aarti", time: "06:30 PM" },
//         { name: "Shayan Aarti", time: "09:00 PM" },
//     ],
//     guidelines: [
//         "Please maintain silence and respect the sacred atmosphere.",
//         "Photography is generally restricted inside the main temple hall.",
//         "Kindly adhere to the simple, modest dress code.",
//     ],
//     address: "ISKCON Dwarka, Sector-1, Dwarka, New Delhi, 110075"
// };

// // Helper function to convert time string (e.g., "04:30 AM") to minutes past midnight
// const timeToMinutes = (timeStr) => {
//     // Safely handle single time points (like 09:00 PM) by assuming a duration of 1 minute
//     const cleanTime = timeStr.includes('-') ? timeStr.split('-')[0].trim() : timeStr.trim();
    
//     let [hour, minute] = cleanTime.slice(0, -3).split(':').map(Number);
//     const ampm = cleanTime.slice(-2);

//     if (ampm === 'PM' && hour !== 12) {
//         hour += 12;
//     } else if (ampm === 'AM' && hour === 12) {
//         hour = 0; // Midnight
//     }
//     return (hour * 60) + minute;
// };

// // Reusable component for displaying a single timing entry
// const TimingCard = ({ time, description, Icon, isActive }) => (
//     <div className={`
//         flex items-start space-x-4 p-4 transition-all duration-500 rounded-xl
//         ${isActive 
//             ? 'bg-pink-50 border-pink-600 shadow-lg ring-4 ring-pink-200 border-r-8' 
//             : 'bg-white border-l-4 border-gray-200 shadow-md'
//         }
//     `}>
//         <Icon size={24} className={`mt-1 flex-shrink-0 ${isActive ? 'text-pink-700' : 'text-pink-600'}`} />
//         <div>
//             <p className="text-lg font-semibold text-gray-800">{description}</p>
//             <p className="text-sm text-gray-600 font-mono">{time}</p>
//         </div>
//     </div>
// );


// const TempleTimings = () => {
//     const [currentTime, setCurrentTime] = useState(new Date());

//     // Logic to update time and find the active period
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 60000); // Update every minute

//         // Initial check and cleanup
//         setCurrentTime(new Date());
//         return () => clearInterval(timer);
//     }, []);

//     // Function to check if a darshan period is currently active
//     const isDarshanActive = useCallback((timeRange) => {
//         const nowMinutes = (currentTime.getHours() * 60) + currentTime.getMinutes();
        
//         // Handle both ranges (e.g., "07:15 AM - 11:30 AM") and single points (e.g., "09:00 PM")
//         const times = timeRange.split('-').map(t => timeToMinutes(t.trim()));
        
//         const startMinutes = times[0];
//         // If it's a range, use the end time; otherwise, assume a 15 minute window for single aarti events.
//         const endMinutes = times.length > 1 ? times[1] : startMinutes + 15; 

//         // Handle cases where the time passes midnight (e.g., 11 PM to 1 AM)
//         if (startMinutes > endMinutes) {
//             return (nowMinutes >= startMinutes || nowMinutes < endMinutes);
//         }
        
//         return nowMinutes >= startMinutes && nowMinutes < endMinutes;
//     }, [currentTime]);

//     // Current time display for the user
//     const formattedTime = currentTime.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: true,
//     });


//     return (
//         <section className="bg-gray-50 py-16 md:py-24 font-sans animate-fade-in">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-sm uppercase tracking-widest text-pink-600 font-semibold mb-2">
//                         Plan Your Darshan
//                     </h2>
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
//                         Temple Timings & Visitor Information
//                     </h1>
//                     <p className="text-xl mt-4 font-bold text-indigo-700 flex items-center justify-center space-x-2">
//                         <Clock size={20} />
//                         <span>Current Time in Dwarka: <span className="text-red-600">{formattedTime}</span></span>
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
//                     {/* Column 1: Daily Darshan Timings */}
//                     <div className="lg:col-span-2 space-y-8">
//                         <h3 className="text-3xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-3 mb-6 flex items-center">
//                             <Sun size={28} className="mr-3 text-yellow-600" /> 
//                             Daily Darshan Schedule
//                         </h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {timingData.darshan.map((item, index) => (
//                                 <TimingCard 
//                                     key={index} 
//                                     time={item.time} 
//                                     description={item.description} 
//                                     Icon={Clock}
//                                     isActive={isDarshanActive(item.time)}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Column 2: Aarti Schedule and Guidelines */}
//                     <div className="space-y-10">
                        
//                         {/* Aarti Timings */}
//                         <div className="bg-white p-6 rounded-xl shadow-xl">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
//                                 <Moon size={20} className="mr-2 text-indigo-500" />
//                                 Major Aarti Timings
//                             </h3>
//                             <ul className="space-y-3">
//                                 {timingData.aarti.map((item, index) => (
//                                     <li key={index} className="flex justify-between text-gray-700 text-base">
//                                         <span className="font-medium">{item.name}</span>
//                                         <span className="font-mono text-pink-600 font-semibold">{item.time}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Guidelines */}
//                         <div className="bg-white p-6 rounded-xl shadow-xl">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b pb-2">
//                                 <Info size={20} className="mr-2 text-red-500" />
//                                 Visitor Guidelines
//                             </h3>
//                             <ul className="space-y-3 text-sm text-gray-600">
//                                 {timingData.guidelines.map((item, index) => (
//                                     <li key={index} className="flex items-start">
//                                         <span className="mr-2 text-red-400 font-bold">•</span>{item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
                        
//                         {/* Address and Map Link */}
//                         <a 
//                             href="https://maps.app.goo.gl/YourDwarkaTempleMapLink" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="block bg-pink-600 text-white p-4 rounded-xl shadow-lg hover:bg-pink-700 transition duration-300 text-center font-bold flex items-center justify-center space-x-3"
//                         >
//                             <MapPin size={20} />
//                             <span>{timingData.address}</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Global CSS for subtle animation */}
//             <style jsx global>{`
//                 @keyframes fadeInSlideUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//                 .animate-fade-in {
//                     animation: fadeInSlideUp 0.8s ease-out forwards;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default TempleTimings;