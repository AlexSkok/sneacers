import React from 'react'
import s from './Button.module.scss'
import arrow from '../../assets/svg/arrow_right.svg'

const Button = ({ onClickOrder, isLoadingCart }) => {
  return (
    <button
      className={s.btn_buy + ' ' + s.btn_complete}
      onClick={onClickOrder}
      disabled={isLoadingCart}
    >
      <span>Оформить заказ</span>
      <img src={arrow} alt="arrow" />
    </button>
  )
}

export default Button
