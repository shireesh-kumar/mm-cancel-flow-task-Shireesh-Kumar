'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CancelFlowStep from '@/components/CancelFlowStep';
import { cancelFlowSteps } from '@/data/cancelFlowSteps';
import JobSuccessStep from '@/components/JobSuccessStep';
import FeedbackStep from '@/components/FeedbackStep';
import VisaStepYes from '@/components/VisaStepYes';
import VisaStepNo from '@/components/VisaStepNo';

export default function CancelPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState('initial');
  const [selectedOption, setSelectedOption] = useState('');
  const [userAnswers, setUserAnswers] = useState({
    foundWithMigrateMate: ''
  });

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === 'found-job') {
      setCurrentStep('jobSuccess');
    } else if (option === 'continue') {
      setCurrentStep('feedback');
    }
  };

  const handleFeedbackContinue = () => {
    setCurrentStep('visa');
  };

  const handleVisaComplete = () => {
    console.log('Cancellation completed');
    router.push('/');
  };

  const handleBack = () => {
    if (currentStep === 'jobSuccess') {
      setCurrentStep('initial');
      setSelectedOption('');
    } else if (currentStep === 'feedback') {
      setCurrentStep('jobSuccess');
    } else if (currentStep === 'visa') {
      setCurrentStep('feedback');
    } else {
      router.push('/');
    }
  };

  const getCurrentStepData = () => {
    return cancelFlowSteps[currentStep as keyof typeof cancelFlowSteps] || cancelFlowSteps.initial;
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl md:max-w-5xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {currentStep !== 'initial' && (
            <button
              onClick={handleBack}
              className="text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm hidden sm:inline">Back</span>
            </button>
          )}
          <div className="flex flex-col items-center flex-1 mx-4">
            <h1 className="text-lg font-bold text-gray-900 text-center">Subscription Cancellation</h1>
            {currentStep !== 'initial' && (
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-1">
                  <div className={`w-4 h-2 rounded-sm ${
                    currentStep === 'jobSuccess' ? 'bg-gray-400' : 
                    (currentStep === 'feedback' || currentStep === 'visa') ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                  <div className={`w-4 h-2 rounded-sm ${
                    currentStep === 'feedback' ? 'bg-gray-400' : 
                    currentStep === 'visa' ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                  <div className={`w-4 h-2 rounded-sm ${
                    currentStep === 'visa' ? 'bg-gray-400' : 'bg-gray-300'
                  }`} />
                </div>
                <span className="text-xs text-gray-500 ml-2">
                  Step {currentStep === 'jobSuccess' ? '1' : currentStep === 'feedback' ? '2' : '3'} of 3
                </span>
              </div>
            )}
          </div>
          <button
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={`flex flex-col md:grid md:grid-cols-2 ${
          currentStep === 'jobSuccess' ? 'md:h-[520px]' : currentStep === 'feedback' ? 'md:h-[450px]' : 'md:h-[440px]'
        }`}>
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
            {currentStep === 'jobSuccess' && (
              <JobSuccessStep 
                onOptionClick={handleOptionClick} 
                onAnswerChange={(question, answer) => 
                  setUserAnswers(prev => ({ ...prev, [question]: answer }))
                } 
              />
            )}
            {currentStep === 'feedback' && (
              <FeedbackStep onContinue={handleFeedbackContinue} />
            )}
            {currentStep === 'visa' && userAnswers.foundWithMigrateMate === 'Yes' && (
              <VisaStepYes onComplete={handleVisaComplete} />
            )}
            {currentStep === 'visa' && userAnswers.foundWithMigrateMate === 'No' && (
              <VisaStepNo onComplete={handleVisaComplete} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
