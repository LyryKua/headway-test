import { Achievement } from '@/components/Achievement/Achievement'
import { promises as fs } from 'fs';
import { Question } from '@/domain/types'
import React from 'react'

export default async function Home() {
  const data = await fs.readFile(process.cwd() + '/questions.json', 'utf8'); // todo: it could go wrong in many ways. add error handling
  const { questions } = JSON.parse(data) as { questions: Question[] }; // todo: add type guard

  return (
    <main>
      <Achievement title={'$1000'} isEarned={true} />
      <Achievement title={'$1000'} isEarned={false} />
      {questions.map((question, index) => (
        <div key={index}>
          {JSON.stringify(question)}
        </div>
      ))}
    </main>
  );
}
