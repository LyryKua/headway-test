import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from './page.module.css'

export default async function Home({
  searchParams,
}: { searchParams: { earnedAmount?: string } }) {
  const { earnedAmount } = searchParams
  return (
    <main className={s.container}>
      <Image src="/hand.svg" alt="hand" width={624} height={367} />
      <div className={s.titleWrapper}>
        <div>
          <h2 className={s.total}>Total score:</h2>
          <h1 className={s.earned}>${earnedAmount ?? 0}</h1>
        </div>
        <Link href="/game">
          <Button>
            Try again
          </Button>
        </Link>
      </div>
    </main>
  )
}
