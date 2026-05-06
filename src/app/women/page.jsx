"use client";

import React from "react";
import Image from "next/image";

const womenProducts = [
    {
        id: 1,
        name: "Flowered Summer Midi Dress",
        price: "₹2,499",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
        tag: "Trending"
    },
    {
        id: 2,
        name: "Classic Silk Wrap Dress",
        price: "₹4,999",
        image: "https://images.unsplash.com/photo-1539008886823-4a1dd2f74c76?q=80&w=800&auto=format&fit=crop",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Emerald Evening Gown",
        price: "₹7,999",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop",
        tag: "Premium"
    },
    {
        id: 4,
        name: "Boho Chic Maxi Dress",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
        tag: "Best Seller"
    },
    {
        id: 5,
        name: "Satin Slip Dress",
        price: "₹1,999",
        image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800&auto=format&fit=crop",
        tag: "Limited"
    },
    {
        id: 6,
        name: "Floral A-Line Dress",
        price: "₹2,799",
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
        tag: "Popular"
    },
    {
        id: 7,
        name: "minimalist Linen Dress",
        price: "₹3,299",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
        tag: "Summer Essential"
    },
    {
        id: 8,
        name: "Velvet Party Dress",
        price: "₹5,499",
        image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4bcd?q=80&w=800&auto=format&fit=crop",
        tag: "Classic"
    }
];

const WomenPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative w-full h-[300px] md:h-[450px] bg-gray-100 overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&auto=format&fit=crop"
                    alt="Women's Collection"
                    fill
                    className="object-cover opacity-90 shadow-inner"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent flex items-center px-8 md:px-16">
                    <div className="max-w-xl">
                        <h4 className="text-[#EE3131] font-black tracking-[0.4em] uppercase text-xs md:text-sm mb-4">
                            New Arrivals
                        </h4>
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                            Women <span className="text-[#EE3131]">Collection</span>
                        </h1>
                        <p className="text-white/80 mt-6 text-sm md:text-base font-medium max-w-md">
                            Discover the latest trends in women's fashion. From elegant evening gowns to casual summer dresses.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filter Bar Placeholder */}
            <div className="sticky top-16 z-40 bg-white border-b border-gray-100 px-4 md:px-16 py-4 flex items-center justify-between">
                <div className="flex gap-4">
                    <button className="text-xs font-black tracking-widest uppercase border border-gray-200 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all">Filter</button>
                    <button className="text-xs font-black tracking-widest uppercase border border-gray-200 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all">Sort By</button>
                </div>
                <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">{womenProducts.length} Products Found</p>
            </div>

            {/* Product Grid */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {womenProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 rounded-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    unoptimized
                                />
                                
                                {/* Tag */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                        {product.tag}
                                    </span>
                                </div>

                                {/* Quick Shop Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    <button className="w-full bg-[#EE3131] text-white font-bold py-3 rounded-xl hover:bg-white hover:text-black transition-all transform active:scale-95 text-xs tracking-widest uppercase">
                                        Add to Cart
                                    </button>
                                </div>
                                
                                {/* Wishlist Button */}
                                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-[#EE3131]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                                </button>
                            </div>

                            <div className="mt-6 space-y-2">
                                <p className="text-[10px] font-black text-[#EE3131] tracking-widest uppercase">Sameer Premium</p>
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#EE3131] transition-colors leading-tight">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-black text-gray-900">{product.price}</span>
                                    <span className="text-xs text-gray-400 line-through">₹{parseInt(product.price.replace(/[^\d]/g, '')) + 1000}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WomenPage;
