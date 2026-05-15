import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { Download, RotateCcw } from 'lucide-react';
import { personalities } from '../data/personalities';
import MinimalRadar from './RadarChart';

interface Props {
  code: string;
  answers: Record<number, string>;
  onRestart: () => void;
}

export default function ResultScreen({ code, answers, onRestart }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const p = personalities[code] || personalities['TSPL']; // fallback

  // Calculate scores for radar (0-100)
  const calcScore = (leftVal: string) => {
    let leftCount = 0;
    Object.values(answers).forEach(v => {
      if (v === leftVal) leftCount++;
    });
    // leftCount is 0-5. 
    // If left is chosen, score is higher. 
    return (leftCount / 5) * 100;
  };

  // 'T' vs 'I', 'S' vs 'X', 'P' vs 'R', 'L' vs 'M'
  const radarScores = {
    '资源规划': calcScore('T') || (code.includes('T') ? 85 : 25),
    '强度追求': calcScore('S') || (code.includes('S') ? 85 : 25),
    '全图探索': calcScore('P') || (code.includes('P') ? 85 : 25),
    '单人沉浸': calcScore('L') || (code.includes('L') ? 85 : 25),
  };

  const handleSave = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2, // High resolution
        useCORS: true,
        backgroundColor: null,
      });
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `二游人格_${code}.png`;
      link.href = imgData;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col items-center py-10 px-4">
      {/* Background Image Setup */}
      {/* Put your awesome images in public/assets/bg.jpg */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/assets/bg.jpg), linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' 
        }}
      />
      <div className="fixed inset-0 z-0 bg-white/20 backdrop-blur-3xl" />

      {/* Main Card (The part to capture) */}
      <motion.div 
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden p-8 flex flex-col items-center"
      >
        <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-8">
          ACNG Personality Profile
        </div>

        <div className="flex gap-2 flex-wrap justify-center mb-6">
          {p.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/50 text-gray-600 text-xs font-medium border border-white/60">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2 text-center">
          {p.title}
        </h1>
        <p className="text-sm font-medium text-gray-500 mb-8 text-center">
          {p.code} · {p.group}
        </p>

        <div className="w-full bg-white/40 rounded-3xl p-5 mb-8 border border-white/50">
          <p className="text-sm text-gray-700 leading-relaxed text-center font-medium">
            "{p.subtitle}"
          </p>
          <div className="w-8 h-[1px] bg-gray-300 mx-auto my-4" />
          <p className="text-xs text-gray-500 leading-relaxed text-center">
            {p.description}
          </p>
        </div>

        <MinimalRadar scores={radarScores} />

        {/* Branding Footer for Screenshot */}
        <div className="mt-8 pt-6 border-t border-gray-200/50 w-full flex justify-between items-center opacity-60">
          <span className="text-[10px] font-medium text-gray-600">测测你的二游人格</span>
          <span className="text-[10px] font-medium text-gray-400">扫码或搜索测试</span>
        </div>
      </motion.div>

      {/* Action Buttons (Not captured in screenshot) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 flex gap-4 mt-8"
      >
        <button
          onClick={handleSave}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          <Download className="w-4 h-4" />
          {isGenerating ? '生成中...' : '保存档案'}
        </button>
        <button
          onClick={onRestart}
          className="flex items-center justify-center w-12 h-12 bg-white/60 backdrop-blur-md border border-white/80 text-gray-900 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
