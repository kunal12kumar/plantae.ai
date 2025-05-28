// TreeCounting.jsx
"use client";
import React, { useState, useRef } from "react";
import {
  Camera,
  Upload,
  X,
  CheckCircle,
  AlertTriangle,
  TreePine,
  Trash2,
  BarChart3,
  Target,
  Clock,
  Download,
  Share2,
  RefreshCw,
  Info,
  Zap,
} from "lucide-react";
import Image from "next/image";

// Tree Counting Component
const TreeCounting = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResults({
        totalTrees: 47,
        healthyTrees: 42,
        stressedTrees: 5,
        treeTypes: [
          { type: "Mango", count: 25, health: "Good" },
          { type: "Coconut", count: 15, health: "Excellent" },
          { type: "Neem", count: 7, health: "Fair" },
        ],
        areaAnalysis: {
          totalArea: "2.3 acres",
          treeDensity: "20 trees/acre",
          coverage: "85%",
        },
        recommendations: [
          "Consider planting 8–10 more trees for optimal density",
          "Check stressed trees for disease or water issues",
          "Maintain 15–20 feet spacing between mature trees",
        ],
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const resetAnalysis = () => {
    setUploadedImage(null);
    setResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-full min-h-screen mx-auto py-10 p-6 bg-white rounded-3xl shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4">
          <TreePine className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Tree Counting</h2>
        <p className="text-gray-600">अपने बगीचे के पेड़ों की गिनती करें</p>
      </div>

      {!uploadedImage ? (
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-green-400 transition-colors duration-300">
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
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Garden/Orchard Image</h3>
              <p className="text-gray-500 mb-4">बगीचे या खेत की हवाई तस्वीर अपलोड करें</p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Choose Image
            </button>
            <p className="text-sm text-gray-400">Best results with aerial or overhead photos</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative">
            <Image
              src={uploadedImage}
              alt="Uploaded garden"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              width={1000}
              height={400}
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
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center space-x-2 mx-auto"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Count Trees</span>
              </button>
            </div>
          )}

          {isAnalyzing && (
            <div className="text-center py-8">
              <div className="inline-flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-green-500 animate-spin" />
                <span className="text-lg font-medium text-gray-700">Counting trees...</span>
              </div>
              <p className="text-gray-500 mt-2">Analyzing your garden layout</p>
            </div>
          )}

          {results && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">Counting Results</h3>
                <div className="flex space-x-2">
                  <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-800">{results.totalTrees}</div>
                  <div className="text-sm text-gray-600">Total Trees</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-green-600">{results.healthyTrees}</div>
                  <div className="text-sm text-gray-600">Healthy Trees</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-yellow-600">{results.stressedTrees}</div>
                  <div className="text-sm text-gray-600">Need Attention</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-4">Tree Types Detected</h4>
                  <div className="space-y-3">
                    {results.treeTypes.map((tree, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-800">{tree.type}</span>
                          <span className="text-sm text-gray-500 ml-2">({tree.count} trees)</span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            tree.health === "Excellent"
                              ? "bg-green-100 text-green-600"
                              : tree.health === "Good"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {tree.health}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-4">Area Analysis</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Area:</span>
                      <span className="font-semibold">{results.areaAnalysis.totalArea}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tree Density:</span>
                      <span className="font-semibold">{results.areaAnalysis.treeDensity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-semibold text-green-600">
                        {results.areaAnalysis.coverage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4">
                <h4 className="font-bold text-gray-800 mb-3">Recommendations</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TreeCounting;
