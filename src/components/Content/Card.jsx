import React from 'react'
import s from './Content.module.scss'
import select from '../../assets/svg/select.svg'
import select_active from '../../assets/svg/select_active.svg'
import like from '../../assets/svg/heart.svg'
import like_active from '../../assets/svg/like_active.svg'
import AppContext from '../../context'

const Card = ({
  id,
  image,
  title,
  price,
  onClickAdd,
  onClickFav,
  loading = false,
}) => {
  const { isCartAdded } = React.useContext(AppContext)
  const { inFavAdded } = React.useContext(AppContext)
  const obj = { id, parentId: id, image, title, price }

  const onClickPlus = () => {
    onClickAdd(obj)
  }

  const onCLickLike = () => {
    onClickFav(obj)
  }

  return (
    <div className={s.card}>
      <>
        <div className={s.position}>
          <div className={s.card_like} onClick={onCLickLike}>
            <img src={inFavAdded(id) ? like_active : like} alt="like" />
          </div>
        </div>
        <img src={image} alt="sneacers_img" className={s.card_img} />
        <div className={s.card_title}>{title}</div>
        <div className={s.card_buy}>
          <div>
            <p>Цена:</p>
            <span>{price} грн.</span>
          </div>
          <div
            className={isCartAdded(id) ? s.select_active : s.card_select}
            onClick={onClickPlus}
          >
            <img src={isCartAdded(id) ? select_active : select} alt="select" />
          </div>
        </div>
      </>
    </div>
  )
}

export default Card
