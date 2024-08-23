'use client'

import { ActionType, reducer } from '@/contexts/QuestionsContext/reducer'
import { Question } from '@/domain/types'
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react'
import { QuestionsContext, QuestionsContextType } from './QuestionsContext'

type QuestionProviderProps = PropsWithChildren<{
  questions: Question[]
}>

export const QuestionsProvider: FC<QuestionProviderProps> = ({ children, questions }) => {
  // todo: after some refactor using a reducer here seems like an overkill
  const [state, dispatch] = useReducer(reducer, {
    questions,
    currentQuestionIndex: 0,
    earnedAmount: 0,
    isLastQuestion: false,
  })

  const goToNextQuestion = () => {
    dispatch({ type: ActionType.CORRECT_ANSWER, payload: {} })
  }

  const value: QuestionsContextType = {
    ...state,

    goToNextQuestion,
  }

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}

export function useQuestionsContext() {
  return useContext(QuestionsContext)
}
