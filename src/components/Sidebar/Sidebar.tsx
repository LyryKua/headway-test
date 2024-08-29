'use client'

import { HamburgerButton } from '@/components/HamburgerButton/HamburgerButton'
import { HexagonLabel } from '@/components/HexagonLabel/HexagonLabel'
import { useQuestionsContext } from '@/contexts/QuestionsContext/QuestionsContext'
import React, { FC, useState } from 'react'
import s from './Sidebar.module.css'

export const Sidebar: FC = () => {
  const { questions, currentQuestionIndex } = useQuestionsContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const className = isOpen ? s.containerOpen : s.container

  return (
    <>
      <div className={s.hamburger}>
        <HamburgerButton isOpen={isOpen} onClick={handleClick} />
      </div>
      <aside className={className}>
        <ul className={s.achievements}>
          {questions.map((question, index) =>
            (
              <li key={question.key}>
                <HexagonLabel amount={question.amount} isEarned={index < currentQuestionIndex} isCurrent={index === currentQuestionIndex} />
              </li>
            ))}
        </ul>
      </aside>
    </>
  )
}

