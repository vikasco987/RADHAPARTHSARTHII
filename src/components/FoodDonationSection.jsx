"use client" ;

import React from 'react';

// Mock image paths (Replace these with your actual public image URLs)
// We are using standard <img> tags now, so these paths must be publicly accessible.
const imagePaths = {
    // NOTE: Please replace these placeholder links with your actual image paths (e.g., "/images/feeding_seva.jpg")
    feedingDevotees: "https://placehold.co/300x300/f59e0b/ffffff?text=Feeding+Seva",
    childrenEating: "https://placehold.co/300x300/4ade80/ffffff?text=Children+Seva",
    boyEating: "https://placehold.co/300x300/3b82f6/ffffff?text=Happy+Child"
};

// Reusable component for the circular image to keep the code clean
const CircularImage = ({ src, alt, sizeClass, innerPadding }) => (
    <div className={`image-card relative z-10 ${sizeClass} my-8 md:my-0`}>
        {/* White border/shadow wrapper */}
        <div className={`w-full h-full ${innerPadding} bg-white rounded-full shadow-2xl shadow-indigo-400/50 transition-transform hover:scale-[1.03] duration-300 overflow-hidden`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-full"
            />
        </div>
    </div>
);


const FoodDonationSection = () => {
    return (
        // Modern Section Container with soft gradient background
        <section className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-200 py-16 md:py-24 text-gray-800 font-sans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Main Title - Modern Indigo color */}
                <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-indigo-800 tracking-tight mb-8">
                    Food Donation
                </h1>

                {/* Descriptive Text */}
                <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-16 px-4 text-gray-700">
                    You generally buy many things in your life, sometimes even you don't need them, but still, 
                    you bought them for your luxury desire. So, your little contribution to society can feed those 
                    who cannot even buy one-time meals. **ISKCON Dwarka feeding Hungry and Needy People**. You can help 
                    us by donating and can join our hands in the devotional service of Lord Krishna.
                </p>

                {/* Images and CTA Layout */}
                <div className="flex flex-col md:flex-row justify-center items-end gap-x-8 lg:gap-x-12 mt-10">
                    
                    {/* Image 1: Feeding Seva (Left) */}
                    <CircularImage
                        src={imagePaths.feedingDevotees}
                        alt="A devotee feeding Prasad to others"
                        sizeClass="w-64 h-64 md:w-72 md:h-72"
                        innerPadding="p-6"
                    />

                    {/* Image 2: Children Eating (Center) with DONATE NOW Button (Largest Image) */}
                    <div className="image-card relative z-20 w-72 h-72 md:w-80 md:h-80 my-8 md:my-0">
                        <div className="w-full h-full p-8 bg-white rounded-full shadow-2xl shadow-indigo-400/50 transition-transform hover:scale-[1.03] duration-300 overflow-hidden">
                            <img
                                src={imagePaths.childrenEating}
                                alt="Group of children happily eating meals"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        {/* CTA Button placed over the image */}
                        <a
                            href="/donate/food"
                            className="absolute inset-0 m-auto w-40 h-40 flex items-center justify-center 
                                rounded-full text-white bg-red-600 hover:bg-red-700 
                                font-extrabold text-lg shadow-xl transform transition-transform 
                                hover:scale-110 duration-300 z-30 cursor-pointer"
                        >
                            DONATE NOW
                        </a>
                    </div>

                    {/* Image 3: Happy Child (Right) */}
                    <CircularImage
                        src={imagePaths.boyEating}
                        alt="A boy happily eating Prasad"
                        sizeClass="w-64 h-64 md:w-72 md:h-72"
                        innerPadding="p-6"
                    />
                </div>

                {/* Custom CSS for the round, shadowed effect */}
                <style jsx>{`
                    /* Styles to match the tilted/organic look from the original image */
                    .image-card {
                        transform: rotate(2deg);
                    }
                    .image-card:nth-child(1) { /* Left Image */
                        transform: rotate(-3deg) translateY(20px);
                    }
                    .image-card:nth-child(3) { /* Right Image */
                        transform: rotate(4deg) translateY(10px);
                    }
                    /* Center Image has a neutral 2deg tilt */
                `}</style>
            </div>
        </section>
    );
};

export default FoodDonationSection;