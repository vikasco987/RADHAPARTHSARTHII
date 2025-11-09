// "use client";
// import Link from "next/link";
// import { useState } from "react";
// // We only import what we use for the mobile menu and the Cart button
// import { Menu, X, ShoppingCart } from "lucide-react"; 
// // Assuming this path is correct for your project
// import { useCart } from "../src/app/context/CartContext"; 

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   // Get cart context for item count (if shopping functionality is needed)
//   const { cart } = useCart(); 

//   // Calculate total items for the badge/count
//   const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

//   return (
//     // Main container: Dark background and fixed position at the top
//     <nav className="w-full bg-gray-900 fixed top-0 left-0 z-50 shadow-xl">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4 md:py-3">
        
//         {/* Logo/Brand Name (Left Aligned) */}
//         {/* Bold, white text for the brand name */}
//         <Link href="/" className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
//           Do Health Gyan
//         </Link>

//         {/* Desktop Navigation Links (Center/Right Aligned) */}
//         <ul className="hidden md:flex space-x-7 font-medium text-gray-200">
//           {/* Links are light grey with a yellow hover effect */}
//           <li><Link href="/" className="hover:text-yellow-500 transition duration-200">Home</Link></li>
//           <li><Link href="/shop" className="hover:text-yellow-500 transition duration-200">Shop</Link></li>
//           <li><Link href="/about" className="hover:text-yellow-500 transition duration-200">About</Link></li>
//           <li><Link href="/contact" className="hover:text-yellow-500 transition duration-200">Contact</Link></li>
//         </ul>

//         {/* CTA Button and Mobile Toggle (Far Right) */}
//         <div className="flex items-center space-x-4">
          
//           {/* CTA Button: Bright Yellow/Gold, matching the "DONATE" style */}
//           <Link href="/checkout">
//             <button 
//               className="relative flex items-center px-4 py-2.5 
//                          bg-yellow-500 text-gray-900 font-bold uppercase 
//                          rounded-md shadow-lg hover:bg-yellow-400 
//                          transition duration-200 text-sm md:text-base"
//             >
//               {/* ShoppingCart icon is used here, similar to the original design's CTA */}
//               <ShoppingCart className="w-5 h-5 mr-1.5" /> 
//               <span>Cart ({totalItems})</span>
//             </button>
//           </Link>

//           {/* Mobile Menu Toggle Button */}
//           {/* Menu icon is light grey/white */}
//           <button
//             className="md:hidden text-gray-200 hover:text-yellow-500"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         // Mobile menu uses a slightly lighter dark background (gray-800) for distinction
//         <ul className="md:hidden bg-gray-800 text-gray-200 px-6 py-3 space-y-3 shadow-inner">
//           <li><Link href="/" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Home</Link></li>
//           <li><Link href="/shop" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Shop</Link></li>
//           <li><Link href="/about" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>About</Link></li>
//           <li><Link href="/contact" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }

























// "use client";

// import React, { useState } from 'react';
// // Using Lucide icons for the utility buttons
// // Assuming you have 'lucide-react' available or using inline SVG fallback
// import { Menu, X, Leaf, Volume2, Globe, Send, ChevronDown } from 'lucide-react';

// // Mock Logo Path (Replace with your actual path)
// const LOGO_PATH = "/iskcon_dwarka_logo.svg"; 

// // Navigation link data, including dropdown items
// const navLinks = [
//   { name: 'ISKCON', href: '/iskcon', dropdown: ['About Us', 'Our Mission', 'Srila Prabhupada'] },
//   { name: 'Services', href: '/services', dropdown: ['Worship', 'Education', 'Community'] },
//   { name: 'Donate', href: '/donate' },
//   { name: 'Booking', href: '/booking', dropdown: ['Guest House', 'Event Hall'] },
//   { name: 'Temple', href: '/temple', dropdown: ['Darshan Timings', 'Aarti Schedule'] },
// ];

// // Utility icons for the right side
// const utilityIcons = [
//   // Leaf: Seva/Austerity (like the one in the image)
//   { Icon: Leaf, label: 'Seva', href: '/seva' }, 
//   // Send: Share/Broadcast
//   { Icon: Send, label: 'Share', href: '/share' },
//   // Volume2: Audio/Broadcasts
//   { Icon: Volume2, label: 'Audio', href: '/audio' }, 
//   // Globe: Language/Global Presence
//   { Icon: Globe, label: 'Language', href: '/language' }, 
// ];

