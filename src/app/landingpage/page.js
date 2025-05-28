// This page contains all the information about how our sites work 

"use client"

import React, { useState, useEffect } from 'react';
import { Camera, TreePine, Trash2, Upload, CheckCircle, Users, Shield, Clock, ChevronDown, Menu, X, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FarmTechLanding() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  
  const router =useRouter()

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Camera className="w-12 h-12 text-green-600" />,
      title: "Disease Detection",
      description: "Upload crop photos to instantly identify diseases and get treatment recommendations",
      benefit: "Save up to 80% of crops from disease damage",
      redirection: '/diseases_detection'
    },
    {
      icon: <TreePine className="w-12 h-12 text-green-600" />,
      title: "Tree Counting",
      description: "Automatically count trees in your garden or orchard from aerial photos",
      benefit: "Accurate inventory for better farm management",
      redirection: '/crown_count'
    },
    {
      icon: <Trash2 className="w-12 h-12 text-green-600" />,
      title: "Weed Detection",
      description: "Identify weeds in your fields and get targeted removal strategies",
      benefit: "Reduce herbicide use by 60% with precise targeting",
      redirection: "/weeds_detection"
    }
  ];

  const steps = [
    { number: "1", title: "Take Photo", description: "Use your mobile phone to capture clear images of your crops, garden, or field" },
    { number: "2", title: "Upload & Analyze", description: "Our AI instantly analyzes your photos using advanced farming technology" },
    { number: "3", title: "Get Results", description: "Receive detailed reports with actionable solutions in simple language" }
  ];

  const testimonials = [
    {
      name: "राम सिंह",
      location: "Punjab",
      text: "This app saved my wheat crop! Detected disease early and gave me exact treatment.",
      rating: 5
    },
    {
      name: "प्रिया देवी",
      location: "Maharashtra",
      text: "Very easy to use. Even I can operate it without any help. Great for counting my mango trees.",
      rating: 5
    },
    {
      name: "Mohammed Ali",
      location: "Karnataka",
      text: "Helped me remove weeds efficiently. My yield increased by 30% this season!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Plantae.AI
              </span>
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
        </div> */}

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
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
        )} */}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Smart Farming
              <br />
              <span className="text-4xl md:text-6xl">Made Simple</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              किसान भाइयों के लिए आसान AI तकनीक। फसल की बीमारी पहचानें, पेड़ गिनें, और खरपतवार हटाएं - सिर्फ एक फोटो से!
            </p>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Start Free Analysis</span>
              </button>
              
              <button className="group px-8 py-4 bg-white/80 backdrop-blur text-gray-700 text-lg font-semibold rounded-xl hover:bg-white transition-all duration-300 border-2 border-gray-200 hover:border-green-400 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group bg-white/80 backdrop-blur rounded-2xl p-8 hover:bg-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-gray-200 hover:border-green-300 ${
                    currentFeature === index ? 'ring-2 ring-green-400 shadow-xl' : ''
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              All-in-One Farm Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              तीन शक्तिशाली सुविधाएं एक ही जगह - आपकी खेती को बनाएं और भी बेहतर
            </p>
          </div>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-20 flex items-center justify-center">
                    <div className="text-white transform scale-150">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-semibold text-green-600">{feature.benefit}</span>
                  </div>
                  <button onClick={()=> router.push(feature.redirection)} className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Try {feature.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              केवल 3 आसान स्टेप्स
            </h2>
            <p className="text-xl text-gray-600">
              Simple process that any farmer can follow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-300 to-blue-300 transform translate-x-10 -z-10"></div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your First Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Plantae.AI?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Easy to Use", desc: "बिना तकनीकी ज्ञान के भी इस्तेमाल करें" },
              { icon: <Shield className="w-8 h-8" />, title: "99% Accurate", desc: "Advanced AI technology for precise results" },
              { icon: <Clock className="w-8 h-8" />, title: "Instant Results", desc: "Get answers within seconds" },
              { icon: <CheckCircle className="w-8 h-8" />, title: "Free to Start", desc: "No cost to begin analyzing your crops" }
            ].map((benefit, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-blue-200 transition-colors duration-300">
                  <div className="text-green-600 group-hover:text-green-700">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              किसान भाइयों के अनुभव
            </h2>
            <p className="text-xl text-gray-600">Real stories from farmers across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-green-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            आज ही शुरू करें अपनी स्मार्ट खेती
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of farmers who are already using AI to improve their harvest
          </p>
          <button className="px-12 py-4 bg-white text-green-600 text-xl font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}