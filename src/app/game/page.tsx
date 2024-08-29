import { Game } from '@/components/Game/Game'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { QuestionsProvider } from '@/contexts/QuestionsContext/QuestionsProvider'
import { promises as fs } from 'fs'
import { Question } from '@/domain/types'
import React from 'react'
import s from './page.module.css'

export default async function Home() {
  const data = await fs.readFile(process.cwd() + '/questions.json', 'utf8') // todo: it could go wrong in many ways. add error handling
  const { questions } = JSON.parse(data) as { questions: Question[] } // todo: add type guard

  return (
    <div className={s.container}>
      <QuestionsProvider questions={questions}>
        <Game />
        <Sidebar />
      </QuestionsProvider>
    </div>
  )
}
