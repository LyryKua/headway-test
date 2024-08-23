import React, { FC } from 'react'
import s from './Achievement.module.css'

type AchievementProps = {
  title: string;
  isEarned?: boolean;
  isCurrent?: boolean;
}

const resolveClassName = (isEarned: boolean, isCurrent: boolean) => {
  if (isEarned) {
    return s.earned
  }
  if (isCurrent) {
    return s.current
  }
  return s.default
}

export const Achievement: FC<AchievementProps> = props => {
  const { title, isEarned = false, isCurrent = false } = props
  const className = resolveClassName(isEarned, isCurrent)

  return (
    <div className={className}>
      <span>{title}</span>
    </div>
  )
}
