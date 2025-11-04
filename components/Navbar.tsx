"use client";
import Link from "next/link";
import { useState } from "react";
// We only import what we use for the mobile menu and the Cart button
import { Menu, X, ShoppingCart } from "lucide-react"; 
// Assuming this path is correct for your project
import { useCart } from "../src/app/context/CartContext"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Get cart context for item count (if shopping functionality is needed)
  const { cart } = useCart(); 

  // Calculate total items for the badge/count
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    // Main container: Dark background and fixed position at the top
    <nav className="w-full bg-gray-900 fixed top-0 left-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:py-3">
        
        {/* Logo/Brand Name (Left Aligned) */}
        {/* Bold, white text for the brand name */}
        <Link href="/" className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
          Do Health Gyan
        </Link>

        {/* Desktop Navigation Links (Center/Right Aligned) */}
        <ul className="hidden md:flex space-x-7 font-medium text-gray-200">
          {/* Links are light grey with a yellow hover effect */}
          <li><Link href="/" className="hover:text-yellow-500 transition duration-200">Home</Link></li>
          <li><Link href="/shop" className="hover:text-yellow-500 transition duration-200">Shop</Link></li>
          <li><Link href="/about" className="hover:text-yellow-500 transition duration-200">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500 transition duration-200">Contact</Link></li>
        </ul>

        {/* CTA Button and Mobile Toggle (Far Right) */}
        <div className="flex items-center space-x-4">
          
          {/* CTA Button: Bright Yellow/Gold, matching the "DONATE" style */}
          <Link href="/checkout">
            <button 
              className="relative flex items-center px-4 py-2.5 
                         bg-yellow-500 text-gray-900 font-bold uppercase 
                         rounded-md shadow-lg hover:bg-yellow-400 
                         transition duration-200 text-sm md:text-base"
            >
              {/* ShoppingCart icon is used here, similar to the original design's CTA */}
              <ShoppingCart className="w-5 h-5 mr-1.5" /> 
              <span>Cart ({totalItems})</span>
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          {/* Menu icon is light grey/white */}
          <button
            className="md:hidden text-gray-200 hover:text-yellow-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        // Mobile menu uses a slightly lighter dark background (gray-800) for distinction
        <ul className="md:hidden bg-gray-800 text-gray-200 px-6 py-3 space-y-3 shadow-inner">
          <li><Link href="/" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/shop" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link href="/about" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" className="block py-2 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}