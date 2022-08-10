import React from 'react'
import s from './Search.module.scss'
import searchSvg from '../../assets/svg/search.svg'
import Content from '../Content/Content'

const Search = ({ cartItems, setCartItems, setFavItems, favItems }) => {
  const [searchValue, setSearchValue] = React.useState('')
  const onSearchInput = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <div className={s.content}>
      <div className={s.content_header}>
        <h1 className={s.content_title}>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className={s.search}>
          <img src={searchSvg} alt="Search" />
          <input
            onChange={onSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <Content
        searchValue={searchValue}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setFavItems={setFavItems}
        favItems={favItems}
      />
    </div>
  )
}

export default Search
