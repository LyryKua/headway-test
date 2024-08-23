import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import s from './Button.module.css'

type Props = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'>

export const Button: FC<Props> = props => (
  <button {...props} className={s.container}>
    {props.children}
  </button>
)
