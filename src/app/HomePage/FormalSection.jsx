"use client";

import React from "react";
import Image from "next/image";

const formalProducts = [
    {
        id: 1,
        name: "Classic White Formal Shirt",
        price: "₹1,499",
        image: "https://styleunion.in/cdn/shop/files/SMLW00001EIFFELTOWER_1.jpg?v=1756050410&width=3200",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Premium Navy Blue Blazer",
        price: "₹4,999",
        image: "https://i.pinimg.com/originals/f1/69/77/f169773e34e2d590cd87173be605ef18.jpg",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Charcoal Formal Trousers",
        price: "₹1,999",
        image: "https://images.unsplash.com/photo-1594932224010-74f43c39370a?q=80&w=1200&auto=format&fit=crop",
        tag: "Premium"
    },
    {
        id: 4,
        name: "Signature Formal Suit",
        price: "₹9,999",
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1200&auto=format&fit=crop",
        tag: "Exclusive"
    },
];

const FormalSection = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 uppercase">
                        Formal <span className="text-[#EE3131]">Wear</span>
                    </h2>
                    <p className="text-gray-500 mt-2 font-medium tracking-wide">
                        STEP INTO SOPHISTICATION WITH OUR PREMIUM COLLECTION
                    </p>
                </div>
                <a href="#" className="text-sm font-bold tracking-widest text-[#EE3131] hover:text-red-700 transition-colors border-b-2 border-[#EE3131] pb-1 uppercase">
                    View Entire Collection
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {formalProducts.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            
                            {/* Tag */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                    {product.tag}
                                </span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl hover:bg-[#EE3131] hover:text-white transition-all transform active:scale-95 text-sm tracking-widest uppercase">
                                    Quick Add
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 space-y-1">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#EE3131] transition-colors line-clamp-1">
                                {product.name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-black text-gray-900">{product.price}</span>
                                <span className="text-sm text-gray-400 line-through">₹{parseInt(product.price.replace(/[^\d]/g, '')) + 1000}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FormalSection;
