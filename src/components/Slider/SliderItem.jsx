import React from 'react'
import s from './Slider.module.scss'

const SliderItem = ({ item }) => {
  return (
    <div className={s.slider_item}>
      <span className={s.slider_logo}>
        <img src={item.logo} alt="logo_slider" />
      </span>
      <div className={s.slider_infobox}>
        <div className={s.slider_title}>
          <p>
            <span>{item.title_name}</span>,
          </p>
          <h3>{item.title}</h3>
        </div>
        <button className={s.slider_btn}>Купить</button>
      </div>
    </div>
  )
}

export default SliderItem
