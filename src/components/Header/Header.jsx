import React from 'react'
import logo from '../../assets/svg/logo_img.svg'
import cart from '../../assets/svg/header/cart.svg'
import user from '../../assets/svg/header/user.svg'
import favorite from '../../assets/svg/favorite.png'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
import AppContext from '../../context'

const Header = (props) => {
  const { summ } = React.useContext(AppContext)

  return (
    <header className={s.header}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={s.headerLeft}>
          <img src={logo} className={s.header_logo} alt="logo" />
          <div className={s.headerInfo}>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className={s.headerRight}>
        <li>
          <img
            src={cart}
            alt="cart"
            style={{ cursor: 'pointer' }}
            onClick={props.onClickCart}
          />
          <span>{summ} грн.</span>
        </li>
        <Link to="/fav">
          <li>
            <img src={favorite} alt="favorite" />
          </li>
        </Link>
        <Link to="/userpage">
          <li>
            <img src={user} alt="user" />
          </li>
        </Link>
      </ul>
    </header>
  )
}

export default Header
