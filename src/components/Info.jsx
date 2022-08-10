import React from 'react'
import ButtonBack from './Button/ButtonBack'
import CloseCart from './Button/CloseCart'
import s from './Cart/Cart.module.scss'

const Info = ({ title, image, description, cart }) => {
  return (
    <>
      <div className={s.cart_empty}>
        <div>
          <img src={image} alt="logo" />
          <h3>{title}</h3>
          <p>{description}</p>
          {cart ? <CloseCart /> : <ButtonBack />}
        </div>
      </div>
    </>
  )
}

export default Info
