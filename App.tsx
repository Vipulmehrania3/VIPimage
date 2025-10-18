
import React, { useState } from 'react';
import { Scenario } from './types';
import { scenarios } from './constants';
import ScenarioSelector from './components/ScenarioSelector';
import ImageGenerator from './components/ImageGenerator';

const App: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenario(scenario);
  };

  const handleBack = () => {
    setSelectedScenario(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-5xl text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          AI Image Fusion
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Create something new. Blend images with AI-powered scenarios.
        </p>
      </header>

      <main className="w-full max-w-5xl flex-grow">
        {!selectedScenario ? (
          <ScenarioSelector scenarios={scenarios} onSelect={handleScenarioSelect} />
        ) : (
          <ImageGenerator scenario={selectedScenario} onBack={handleBack} />
        )}
      </main>
      
      <footer className="w-full max-w-5xl text-center mt-8 py-4 border-t border-gray-700">
          <p className="text-gray-500 text-sm">Powered by Gemini AI</p>
      </footer>
    </div>
  );
};

export default App;
