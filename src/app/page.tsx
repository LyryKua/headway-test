import Link from 'next/link'
import React from 'react';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Who wants to be a millionaire</h1>
      <Link href="/game">Start</Link>
    </div>
  );
}
