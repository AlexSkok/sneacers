import React from 'react'
import Cart from './components/Cart/Cart.jsx'
import Header from './components/Header/Header'
import axios from 'axios'
import Home from './components/Home.jsx'
import { Route, Routes } from 'react-router'
import Favorite from './components/Favorite/Favorite.jsx'
import AppContext from './context.js'
import Complete from './components/OrderPage/Complete.jsx'

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [favItems, setFavItems] = React.useState([])
  const [content, setContent] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  // all fetch====================================
  React.useEffect(() => {
    // fetch('https://62aee286b735b6d16a48a4d3.mockapi.io/components')
    //   .then((resp) => resp.json())
    //   .then((e) => setContent(e))
    async function fethData() {
      // setIsLoading(true)
      try {
        const cartResp = await axios.get(
          'https://62aee286b735b6d16a48a4d3.mockapi.io/cart',
        )

        const contentRsp = await axios.get(
          'https://62aee286b735b6d16a48a4d3.mockapi.io/components',
        )
        const favoriteResp = await axios.get(
          'https://62aee286b735b6d16a48a4d3.mockapi.io/fav',
        )

        setIsLoading(false)
        setCartItems(cartResp.data)
        setFavItems(favoriteResp.data)
        setContent(contentRsp.data)
      } catch (error) {
        alert('Не удалось загрузить приложение')
      }
    }
    fethData()

    // ============================================================
    // axios
    //   .get('https://62aee286b735b6d16a48a4d3.mockapi.io/components')
    //   .then((res) => setContent(res.data))
    // axios
    //   .get('https://62aee286b735b6d16a48a4d3.mockapi.io/cart')
    //   .then((res) => props.setCartItems(res.data))
    // axios
    //   .get('https://62aee286b735b6d16a48a4d3.mockapi.io/fav')
    //   .then((res) => props.setFavItems(res.data))
    // ==============================================================
  }, [])
  // fav items=====================================
  React.useEffect(() => {
    axios
      .get('https://62aee286b735b6d16a48a4d3.mockapi.io/fav')
      .then((res) => setFavItems(res.data))
  }, [])
  // cart open=============================
  const onClickCart = () => {
    setCartOpened(true)
  }
  // cart close=======================
  const closeCart = () => {
    setCartOpened(false)
  }
  // add to cart========================================
  const onAddToCart = async (toCart) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(toCart.id),
      )
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => item.parentId !== toCart.id),
        )
        axios.delete(
          `https://62aee286b735b6d16a48a4d3.mockapi.io/cart/${findItem.id}`,
        )
      } else {
        const { data } = await axios.post(
          'https://62aee286b735b6d16a48a4d3.mockapi.io/cart',
          toCart,
        )
        setCartItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
    }
  }
  // =========================================
  const onRemoveCartItem = async (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id)),
      )
      await axios.delete(
        `https://62aee286b735b6d16a48a4d3.mockapi.io/cart/${id}`,
      )
    } catch (error) {
      alert('Не удалось удалить с корзины')
    }
  }
  //  =====================================
  const isCartAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }
  // =====================================
  const inFavAdded = (id) => {
    return favItems.some((obj) => Number(obj.parentId) === Number(id))
  }
  // ======================================
  const summ = cartItems.reduce(
    (sum, obj) => Number(obj.price) + Number(sum),
    0,
  )
  // ====================
  return (
    <AppContext.Provider
      value={{
        cartItems,
        favItems,
        isCartAdded,
        onAddToCart,
        content,
        isLoading,
        inFavAdded,
        setCartOpened,

        summ,
      }}
    >
      (
      <Cart
        closeCart={closeCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onRemoveCartItem={onRemoveCartItem}
        cartOpened={cartOpened}
      />
      )
      <div className="wrapper">
        <Header onClickCart={onClickCart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                setCartItems={setCartItems}
                favItems={favItems}
                setFavItems={setFavItems}
              />
            }
          />
          <Route path="/fav" element={<Favorite setFavItems={setFavItems} />} />
          <Route path="/userpage" element={<Complete />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
