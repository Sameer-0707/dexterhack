"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
    {
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1920&auto=format&fit=crop",
        title: "NEW ARRIVALS",
        subtitle: "FRESH STYLES FOR THE SEASON",
        btnText: "SHOP THE CORE"
    },
    {
        url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1920&auto=format&fit=crop",
        title: "SUMMER SALE",
        subtitle: "UP TO 50% OFF ON ALL ITEMS",
        btnText: "VIEW OFFERS"
    },
    {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920&auto=format&fit=crop",
        title: "EXCLUSIVE DEALS",
        subtitle: "LIMITED TIME ONLINE OFFERS",
        btnText: "GRAB DEALS"
    },
    {
        url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop",
        title: "POLO COLLECTION",
        subtitle: "TIMELESS ELEGANCE IN EVERY STITCH",
        btnText: "BROWSE POLOS"
    },
    {
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1920&auto=format&fit=crop",
        title: "OVERSIZED TEES",
        subtitle: "THE ULTIMATE STREET STYLE",
        btnText: "SEE STYLES"
    },
    {
        url: "https://images.unsplash.com/photo-151588665761a-93a4f588aa1d?q=80&w=1920&auto=format&fit=crop",
        title: "STYLISH JOGGERS",
        subtitle: "PREMIUM COMFORT FOR ACTIVE LIFE",
        btnText: "SHOP JOGGERS"
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
        <section className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden group">
            <div
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full h-full relative">
                        {/* Image */}
                        <Image 
                            src={slide.url} 
                            alt={slide.title} 
                            fill 
                            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                            priority={index === 0} 
                            unoptimized 
                        />
                        
                        {/* Stylish Text Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-center justify-center text-center px-4 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}>
                            <div className={`transform transition-all duration-1000 ${currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                                <h4 className="text-white text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase">
                                    {slide.subtitle}
                                </h4>
                                <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8 drop-shadow-2xl italic uppercase">
                                    {slide.title.split(' ')[0]} <span className="text-[#EE3131]">{slide.title.split(' ')[1] || ''}</span>
                                </h2>
                                <div className="flex justify-center gap-4">
                                    <button className="bg-[#EE3131] text-white px-8 md:px-12 py-3 md:py-4 text-xs md:text-sm font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all transform active:scale-95 shadow-xl">
                                        {slide.btnText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/90 text-white hover:text-black backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/90 text-white hover:text-black backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full h-1 ${currentSlide === index ? "w-12 bg-[#EE3131]" : "w-3 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
