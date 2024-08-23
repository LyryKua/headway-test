'use client'

import { Achievement } from '@/components/Achievement/Achievement'
import { useQuestionsContext } from '@/contexts/QuestionsContext/QuestionsContext'
import React, { FC } from 'react'
import s from './Sidebar.module.css'

export const Sidebar: FC = () => {
  const { questions, currentQuestionIndex } = useQuestionsContext()

  return (
    <aside className={s.container}>
      <ul className={s.achievements}>
        {questions.map((question, index) => (
          <li key={question.key}>
            <Achievement title={`$${question.amount}`} isEarned={index < currentQuestionIndex} isCurrent={index === currentQuestionIndex} />
          </li>
        ))}
      </ul>
    </aside>
  )
}

