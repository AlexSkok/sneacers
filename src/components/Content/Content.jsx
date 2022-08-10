import React from 'react'
import s from './Content.module.scss'
import Card from './Card'
import axios from 'axios'
import AppContext from '../../context'
import ContentLoader from 'react-content-loader'

const Content = (props) => {
  const { onAddToCart } = React.useContext(AppContext)
  const { content } = React.useContext(AppContext)
  const { isLoading } = React.useContext(AppContext)

  const onAddToFav = async (toFav) => {
    try {
      if (props.favItems.find((obj) => obj.parentId === toFav.id)) {
        props.setFavItems((prev) =>
          prev.filter((item) => item.parentId !== toFav.id),
        )
        axios.delete(
          `https://62aee286b735b6d16a48a4d3.mockapi.io/fav/${toFav.id}`,
        )
      } else {
        const { data } = await axios.post(
          'https://62aee286b735b6d16a48a4d3.mockapi.io/fav',
          toFav,
        )
        props.setFavItems((prev) => [...prev, data])
        // console.log(data)
      }
    } catch (error) {
      alert('Не удалось добавить в изакладки')
    }
  }

  const renderContent = () => {
    const filteredContent = content.filter((item) =>
      item.title.toLowerCase().includes(props.searchValue.toLowerCase()),
    )
    return isLoading
      ? [...Array(10)].map((e, key) => (
          <ContentLoader
            key={key}
            speed={2}
            width={150}
            height={255}
            viewBox="0 0 150 255"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            // {...props}
          >
            <rect x="0" y="150" rx="2" ry="2" width="150" height="10" />
            <rect x="0" y="116" rx="2" ry="2" width="150" height="10" />
            <rect x="0" y="0" rx="2" ry="2" width="150" height="91" />
            <rect x="118" y="186" rx="10" ry="10" width="32" height="32" />
            <rect x="10" y="195" rx="2" ry="2" width="80" height="10" />
          </ContentLoader>
        ))
      : filteredContent.map((e, key) => (
          <Card
            {...e}
            key={key}
            onClickAdd={(toCart) => onAddToCart(toCart)}
            onClickFav={(toFav) => onAddToFav(toFav)}
            loading={isLoading}
            // added={isCartAdded(e.id)}
          />
        ))
  }
  return <div className={s.content_box}>{renderContent()}</div>
}

export default Content
