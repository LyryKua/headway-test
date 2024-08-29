'use client'

import { HexagonLabel } from '@/components/HexagonLabel/HexagonLabel'
import { useQuestionsContext } from '@/contexts/QuestionsContext/QuestionsContext'
import React, { FC } from 'react'
import s from './Sidebar.module.css'

export const Sidebar: FC = () => {
  const { questions, currentQuestionIndex } = useQuestionsContext()


  return (
    <aside className={s.container}>
      <ul className={s.achievements}>
        {questions.map((question, index) =>
          (
            <li key={question.key}>
              <HexagonLabel amount={question.amount} isEarned={index < currentQuestionIndex} isCurrent={index === currentQuestionIndex} />
            </li>
          ))}
      </ul>
    </aside>
  )
}

