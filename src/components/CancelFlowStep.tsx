'use client';

interface Option {
  id: string;
  label: string;
}

interface CancelFlowStepProps {
  title: string;
  subtitle: string;
  question: string;
  description: string;
  options: Option[];
  selectedOption: string;
  onOptionClick: (option: string) => void;
}

export default function CancelFlowStep({
  title,
  subtitle,
  question,
  description,
  options,
  selectedOption,
  onOptionClick
}: CancelFlowStepProps) {
  return (
    <div className="w-full max-w-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight">{title}</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
          {subtitle}
        </h3>

        <h4 className="text-xl font-bold text-gray-800 mb-3 italic">
          {question}
        </h4>

        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="space-y-3 mt-6">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionClick(option.id)}
            className={`w-full p-3 text-center rounded-lg border transition-all ${
              selectedOption === option.id
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-300 hover:border-gray-400 bg-gray-50'
            }`}
          >
            <span className="font-medium text-gray-700">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}