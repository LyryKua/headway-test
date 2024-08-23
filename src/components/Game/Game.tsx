'use client'

import { Button } from '@/components/Button/Button'
import { useQuestionsContext } from '@/contexts/QuestionsContext/QuestionsContext'
import { Option } from '@/domain/types'
import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import s from './Game.module.css'

export const Game: FC = () => {
  const { questions, currentQuestionIndex, earnedAmount, lastQuestion, goToNextQuestion } = useQuestionsContext()
  const question = questions[currentQuestionIndex]
  const router = useRouter()

  const handleAnswerClick = (option: Option) => () => {
    if (option.isCorrect) {
      currentQuestionIndex < questions.length - 1
        ? goToNextQuestion()
        : lastQuestion()
    } else {
      router.push(`/game-over?earnedAmount=${earnedAmount}`)
    }
  }

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      router.push(`/game-over?earnedAmount=${earnedAmount}`)
    }
  }, [currentQuestionIndex, earnedAmount, router])

  return (
    <main className={s.container}>
      <h1 className={s.question}>{question.content.text}</h1>
      <ul className={s.options}>
        {question.options.map(option => (
          <li key={option.key} className={s.option}>
            <Button onClick={handleAnswerClick(option)}>{option.content.text}</Button>
          </li>
        ))}
      </ul>
    </main>
  )
}
