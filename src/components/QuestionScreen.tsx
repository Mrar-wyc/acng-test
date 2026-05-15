import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';

interface Props {
  onComplete: (answers: Record<number, string>) => void;
}

export default function QuestionScreen({ onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  // Animation states
  const [direction, setDirection] = useState(1);

  const handleSelect = (value: string) => {
    const questionId = questions[currentIndex].id;
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 100);
    } else {
      setTimeout(() => onComplete(newAnswers), 300);
    }
  };

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-md h-[100dvh] pt-12 pb-8 px-6">
      {/* Progress bar */}
      <div className="w-full mb-12">
        <div className="flex justify-between text-xs text-gray-400 font-medium mb-3 px-1">
          <span>{currentIndex + 1} / {questions.length}</span>
          <span>探索中...</span>
        </div>
        <div className="w-full h-1 bg-gray-200/50 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gray-900 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Cards container */}
      <div className="relative w-full flex-1 flex items-center justify-center">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: 50 * direction, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50 * direction, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-[60vh] max-h-[500px]">
              
              <h2 className="text-xl font-medium text-gray-800 leading-relaxed mb-auto mt-4">
                {currentQ.text}
              </h2>

              <div className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => handleSelect(currentQ.optionA.value)}
                  className="text-left w-full p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100/80 hover:border-gray-200 transition-all active:scale-[0.98] text-gray-700 leading-relaxed"
                >
                  {currentQ.optionA.text}
                </button>
                <button
                  onClick={() => handleSelect(currentQ.optionB.value)}
                  className="text-left w-full p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100/80 hover:border-gray-200 transition-all active:scale-[0.98] text-gray-700 leading-relaxed"
                >
                  {currentQ.optionB.text}
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
