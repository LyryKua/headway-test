import { State } from '@/contexts/QuestionsContext/QuestionsContext'
import { Reducer } from 'react'

export enum ActionType {
  CORRECT_ANSWER = 'CORRECT_ANSWER',
}

export type Action =
  | { type: ActionType.CORRECT_ANSWER; payload: {} }

export const reducer: Reducer<State, Action> = (state, action) => {
  const { type } = action
  const isLastQuestion = state.currentQuestionIndex === state.questions.length - 1
  const currentQuestion = state.questions[state.currentQuestionIndex]

  switch (type) {
    case ActionType.CORRECT_ANSWER:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        earnedAmount: currentQuestion.amount,
        isLastQuestion,
      }
    default:
      throw new Error(`unknown action: ${type}`)
  }
}
