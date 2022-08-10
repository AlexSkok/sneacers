import React from 'react'
import s from './Button.module.scss'
import arrowBack from '../../assets/svg/arrow_back.svg'
import { Link } from 'react-router-dom'

const ButtonBack = () => {
  return (
    <Link to="/">
      <button className={s.btn_buy}>
        <img src={arrowBack} alt="arrow" />
        <span>Вернуться назад</span>
      </button>
    </Link>
  )
}

export default ButtonBack
