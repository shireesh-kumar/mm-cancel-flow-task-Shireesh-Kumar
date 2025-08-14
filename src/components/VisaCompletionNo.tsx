'use client';

interface VisaCompletionNoProps {
  onFinish: () => void;
}

export default function VisaCompletionNo({ onFinish }: VisaCompletionNoProps) {
  return (
    <div className="w-full max-w-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-6">
          Your cancellation's all sorted, mate, no more charges.
        </h2>
        
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-gray-200">
            <img
              src="/mihailo-profile.jpeg"
              alt="Mihailo Bozic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">Mihailo Bozic</h3>
            <p className="text-sm text-gray-500 mb-3">&lt;mihailo@migratemate.co&gt;</p>
            
            <p className="text-gray-700 font-medium mb-3">
              I'll be reaching out soon to help with the visa side of things.
            </p>
            
            <p className="text-gray-600 text-sm mb-2">
              We've got your back, whether it's questions, paperwork, or just figuring out your options.
            </p>
            
            <p className="text-gray-600 text-sm">
              Keep an eye on your inbox, I'll be in touch shortly.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onFinish}
        className="w-full p-3 text-center rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-all"
      >
        <span className="font-medium">Finish</span>
      </button>
    </div>
  );
}