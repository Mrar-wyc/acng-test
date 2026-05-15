import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center p-8 max-w-md w-full text-center"
    >
      <div className="w-20 h-20 bg-gray-100 rounded-3xl mb-8 flex items-center justify-center shadow-sm">
        <span className="text-3xl">✨</span>
      </div>
      
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
        二游人格档案
      </h1>
      
      <p className="text-gray-500 mb-12 text-lg font-light leading-relaxed">
        抛开所有的强度焦虑与抽卡烦恼。<br/>
        20个简单情境，<br/>
        发现你在二次元世界里的「隐藏人格」。
      </p>

      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gray-900 rounded-full overflow-hidden transition-transform active:scale-95 hover:shadow-xl hover:shadow-gray-900/20"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></span>
        <span className="relative flex items-center gap-2">
          开始测试
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>

      <p className="mt-8 text-xs text-gray-400 font-light tracking-wider">
        * 测试结果仅供娱乐，无需太当真
      </p>
    </motion.div>
  );
}
