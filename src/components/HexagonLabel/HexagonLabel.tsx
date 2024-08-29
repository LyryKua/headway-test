import React, { FC } from 'react'
import s from './HexagonLabel.module.css'

type Props = {
  isEarned: boolean
  isCurrent: boolean
  amount: number
}

const resolveColor = (isCurrent: boolean, isEarned: boolean) => {
  if (isCurrent) {
    return '#FF8B37'
  }
  if (isEarned) {
    return '#D0D0D8'
  }
  return '#1C1C21'
}

export const HexagonLabel: FC<Props> = ({ isEarned, amount, isCurrent }) => {
  const textColor = resolveColor(isCurrent, isEarned)
  const strokeColor = isCurrent ? '#FF8B37' : '#D0D0D8'
  const formatedAmount = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)

  return (
    <div className={s.container}>
      <svg width="376" height="40" viewBox="0 0 376 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M69 20H0" stroke={strokeColor} />
        <path d="M376 20H307" stroke={strokeColor} />
        <path d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z" fill="white" stroke={strokeColor} />
      </svg>
      <div>
        <span style={{ color: textColor }}>{formatedAmount}</span>
      </div>
    </div>
  )
}
