'use client'

import { Achievement } from '@/components/Achievement/Achievement'
import { useQuestionsContext } from '@/contexts/QuestionsContext/QuestionsContext'
import React, { FC } from 'react'

export const Sidebar: FC = () => {
  const { questions, currentQuestionIndex } = useQuestionsContext()

  return (
    <aside>
      <ul>
        {questions.map((question, index) => (
          <li key={question.key}>
            <Achievement title={`$${question.amount}`} isEarned={index < currentQuestionIndex} />
          </li>
        ))}
      </ul>
    </aside>
  )
}

