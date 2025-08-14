'use client';

interface VisaCompletionYesProps {
  onFinish: () => void;
}

export default function VisaCompletionYes({ onFinish }: VisaCompletionYesProps) {
  return (
    <div className="w-full max-w-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-4">
          All done, your cancellation's been processed.
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          We're stoked to hear you've landed a job and sorted your visa. Big congrats from the team. 🙌
        </p>
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