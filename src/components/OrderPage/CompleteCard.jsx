import React from 'react'
import s from '../Content/Content.module.scss'

const CompleteCard = ({ item, isLoading }) => {
  return (
    <div className={s.card + ' ' + s.card_complete}>
      <img src={item.image} alt="sneacers_img" className={s.card_img} />
      <div className={s.card_title}>{item.title}</div>
      <div className={s.card_buy}>
        <div>
          <p>Цена:</p>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
  )
}

export default CompleteCard
