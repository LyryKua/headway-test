'use client'

import { Question } from '@/domain/types'
import { createContext, useContext } from 'react'

export type State = {
  questions: Question[]
  currentQuestionIndex: number
  earnedAmount: number
  isLastQuestion: boolean
}

export type QuestionsContextType = State & {
  goToNextQuestion: () => void
}

export const defaultValue: QuestionsContextType = {
  questions: [],
  currentQuestionIndex: -1,
  earnedAmount: 0,
  isLastQuestion: false,

  goToNextQuestion: () => {
  },
}

export const QuestionsContext = createContext(defaultValue)

export const useQuestionsContext = () => useContext<QuestionsContextType>(QuestionsContext)
