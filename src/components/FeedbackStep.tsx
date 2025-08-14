'use client';

import { useState } from 'react';

interface FeedbackStepProps {
  onContinue: () => void;
}

export default function FeedbackStep({ onContinue }: FeedbackStepProps) {
  const [feedback, setFeedback] = useState('');
  const minCharacters = 25;
  const maxCharacters = 250;
  const isValid = feedback.length >= minCharacters;

  return (
    <div className="w-full max-w-md flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-4">
          What's one thing you wish we could've helped you with?
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          We're always looking to improve, your thoughts can help us make Migrate Mate more useful for others.*
        </p>

        <div className="relative">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback..."
            className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
            maxLength={maxCharacters}
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            Min {minCharacters} characters ({feedback.length}/{maxCharacters})
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={!isValid}
        className={`w-full mt-6 p-3 text-center rounded-lg border transition-all ${
          isValid
            ? 'border-purple-500 bg-purple-500 text-white hover:bg-purple-600 hover:border-purple-600'
            : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <span className="font-medium">Continue</span>
      </button>
    </div>
  );
}