import { State } from '@/contexts/QuestionsContext/QuestionsContext'
import { Reducer } from 'react'

export enum ActionType {
  CORRECT_ANSWER = 'CORRECT_ANSWER',
}

export type Action =
  | { type: ActionType.CORRECT_ANSWER; payload: {} }

export const reducer: Reducer<State, Action> = (state, action) => {
  const { type } = action

  switch (type) {
    case ActionType.CORRECT_ANSWER:
      const currentQuestion = state.questions[state.currentQuestionIndex]
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        earnedAmount: state.earnedAmount + currentQuestion.amount,
      }
    default:
      throw new Error(`unknown action: ${type}`)
  }
}