// // Reusable Dropdown Menu Component
// const DropdownMenu = ({ name, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div 
//       className="relative group"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button className="flex items-center space-x-1 py-4 px-2 font-medium hover:text-pink-400 transition-colors duration-150">
//         <span>{name}</span>
//         <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
//       </button>
      
//       {isOpen && (
//         <div className="absolute left-0 mt-0 w-48 rounded-lg shadow-xl bg-gray-800 text-white z-20">
//           {items.map((item) => (
//             <a 
//               key={item} 
//               href={`/${name.toLowerCase()}/${item.toLowerCase().replace(/\s/g, '-')}`} 
//               className="block px-4 py-2 text-sm hover:bg-pink-600 hover:text-white rounded-md transition-colors"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const IskconDwarkaNavbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white shadow-lg relative z-50 font-sans">
//       <div className="max-w-full mx-auto flex items-center justify-between">
        
//         {/* Left Side: Logo Area - Vibrant Pink Panel */}
//         <div className="bg-pink-600 h-20 w-auto flex-shrink-0 relative group">
//           <a href="/" className="h-full px-6 flex items-center space-x-3 transition-all duration-300">
//             {/* Logo Placeholder */}
//             <div className="w-10 h-10 relative">
//                 <Leaf size={40} className="text-white transform transition-transform group-hover:scale-110" />
//             </div>
            
//             {/* Text Content */}
//             <div className="flex flex-col text-left">
//               <span className="text-xl font-extrabold tracking-tight">ISKCON Dwarka</span>
//               <span className="text-xs opacity-80 mt-[-2px]">International Society for Krishna Consciousness</span>
//             </div>
//           </a>
//         </div>

//         {/* Right Side: Main Navigation & Icons (Desktop) */}
//         <div className="hidden lg:flex flex-grow items-center justify-end px-6 space-x-4">
          
//           {/* Main Links (Desktop) */}
//           <div className="flex space-x-2 xl:space-x-4">
//             {navLinks.map((link) => (
//               link.dropdown 
//                 ? <DropdownMenu key={link.name} name={link.name} items={link.dropdown} />
//                 : <a 
//                     key={link.name} 
//                     href={link.href} 
//                     className="py-4 px-3 font-medium hover:text-pink-400 transition-colors duration-150"
//                   >
//                     {link.name}
//                   </a>
//             ))}
//           </div>

//           {/* Utility Icon Buttons (Desktop) */}
//           <div className="flex space-x-2 ml-6">
//             {utilityIcons.map(({ Icon, href, label }) => (
//               <a 
//                 key={label} 
//                 href={href} 
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 hover:text-pink-500 transition-colors duration-150 shadow-md"
//                 aria-label={label}
//               >
//                 <Icon size={20} />
//               </a>
//             ))}
//           </div>

//           {/* Sign In Button (Desktop) */}
//           <a 
//             href="/signin"
//             className="h-14 ml-8 px-6 py-2 bg-pink-600 text-white font-bold rounded-lg shadow-xl hover:bg-pink-700 transition duration-300 flex items-center"
//           >
//             Sign in
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-4 text-white"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle navigation menu"
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Content (Transitioning) */}
//       <div 
//         className={`lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//         } overflow-hidden bg-gray-800`}
//       >
//         <div className="pt-2 pb-3 space-y-1">
//           {/* Mobile Main Links */}
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block px-4 py-2 text-base font-medium text-white hover:bg-pink-600 hover:text-white transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
          
//           {/* Mobile Utility Icons */}
//           <div className="flex justify-around p-4 border-t border-gray-700">
//             {utilityIcons.map(({ Icon, href, label }) => (
//               <a 
//                 key={label} 
//                 href={href} 
//                 className="w-10 h-10 flex items-center justify-center text-white hover:text-pink-500 transition-colors"
//                 aria-label={label}
//               >
//                 <Icon size={24} />
//               </a>
//             ))}
//           </div>
          
//           {/* Mobile Sign In */}
//           <a 
//             href="/signin"
//             className="block mx-4 my-2 px-4 py-3 text-center bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition"
//           >
//             Sign in
//           </a>
//         </div>
//       </div>
      
