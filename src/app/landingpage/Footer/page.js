// footer for the website
"use client"
import React from 'react';
import { FaLeaf, FaMicroscope, FaTree, FaBug, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand and Overview */}
        <div>
          <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaLeaf className="text-green-300" /> AgroAI
          </h1>
          <p className="text-sm">
            Empowering agriculture with AI — Diagnose plant diseases, count trees, and detect weeds with precision.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaMicroscope /> Disease Detection</li>
            <li className="flex items-center gap-2"><FaTree /> Tree Counting</li>
            <li className="flex items-center gap-2"><FaBug /> Weed Detection</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/disease-detection" className="hover:text-green-300">Disease Detection</a></li>
            <li><a href="/tree-counting" className="hover:text-green-300">Tree Counting</a></li>
            <li><a href="/weed-detection" className="hover:text-green-300">Weed Detection</a></li>
            <li><a href="/about" className="hover:text-green-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">Email: support@agroai.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-green-300"><FaFacebook /></a>
            <a href="#" className="hover:text-green-300"><FaTwitter /></a>
            <a href="#" className="hover:text-green-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-green-300">
        © {new Date().getFullYear()} AgroAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
