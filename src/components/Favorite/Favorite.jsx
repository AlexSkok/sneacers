import React from 'react'
import s from './Favorite.module.scss'
import emptyImg from './fav_empty.png'
import FavCard from './FavCard'
import AppContext from '../../context'
import Info from '../Info'

const Favorite = ({ setFavItems }) => {
  const { favItems } = React.useContext(AppContext)

  return (
    <div className={s.favorite}>
      <h2>Мои закладки</h2>
      {favItems.length > 0 ? (
        <div className={s.fav_box}>
          {favItems.map((elem, key) => (
            <FavCard
              key={key}
              {...elem}
              setFavItems={setFavItems}
              elem={elem}
            />
          ))}
        </div>
      ) : (
        <Info
          title="Закладок нет :("
          image={emptyImg}
          description="Вы ничего не добавляли в закладки"
        />
      )}
    </div>
  )
}

export default Favorite
