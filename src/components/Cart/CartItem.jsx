import React from 'react'
import RemoveItem from '../Button/RemoveItem'
import s from './Cart.module.scss'

const CartItem = ({ item, onRemoveCartItem }) => {
  return (
    <div className={s.cart_item}>
      <img src={item.image} alt="cart_image" />
      <div>
        <p>{item.title}</p>
        <b>{item.price}грн.</b>
      </div>
      <RemoveItem item={item} onRemoveCartItem={onRemoveCartItem} />
    </div>
  )
}

export default CartItem
