import React from 'react'
import s from './Favorite.module.scss'
import select from '../../assets/svg/select.svg'
import select_active from '../../assets/svg/select_active.svg'
import like_active from '../../assets/svg/like_active.svg'
import axios from 'axios'

const FavCard = ({
  id,
  image,
  title,
  price,
  onClickAdd,
  setFavItems,
  elem,
}) => {
  const [isAdded, setIsAdded] = React.useState(false)
  const onClickPlus = () => {
    onClickAdd({ id, image, title, price })
    setIsAdded(!isAdded)
  }

  const deleteFav = (id) => {
    axios.delete(`https://62aee286b735b6d16a48a4d3.mockapi.io/fav/${id}`)
    setFavItems((prev) => prev.filter((item) => item.id !== id))
  }

  // React.useEffect(() => {
  //   console.log('isAded change')
  // }, [isAdded])
  return (
    <div className={s.card}>
      <div className={s.position}>
        <div
          className={s.card_like}
          onClick={() => {
            deleteFav(elem.id)
          }}
        >
          <img src={like_active} alt="like" />
        </div>
      </div>

      <img src={image} alt="sneacers_img" className={s.card_img} />
      <div className={s.card_title}>{title}</div>
      <div className={s.card_buy}>
        <div>
          <p>Цена:</p>
          <span>{price}</span>
        </div>
        <div
          className={isAdded ? s.select_active : s.card_select}
          onClick={onClickPlus}
        >
          <img src={isAdded ? select_active : select} alt="select" />
        </div>
      </div>
    </div>
  )
}

export default FavCard
