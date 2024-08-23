import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from './page.module.css'

export default function Home() {
  return (
    <main className={s.container}>
      <Image src="/hand.svg" alt="hand" width={624} height={367} />
      <div className={s.titleWrapper}>
        <h1>Who wants to be a millionaire</h1>
        <Link href="/game">
          <Button>
            Start
          </Button>
        </Link>
      </div>
    </main>
  )
}
