import { State } from '@/contexts/QuestionsContext/QuestionsContext'
import { Reducer } from 'react'

export enum ActionType {
  CORRECT_ANSWER = 'CORRECT_ANSWER',
  LAST_QUESTION = 'LAST_QUESTION',
}

export type Action =
  | { type: ActionType.CORRECT_ANSWER; payload: {} }
| { type: ActionType.LAST_QUESTION; payload: {} }

export const reducer: Reducer<State, Action> = (state, action) => {
  const { type } = action
  const currentQuestion = state.questions[state.currentQuestionIndex]

  switch (type) {
    case ActionType.CORRECT_ANSWER:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        earnedAmount: state.earnedAmount + currentQuestion.amount,
      }
    case ActionType.LAST_QUESTION:
      return {
        ...state,
        earnedAmount: state.earnedAmount + currentQuestion.amount,
      }
    default:
      throw new Error(`unknown action: ${type}`)
  }
}
