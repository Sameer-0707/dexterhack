"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white py-20 px-4 md:px-8 lg:px-16 font-sans relative overflow-hidden">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EE3131] to-transparent opacity-50"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20">
                    
                    {/* Men's Collection */}
                    <div>
                        <h3 className="text-[#EE3131] font-black text-xs tracking-[0.3em] uppercase mb-8">Men's Wear</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">T-Shirts</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Casual Shirts</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Formal Shirts</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Jeans & Denims</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Trousers</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Jackets & Coats</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Activewear</Link></li>
                        </ul>
                    </div>

                    {/* Women's Collection */}
                    <div>
                        <h3 className="text-[#EE3131] font-black text-xs tracking-[0.3em] uppercase mb-8">Women's Wear</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li><Link href="/women" className="hover:text-white transition-colors">Dresses</Link></li>
                            <li><Link href="/women" className="hover:text-white transition-colors">Tops & Tees</Link></li>
                            <li><Link href="/women" className="hover:text-white transition-colors">Shirts</Link></li>
                            <li><Link href="/women" className="hover:text-white transition-colors">Jeans & Jeggings</Link></li>
                            <li><Link href="/women" className="hover:text-white transition-colors">Skirts</Link></li>
                            <li><Link href="/women" className="hover:text-white transition-colors">Ethnic Wear</Link></li>
                            <li><Link href="/women" className="hover:text-white transition-colors">Outerwear</Link></li>
                        </ul>
                    </div>

                    {/* Accessories */}
                    <div>
                        <h3 className="text-[#EE3131] font-black text-xs tracking-[0.3em] uppercase mb-8">Accessories</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Bags & Wallets</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Belts</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sunglasses</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Watches</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Jewelry</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Caps & Hats</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-[#EE3131] font-black text-xs tracking-[0.3em] uppercase mb-8">Support</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchange</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help & FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[#EE3131] font-black text-xs tracking-[0.3em] uppercase mb-8">Company</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Legal Policies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Experience Sameer Store */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-white font-black text-lg tracking-tighter mb-4 italic uppercase">
                                Sameer <span className="text-[#EE3131]">Store App</span>
                            </h3>
                            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6 leading-relaxed">
                                Get early access to exclusive drops
                            </p>
                            <div className="bg-white p-2 inline-block rounded-xl shadow-2xl transition-transform hover:scale-105 duration-500">
                                <Image 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://sameer-store.vercel.app" 
                                    alt="QR Code" 
                                    width={120} 
                                    height={120}
                                    className="block"
                                />
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-gray-500">Connect</h4>
                            <div className="flex gap-4">
                                {['Instagram', 'Twitter', 'Facebook'].map((platform) => (
                                    <a 
                                        key={platform} 
                                        href="#" 
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EE3131] hover:border-[#EE3131] transition-all duration-300 group"
                                    >
                                        <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span className="text-[#EE3131] font-[1000] text-2xl italic tracking-tighter leading-none select-none">
                            Sameer Store
                        </span>
                        <span className="text-gray-600 text-[10px] font-bold tracking-widest uppercase ml-4">
                            © 2024 ALL RIGHTS RESERVED
                        </span>
                    </div>

                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] font-black tracking-widest text-gray-500 hover:text-white uppercase">Privacy Policy</a>
                        <a href="#" className="text-[10px] font-black tracking-widest text-gray-500 hover:text-white uppercase">Terms of Use</a>
                        <a href="#" className="text-[10px] font-black tracking-widest text-gray-500 hover:text-white uppercase">Sitemap</a>
                    </div>

                    <div className="flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Fake Payment Icons with dots */}
                        <div className="flex gap-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Massive Background Branding */}
            <div className="absolute right-[-5%] bottom-[-5%] opacity-[0.03] pointer-events-none select-none">
                <span className="text-[30vw] font-black italic tracking-tighter leading-none text-white overflow-hidden whitespace-nowrap">
                    SAMEER
                </span>
            </div>
        </footer>
    );
};

export default Footer;