//       {/* Required CSS for the custom animations used in TishSection.jsx */}
//       <style jsx global>{`
//         @keyframes tish-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(calc(-100% / 2));
//           }
//         }
//         @keyframes tish-scroll-reverse {
//           from {
//             transform: translateX(calc(-100% / 2));
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//         .tish-scroller {
//           mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
//         }
//         .tish-track {
//           animation: tish-scroll var(--tish-scroll-duration) linear infinite;
//         }
//         .tish-track:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default IskconDwarkaNavbar;








"use client";

import React, { useState } from "react";
import { Menu, X, Leaf, Volume2, Globe, Send, ChevronDown } from "lucide-react";

// Logo Path (replace with your actual logo)
const LOGO_PATH = "/iskcon_dwarka_logo.svg";

// Navigation Links
const navLinks = [
  { name: "ISKCON", href: "/iskcon", dropdown: ["About Us", "Our Mission", "Srila Prabhupada"] },
  { name: "Services", href: "/services", dropdown: ["Worship", "Education", "Community"] },
  { name: "Donate", href: "/donate" },
  { name: "Booking", href: "/booking", dropdown: ["Guest House", "Event Hall"] },
  { name: "Temple", href: "/temple", dropdown: ["Darshan Timings", "Aarti Schedule"] },
];

// Utility Icons
const utilityIcons = [
  { Icon: Leaf, label: "Seva", href: "/seva" },
  { Icon: Send, label: "Share", href: "/share" },
  { Icon: Volume2, label: "Audio", href: "/audio" },
  { Icon: Globe, label: "Language", href: "/language" },
];

// ✅ Quick TypeScript Fix — add : { name: any; items: any }
const DropdownMenu = ({ name, items }: { name: any; items: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 py-4 px-2 font-medium hover:text-pink-400 transition-colors duration-150">
        <span>{name}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-0 w-48 rounded-lg shadow-xl bg-gray-800 text-white z-20">
          {items.map((item: any) => (
            <a
              key={item}
              href={`/${name.toLowerCase()}/${item.toLowerCase().replace(/\s/g, "-")}`}
              className="block px-4 py-2 text-sm hover:bg-pink-600 hover:text-white rounded-md transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const IskconDwarkaNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg relative z-50 font-sans">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Left Side: Logo Area */}
        <div className="bg-pink-600 h-20 w-auto flex-shrink-0 relative group">
          <a
            href="/"
            className="h-full px-6 flex items-center space-x-3 transition-all duration-300"
          >
            <div className="w-10 h-10 relative">
              <Leaf
                size={40}
                className="text-white transform transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-extrabold tracking-tight">
                ISKCON Dwarka
              </span>
              <span className="text-xs opacity-80 mt-[-2px]">
                International Society for Krishna Consciousness
              </span>
            </div>
          </a>
        </div>

        {/* Right Side: Navigation & Icons (Desktop) */}
        <div className="hidden lg:flex flex-grow items-center justify-end px-6 space-x-4">
          {/* Main Links */}
          <div className="flex space-x-2 xl:space-x-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name} name={link.name} items={link.dropdown} />
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-4 px-3 font-medium hover:text-pink-400 transition-colors duration-150"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Utility Icons */}
          <div className="flex space-x-2 ml-6">
            {utilityIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 hover:text-pink-500 transition-colors duration-150 shadow-md"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Sign In Button */}
          <a
            href="/signin"
            className="h-14 ml-8 px-6 py-2 bg-pink-600 text-white font-bold rounded-lg shadow-xl hover:bg-pink-700 transition duration-300 flex items-center"
          >
            Sign in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-4 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-gray-800`}
      >
        <div className="pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 text-base font-medium text-white hover:bg-pink-600 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="flex justify-around p-4 border-t border-gray-700">
            {utilityIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-pink-500 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <a
            href="/signin"
            className="block mx-4 my-2 px-4 py-3 text-center bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* Global + Tish CSS Fix */}
      <style jsx global>{`
        html,
        body,
        #__next,
        #root {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        * {
          box-sizing: inherit;
        }

        /* Tish Section Animation Fix */
        @keyframes tish-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 2));
          }
        }

        @keyframes tish-scroll-reverse {
          from {
            transform: translateX(calc(-100% / 2));
          }
          to {
            transform: translateX(0);
          }
        }

        .tish-scroller {
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }

        .tish-track {
          animation: tish-scroll var(--tish-scroll-duration, 20s) linear infinite;
        }

        .tish-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </nav>
  );
};

export default IskconDwarkaNavbar;
