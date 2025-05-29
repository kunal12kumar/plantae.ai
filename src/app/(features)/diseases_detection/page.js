"use client"
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { 
  Camera, Upload, X, CheckCircle, AlertTriangle, Download, Share2, RefreshCw, Info, Zap 
} from 'lucide-react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';

export default function DiseaseDetection() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Store actual file for sending to backend
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!imageFile) return;

    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post("https://agroai-ld.onrender.com/predict-disease", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response)
      console.log(response.data)
      toast.success(response.data)

      setResults(response.data); // Assuming response contains the result object
    } catch (error) {
      console.error("Error during disease detection:", error);
      alert("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setUploadedImage(null);
    setImageFile(null);
    setResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-full mx-auto p-6 pt-30 bg-white min-h-screen rounded-3xl shadow-2xl">
      <ToastContainer></ToastContainer>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500  rounded-2xl mb-4">
          <Camera className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Disease Detection</h2>
        <p className="text-gray-600">फसल की बीमारी पहचानें और इलाज पाएं</p>
      </div>

      {!uploadedImage ? (
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-red-400 transition-colors duration-300">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="hidden"
          />
          <div className="space-y-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-10 h-10 text-gray-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Crop Image</h3>
              <p className="text-gray-500 mb-4">अपनी फसल की तस्वीर अपलोड करें</p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl   hover:from-[#59c059] hover:to-[#6eaf62] transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Choose Image
            </button>
            <p className="text-sm text-gray-400">Supports JPG, PNG, WEBP up to 10MB</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative">
            <Image
              src={uploadedImage}
              alt="Uploaded crop"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              width={600}
              height={300}
            />
            <button
              onClick={resetAnalysis}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {!results && !isAnalyzing && (
            <div className="text-center">
              <button
                onClick={analyzeImage}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center space-x-2 mx-auto"
              >
                <Zap className="w-5 h-5" />
                <span>Analyze Disease</span>
              </button>
            </div>
          )}

          {isAnalyzing && (
            <div className="text-center py-8">
              <div className="inline-flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-red-500 animate-spin" />
                <span className="text-lg font-medium text-gray-700">Analyzing your crop...</span>
              </div>
              <p className="text-gray-500 mt-2">This may take a few seconds</p>
            </div>
          )}

          {results && (
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">Analysis Results</h3>
                <div className="flex space-x-2">
                  <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    Disease Identified
                  </h4>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-red-600">{results.class}</p>
                    <p className="text-sm text-gray-600">{results.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Confidence:</span>
                      <span className="font-semibold text-green-600">{results.confidence}%</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Severity:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        results.severity === 'High' ? 'bg-red-100 text-red-600' :
                        results.severity === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {results.severity} 
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Immediate Treatment
                  </h4>
                  <ul className="space-y-2">

                 {results ? <h1 className='text-xl text-[#2cb82c]'>This feature will coming soon</h1> : "This feature will coming soon"}

                    {/* {results.treatment.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-700">{step}</span>
                      </li>
                    ))} */}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Info className="w-5 h-5 text-blue-500 mr-2" />
                  Prevention Tips
                </h4>
                <div className="grid md:grid-cols-3 gap-3">

                    {results ? <h1 className='text-xl text-[#2cb82c]'>This feature will coming soon</h1> : "This feature will coming soon"}
                  {/* {results.prevention.map((tip, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-3 text-sm text-blue-800">
                      {tip}
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
