import React from 'react'
import s from './Button.module.scss'
import arrowBack from '../../assets/svg/arrow_back.svg'
import AppContext from '../../context'

const CloseCart = () => {
  const { setCartOpened } = React.useContext(AppContext)

  return (
    <button className={s.btn_buy} onClick={() => setCartOpened(false)}>
      <img src={arrowBack} alt="arrow" />
      <span>Вернуться назад</span>
    </button>
  )
}

export default CloseCart
