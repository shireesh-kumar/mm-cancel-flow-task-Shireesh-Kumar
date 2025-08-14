'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CancelFlowStep from '@/components/CancelFlowStep';
import { cancelFlowSteps } from '@/data/cancelFlowSteps';

export default function CancelPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState('initial');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const getCurrentStepData = () => {
    return cancelFlowSteps[currentStep as keyof typeof cancelFlowSteps] || cancelFlowSteps.initial;
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl md:max-w-5xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b relative">
          <h1 className="text-lg font-bold text-gray-900 mx-auto">Subscription Cancellation</h1>
          <button
            onClick={() => router.push('/')}
            className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:h-[400px]">
          <div className="order-1 md:order-2 h-full px-4 pt-2 pb-4 sm:px-5 sm:pt-3 sm:pb-5 md:px-6 md:pt-3 md:pb-6 lg:px-8 lg:pt-4 lg:pb-8 flex">
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src="/empire-state.jpg"
                alt="Empire State Building"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600" />
            </div>
          </div>

          <div className="order-2 md:order-1 h-full px-4 pt-2 pb-4 sm:px-5 sm:pt-3 sm:pb-5 md:px-6 md:pt-3 md:pb-6 lg:px-8 lg:pt-4 lg:pb-8 flex">
            {currentStep === 'initial' && (
              <CancelFlowStep
                {...getCurrentStepData()}
                selectedOption={selectedOption}
                onOptionClick={handleOptionClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
