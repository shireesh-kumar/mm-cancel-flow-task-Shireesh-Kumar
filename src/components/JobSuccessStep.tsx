'use client';

import { useState } from 'react';

interface JobSuccessStepProps {
  onOptionClick: (option: string) => void;
}

export default function JobSuccessStep({ onOptionClick }: JobSuccessStepProps) {
  const [answers, setAnswers] = useState({
    foundWithMigrateMate: '',
    rolesApplied: '',
    companiesEmailed: '',
    companiesInterviewed: ''
  });

  const handleOptionClick = (question: string, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const isComplete = Object.values(answers).every(answer => answer !== '');

  return (
    <div className="w-full max-w-md flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-800 leading-tight mb-4">
          Congrats on the new role! 🎉
        </h2>

        <div className="space-y-3">
          {/* Question 1 */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Did you find this job with MigrateMate?*
            </p>
            <div className="flex gap-2">
              {['Yes', 'No'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick('foundWithMigrateMate', option)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                    answers.foundWithMigrateMate === option
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-200 hover:border-purple-400 bg-gray-100'
                  }`}
                >
                  <span className={`font-medium ${
                    answers.foundWithMigrateMate === option ? 'text-white' : 'text-gray-500'
                  }`}>{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              How many roles did you apply for through Migrate Mate?*
            </p>
            <div className="grid grid-cols-4 gap-1">
              {['0', '1-5', '6-20', '20+'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick('rolesApplied', option)}
                  className={`px-1 py-1 text-center rounded-lg border text-xs transition-all ${
                    answers.rolesApplied === option
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-200 hover:border-purple-400 bg-gray-100'
                  }`}
                >
                  <span className={`font-medium ${
                    answers.rolesApplied === option ? 'text-white' : 'text-gray-500'
                  }`}>{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              How many companies did you <span className="underline">email</span> directly?*
            </p>
            <div className="grid grid-cols-4 gap-1">
              {['0', '1-5', '6-20', '20+'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick('companiesEmailed', option)}
                  className={`px-1 py-1 text-center rounded-lg border text-xs transition-all ${
                    answers.companiesEmailed === option
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-200 hover:border-purple-400 bg-gray-100'
                  }`}
                >
                  <span className={`font-medium ${
                    answers.companiesEmailed === option ? 'text-white' : 'text-gray-500'
                  }`}>{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Question 4 */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              How many different companies did you <span className="underline">interview</span> with?*
            </p>
            <div className="grid grid-cols-4 gap-1">
              {['0', '1-2', '3-5', '5+'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick('companiesInterviewed', option)}
                  className={`px-1 py-1 text-center rounded-lg border text-xs transition-all ${
                    answers.companiesInterviewed === option
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-200 hover:border-purple-400 bg-gray-100'
                  }`}
                >
                  <span className={`font-medium ${
                    answers.companiesInterviewed === option ? 'text-white' : 'text-gray-500'
                  }`}>{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onOptionClick('continue')}
        disabled={!isComplete}
        className={`w-full mt-6 p-3 text-center rounded-lg border transition-all ${
          isComplete
            ? 'border-purple-500 bg-purple-500 text-white hover:bg-purple-600 hover:border-purple-600'
            : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <span className={`font-medium ${
          isComplete ? 'text-white' : 'text-gray-700'
        }`}>Continue</span>
      </button>
    </div>
  );
}