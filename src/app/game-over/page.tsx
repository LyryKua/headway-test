import { promises as fs } from 'fs'
import { Question } from '@/domain/types'
import Link from 'next/link'
import React from 'react'

export default async function Home() {
  const data = await fs.readFile(process.cwd() + '/questions.json', 'utf8') // todo: it could go wrong in many ways. add error handling
  const { questions } = JSON.parse(data) as { questions: Question[] } // todo: add type guard

  return (
    <main>
      <h1>Total score: Zhytomyr</h1>
      <Link href="/game">Try again</Link>
    </main>
  )
}
