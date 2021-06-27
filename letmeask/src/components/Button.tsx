import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss'

// & comercial dizendo que posso passar mais de um tipo para props type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

// sentado false como default, caso outlined não seja passado como parametro
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}