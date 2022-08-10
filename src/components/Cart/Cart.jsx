import React from 'react'
import Button from '../Button/Button'
import Remove from '../Button/Remove'
import s from './Cart.module.scss'
import CartItem from './CartItem'
import cart_empty from '../../components/Cart/cart_empty.jpg'
import Info from '../Info'
import orderComplete from '../../assets/svg/complet_order.png'
import AppContext from '../../context'
import axios from 'axios'

const Cart = ({ closeCart, onRemoveCartItem, setCartItems, cartOpened }) => {
  const { cartItems, summ } = React.useContext(AppContext)
  const [isOrderComplet, setIsOrderComplet] = React.useState(false)
  const [orderId, setOrderId] = React.useState(false)
  const [isLoadingCart, setIsLoadingCart] = React.useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoadingCart(true)
      const {
        data,
      } = await axios.post(
        'https://62aee286b735b6d16a48a4d3.mockapi.io/complete',
        { items: cartItems },
      )
      setOrderId(data.id)
      setIsOrderComplet(true)
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(
          `https://62aee286b735b6d16a48a4d3.mockapi.io/cart/${item.id}`,
        )
      }

      setCartItems([])
    } catch (error) {
      alert('Заказ нее офромлен')
    }
    setIsLoadingCart(false)
  }

  return (
    <div className={`${s.cart_outbg} + ' ' + ${cartOpened ? s.visibil : ''}`}>
      <div className={`${s.cart} + ' ' + ${cartOpened ? s.cart_open : ''}`}>
        <div className={s.cart_header}>
          <h2>Корзина</h2>
          <Remove closeCart={closeCart} />
        </div>
        {cartItems.length > 0 ? (
          <div className={s.flex}>
            <div className={s.overflow}>
              <div className={s.cart_box}>
                {cartItems.map((item, key) => (
                  <CartItem
                    key={key}
                    {...item}
                    item={item}
                    onRemoveCartItem={onRemoveCartItem}
                  />
                ))}
              </div>
            </div>

            <div className={s.full_price}>
              <div>
                <span>Итого:</span>
                <div></div>
                <b>{summ} грн.</b>
              </div>
              <div>
                <span>Налог 5%:</span>
                <div></div>
                <b>{summ * 0.05} грн.</b>
              </div>
              <Button
                onClickOrder={onClickOrder}
                isLoadingCart={isLoadingCart}
              />
            </div>
          </div>
        ) : isOrderComplet ? (
          <Info
            title="Заказ оформлен!"
            image={orderComplete}
            description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
            cart
          />
        ) : (
          <Info
            title="Корзина пустая"
            image={cart_empty}
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            cart
          />
        )}
      </div>
    </div>
  )
}

export default Cart
