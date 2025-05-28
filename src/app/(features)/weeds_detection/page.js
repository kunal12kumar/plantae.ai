// for weed detection 
"use client"


import React, { useState, useRef } from "react";
import { Trash2, Upload, X, Target, RefreshCw, Clock } from "lucide-react";
import Image from "next/image";

const WeedDetection = () => {
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
        weedsDetected: true,
        weedCoverage: "23%",
        weedTypes: [
          { name: "Broadleaf Weeds", coverage: "15%", severity: "Medium", color: "#ef4444" },
          { name: "Grass Weeds", coverage: "8%", severity: "Low", color: "#f59e0b" }
        ],
        recommendations: {
          immediate: [
            "Apply selective herbicide for broadleaf weeds",
            "Manual removal of grass weeds in sensitive areas",
            "Increase crop density to compete with weeds"
          ],
          longTerm: [
            "Implement crop rotation to break weed cycles",
            "Use mulching to suppress weed growth",
            "Monitor and treat early in growing season"
          ]
        },
        treatmentPlan: {
          method: "Targeted Spraying",
          timing: "Early morning or late evening",
          frequency: "Every 2-3 weeks",
          precautions: "Avoid spraying on windy days"
        },
        costSaving: "60% less herbicide needed with precision application"
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
    <div className="max-w-full  mx-auto p-6 bg-white pt-30 shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4">
          <Trash2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Weed Detection</h2>
        <p className="text-gray-600">खरपतवार पहचानें और हटाने की रणनीति पाएं</p>
      </div>

      {!uploadedImage ? (
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-yellow-400 transition-colors duration-300">
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
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Field Image</h3>
              <p className="text-gray-500 mb-4">खेत की तस्वीर अपलोड करें</p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Choose Image
            </button>
            <p className="text-sm text-gray-400">Clear field photos work best</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative">
            <Image
              src={uploadedImage}
              alt="Uploaded field"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
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
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center space-x-2 mx-auto"
              >
                <Target className="w-5 h-5" />
                <span>Detect Weeds</span>
              </button>
            </div>
          )}

          {isAnalyzing && (
            <div className="text-center py-8">
              <div className="inline-flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-yellow-500 animate-spin" />
                <span className="text-lg font-medium text-gray-700">Scanning for weeds...</span>
              </div>
              <p className="text-gray-500 mt-2">Identifying weed types and coverage</p>
            </div>
          )}

          {results && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">Detection Results</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Cost Saving:</span>
                  <span className="font-bold text-green-600">{results.costSaving}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-yellow-500 mr-2" />
                    Weed Coverage Analysis
                  </h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600 mb-1">{results.weedCoverage}</div>
                      <div className="text-sm text-gray-600">Total Weed Coverage</div>
                    </div>
                    <div className="space-y-3">
                      {results.weedTypes.map((weed, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: weed.color }}></div>
                            <span className="font-medium text-gray-800">{weed.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-800">{weed.coverage}</div>
                            <div
                              className={`text-xs px-2 py-1 rounded-full ${
                                weed.severity === "High"
                                  ? "bg-red-100 text-red-600"
                                  : weed.severity === "Medium"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-green-100 text-green-600"
                              }`}
                            >
                              {weed.severity}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    Treatment Plan
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Method:</span>
                      <span className="font-semibold">{results.treatmentPlan.method}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timing:</span>
                      <span className="font-semibold">{results.treatmentPlan.timing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-semibold">{results.treatmentPlan.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Precautions:</span>
                      <span className="font-semibold">{results.treatmentPlan.precautions}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 space-y-4">
                <h4 className="font-bold text-gray-800 mb-2">Recommendations</h4>
                <div>
                  <h5 className="text-sm font-semibold text-yellow-700 mb-1">Immediate Actions</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {results.recommendations.immediate.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-green-700 mb-1">Long-term Strategies</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {results.recommendations.longTerm.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeedDetection;
