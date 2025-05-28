// Header content
"use client"
import React, { useState, useEffect } from 'react';
import { Camera, TreePine, Trash2, Upload, CheckCircle, Users, Shield, Clock, ChevronDown, Menu, X, Play } from 'lucide-react';
import Link from 'next/link';


export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div>

            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                           <Link href={'/'}> <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                Plantae.AI
                            </span> </Link>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Features</a>
                            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors font-medium">How It Works</a>
                            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Reviews</a>
                        </div>

                        <div className="hidden md:flex space-x-4">
                            <button className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-2 space-y-2">
                            <a href="#features" className="block py-2 text-gray-700 hover:text-green-600">Features</a>
                            <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-green-600">How It Works</a>
                            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-green-600">Reviews</a>
                            <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

        </div>
    )
}