import React, {FC} from 'react';
import s from './Achievement.module.css'

type AchievementProps = {
  title: string;
  isEarned?: boolean;
}

export const Achievement: FC<AchievementProps> = props => {
  const { title, isEarned = false } = props;

  return (
    <div className={s.root}>
      <span>{title}</span>
    </div>
  );
}
