
import React from 'react';
import { Scenario } from '../types';

interface ScenarioSelectorProps {
  scenarios: Scenario[];
  onSelect: (scenario: Scenario) => void;
}

const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({ scenarios, onSelect }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-gray-300">Choose a Scenario</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            onClick={() => onSelect(scenario)}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center cursor-pointer border-2 border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20"
          >
            <div className="mb-4">{scenario.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
            <p className="text-gray-400">{scenario.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioSelector;
