'use client'

import { HexagonButton } from '@/components/HexagonButton/HexagonButton'
import { useQuestionsContext } from '@/contexts/QuestionsContext/QuestionsContext'
import { Option } from '@/domain/types'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import s from './Game.module.css'

export const Game: FC = () => {
  const { questions, currentQuestionIndex, earnedAmount, goToNextQuestion } = useQuestionsContext()
  const question = questions[currentQuestionIndex]
  const router = useRouter()

  const handleAnswerClick = (option: Option) => () => {
    if (option.isCorrect) {
      if (currentQuestionIndex < questions.length - 1) {
        goToNextQuestion()
      } else {
        router.push(`/game-over?earnedAmount=${question.amount}`)
      }
    } else {
      router.push(`/game-over?earnedAmount=${earnedAmount}`)
    }
  }

  return (
    <main className={s.container}>
      <h1 className={s.question}>{question.content.text}</h1>
      <ul className={s.options}>
        {question.options.map(option => (
          <li key={option.key} className={s.option}>
            <HexagonButton onClick={handleAnswerClick(option)} index={option.key} text={option.content.text} />
          </li>
        ))}
      </ul>
    </main>
  )
}
