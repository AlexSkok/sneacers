import React from 'react'
import SliderItem from './SliderItem'
import s from './Slider.module.scss'
import slider from '../../slider.json'
import Slider from 'react-slick/lib/slider'

const SliderBox = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }
  return (
    <div className={s.slider_box}>
      <Slider {...settings}>
        {slider.slider.map((item, key) => (
          <SliderItem key={key} item={item} />
        ))}
      </Slider>
    </div>
  )
}

export default SliderBox
