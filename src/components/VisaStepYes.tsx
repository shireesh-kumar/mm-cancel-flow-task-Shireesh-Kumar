'use client';

import { useState } from 'react';

interface VisaStepYesProps {
  onComplete: () => void;
}

export default function VisaStepYes({ onComplete }: VisaStepYesProps) {
  const [selectedOption, setSelectedOption] = useState('');
  const [visaType, setVisaType] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === 'No') {
      setVisaType('');
    }
  };

  const isComplete = selectedOption !== '' && (selectedOption === 'No' || visaType.trim() !== '');

  const visaOptions = [
    'H-1B',
    'O-1',
    'L-1',
    'E-2',
    'TN',
    'Other'
  ];

  return (
    <div className="w-full max-w-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-4">
          We helped you land the job, now let's help you secure your visa.
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-0">
          Is your company providing an immigration lawyer to help with your visa?
        </p>

        <div className="flex gap-6">
          {['Yes', 'No'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="visa-lawyer"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionClick(option)}
                className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-0"
              />
              <span className="ml-3 text-gray-700 font-medium">{option}</span>
            </label>
          ))}
        </div>

        {selectedOption === 'Yes' && (
          <div className="mt-3">
            <p className="text-gray-600 leading-relaxed mb-2">
              What visa will you be applying for?
            </p>
            <select
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 bg-white"
            >
              <option value="">Select visa type</option>
              {visaOptions.map((visa) => (
                <option key={visa} value={visa}>{visa}</option>
              ))}
            </select>
          </div>
        )}

        {selectedOption === 'No' && (
          <div className="mt-3">
            <p className="text-gray-600 leading-relaxed mb-1">
              We can connect you with one of our trusted partners.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              Which visa would you like to apply for?
            </p>
            <select
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 bg-white"
            >
              <option value="">Select visa type</option>
              {visaOptions.map((visa) => (
                <option key={visa} value={visa}>{visa}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <button
        onClick={onComplete}
        disabled={!isComplete}
        className={`w-full mt-6 p-3 text-center rounded-lg transition-all ${
          isComplete
            ? 'bg-gray-900 text-white hover:bg-gray-800'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <span className="font-medium">Complete cancellation</span>
      </button>
    </div>
  );
}