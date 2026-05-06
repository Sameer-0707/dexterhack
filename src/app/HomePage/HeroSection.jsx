"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
    {
        url: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Shirts-Home-page.jpg?w=1366&dpr=1",


    },
    {
        url: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/summer_collection_-_homepage.jpg?w=1366&dpr=1",

    },
    {
        url: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_WueqXtw.jpg?w=1366&dpr=1",

    },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden group">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full h-full relative">
                        <Image />
                        src={slide.url}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                        <image />
                        {/* Overlay */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/5 transition-opacity duration-700 ${currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                            <div className="text-center">
                                <h1 className="text-5xl md:text-8xl font-black text-[#FACC15] tracking-tight drop-shadow-2xl">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-2xl font-bold text-white tracking-[0.2em] mt-2 drop-shadow-lg">
                                    {slide.subtitle}
                                </p>
                                <div className="mt-8 md:mt-16">
                                    <a
                                        href="#"
                                        className="text-white text-sm md:text-base font-bold tracking-widest border-b-2 border-white pb-1 hover:text-[#FACC15] hover:border-[#FACC15] transition-colors"
                                    >
                                        {slide.cta}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full h-1 ${currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
