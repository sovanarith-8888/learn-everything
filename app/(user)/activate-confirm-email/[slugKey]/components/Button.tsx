import styles from './style.module.css'

import React from 'react'
type Props = {
  title: string;
  onClick?: ()=> void;
  className?: string;
}
const Button = ({title,onClick,className} : Props) => {
  return (
    <button className={`${className} ${styles.container}`} onClick={onClick}>
      {title} {"សូមស្វាគមន៏"}
    </button>
  )
}

export default Button