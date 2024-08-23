'use client'

import { useQuestionsContext } from '@/contexts/QuestionsContext/QuestionsContext'
import { Option } from '@/domain/types'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'

export const Game: FC = () => {
  const { questions, currentQuestionIndex, earnedAmount, goToNextQuestion } = useQuestionsContext()
  const question = questions[currentQuestionIndex]
  const router = useRouter()

  const handleAnswerClick = (option: Option) => () => {
    if (option.isCorrect && currentQuestionIndex < questions.length - 1) {
      goToNextQuestion()
    } else {
      router.push(`/game-over?earnedAmount=${earnedAmount}`)
    }
  }

  return (
    <main>
      <h1>{question.content.text}</h1>
      <ul>
        {question.options.map(option => (
          <li key={option.key}>
            <button onClick={handleAnswerClick(option)}>{option.content.text}</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
