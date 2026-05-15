import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import { calculateResult } from './utils/calculate'

export type AppState = 'welcome' | 'quiz' | 'result';

function App() {
  const [appState, setAppState] = useState<AppState>('welcome')
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [resultCode, setResultCode] = useState<string>('')

  const startQuiz = () => {
    setAnswers({});
    setAppState('quiz');
  }

  const handleComplete = (finalAnswers: Record<number, string>) => {
    setAnswers(finalAnswers);
    const code = calculateResult(finalAnswers);
    setResultCode(code);
    setAppState('result');
  }

  const restart = () => {
    setAnswers({});
    setResultCode('');
    setAppState('welcome');
  }

  return (
    <div className="min-h-screen bg-white/50 w-full flex items-center justify-center overflow-hidden">
      {appState === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
      {appState === 'quiz' && <QuestionScreen onComplete={handleComplete} />}
      {appState === 'result' && <ResultScreen code={resultCode} answers={answers} onRestart={restart} />}
    </div>
  )
}

export default App
