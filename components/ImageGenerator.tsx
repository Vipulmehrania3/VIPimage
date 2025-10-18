
import React, { useState } from 'react';
import { Scenario } from '../types';
import ImageUpload from './ImageUpload';
import Spinner from './Spinner';
import { generateFusedImage } from '../services/geminiService';
import { fileToGenerativePart } from '../utils/fileUtils';

interface ImageGeneratorProps {
  scenario: Scenario;
  onBack: () => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ scenario, onBack }) => {
  const [images, setImages] = useState<(File | null)[]>(Array(scenario.requiredImages).fill(null));
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File, index: number) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
    setError(null);
  };

  const handleGenerate = async () => {
    const uploadedImages = images.filter((img) => img !== null) as File[];
    if (uploadedImages.length !== scenario.requiredImages) {
      setError(`Please upload ${scenario.requiredImages} images.`);
      return;
    }

    setIsLoading(true);
    setGeneratedImage(null);
    setError(null);

    try {
      const imageParts = await Promise.all(
        uploadedImages.map(fileToGenerativePart)
      );
      const resultBase64 = await generateFusedImage(imageParts, scenario.prompt);
      setGeneratedImage(`data:image/jpeg;base64,${resultBase64}`);
    } catch (e) {
      console.error(e);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setImages(Array(scenario.requiredImages).fill(null));
    setGeneratedImage(null);
    setError(null);
  }

  return (
    <div className="w-full bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
        >
          &larr; Change Scenario
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">{scenario.title}</h2>
        <div className="w-24"></div> {/* Spacer */}
      </div>

      {!generatedImage && !isLoading && (
        <>
          <p className="text-gray-400 mb-8 text-center">{scenario.description}</p>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-8`}>
            {Array.from({ length: scenario.requiredImages }).map((_, index) => (
              <ImageUpload
                key={index}
                index={index}
                onFileSelect={(file) => handleFileSelect(file, index)}
              />
            ))}
          </div>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          <button
            onClick={handleGenerate}
            disabled={images.some(img => img === null)}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            Generate Image
          </button>
        </>
      )}

      {isLoading && (
          <div className="flex flex-col items-center justify-center h-64">
              <Spinner />
              <p className="text-lg text-gray-300 mt-4">AI is creating your masterpiece...</p>
              <p className="text-sm text-gray-500">This may take a moment.</p>
          </div>
      )}

      {generatedImage && (
        <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">Here's Your Fused Image!</h3>
          <img src={generatedImage} alt="AI generated" className="rounded-lg shadow-2xl max-w-full md:max-w-lg mb-8" />
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Create Another
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
