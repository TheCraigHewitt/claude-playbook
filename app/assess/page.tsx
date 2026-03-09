'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { assessmentQuestions, calculateResults } from '@/lib/playbook/assessment'

export default function AssessmentPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const question = assessmentQuestions[currentQuestion]
  const progress = ((currentQuestion) / assessmentQuestions.length) * 100

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [question.id]: value }
    setAnswers(newAnswers)

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const results = calculateResults(newAnswers)
      const params = new URLSearchParams({
        identity: results.identity,
        score: results.score.toString(),
        path: results.path,
      })
      router.push(`/claude-playbook/assess/results?${params.toString()}`)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-muted">Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
          <span className="text-sm text-text-muted">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1 bg-backgroundTertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {question.question}
        </h1>
        {currentQuestion === 0 && (
          <p className="text-text-secondary">
            2-minute assessment to find your ideal Claude setup and implementation path.
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
              answers[question.id] === option.value
                ? 'border-accent-primary bg-accent-primary/10 text-white'
                : 'border-border-default bg-backgroundSecondary text-text-secondary hover:border-border-light hover:bg-backgroundTertiary hover:text-white'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Back button */}
      {currentQuestion > 0 && (
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="mt-6 text-sm text-text-muted hover:text-white transition-colors"
        >
          ← Back
        </button>
      )}

      {/* Skip */}
      <div className="mt-10 pt-6 border-t border-border-default text-center">
        <a
          href="/claude-playbook/foundations/how-claude-thinks"
          className="text-sm text-text-muted hover:text-accent-primary transition-colors"
        >
          Skip assessment — go straight to the Playbook →
        </a>
      </div>
    </div>
  )
}
