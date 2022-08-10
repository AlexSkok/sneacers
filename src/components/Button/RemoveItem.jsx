import React from 'react'
import s from './Button.module.scss'

const RemoveItem = (props) => {
  return (
    <button
      className={s.del_btn}
      onClick={() => props.onRemoveCartItem(props.item.id)}
    >
      <div></div>
    </button>
  )
}

export default RemoveItem
