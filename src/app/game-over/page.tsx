import Link from 'next/link'
import React from 'react'

export default async function Home({
  searchParams,
}: { searchParams: { earnedAmount?: string } }) {
  const { earnedAmount } = searchParams
  return (
    <main>
      {earnedAmount && <h1>Total score: ${earnedAmount}</h1>}
      <Link href="/game">Try again</Link>
    </main>
  )
}
