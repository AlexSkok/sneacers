import React from 'react'
import CompleteCard from './CompleteCard'
import s from '../Content/Content.module.scss'
import axios from 'axios'
import ContentLoader from 'react-content-loader'

const Complete = () => {
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    async function fetchComplete() {
      try {
        const { data } = await axios.get(
          'https://62aee286b735b6d16a48a4d3.mockapi.io/complete',
        )
        setOrders(data.reduce((prev, obj) => [...prev, obj], []))
        setIsLoading(false)
      } catch (error) {
        alert('Не удалось открыть Моис покупки')
      }
    }
    fetchComplete()
  }, [])

  return (
    <div className="wrapper">
      <h2>Мои заказы</h2>
      {isLoading ? (
        <div className={s.content_box}>
          {[...Array(10)].map((e, key) => (
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
          ))}
        </div>
      ) : orders.length ? (
        <>
          {orders.map((elem, id) => (
            <div key={id}>
              <h3>Заказ #{elem.id}</h3>
              <div className={s.content_box}>
                {elem.items.map((item, key) => (
                  <div key={key}>
                    <CompleteCard key={key} item={item} isLoading={isLoading} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <h2>Покупок пока что нет:(</h2>
      )}
    </div>
  )
}

export default Complete
