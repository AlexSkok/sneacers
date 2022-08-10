import React from 'react'
import s from './Button.module.scss'

const Remove = (props) => {
  return (
    <button className={s.del_btn} onClick={props.closeCart}>
      <div></div>
    </button>
  )
}

export default Remove
