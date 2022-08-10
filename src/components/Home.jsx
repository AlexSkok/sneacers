import React from 'react'
import Search from './Search/Search'
import SliderBox from './Slider/SliderBox'

const Home = ({ cartItems, setCartItems, setFavItems, favItems }) => {
  return (
    <div>
      <SliderBox />
      <Search
        cartItems={cartItems}
        setCartItems={setCartItems}
        setFavItems={setFavItems}
        favItems={favItems}
      />
    </div>
  )
}

export default Home
