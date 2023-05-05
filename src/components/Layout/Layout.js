import React from "react"
import Header from "../header/Header"
import Footer from "../Footer/Footer"
import Routes from "../../routers/Routers"
import Carts from "../UI/cart/Carts"
import { useSelector } from "react-redux"

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible)
  return (
    <div>
      <Header />
      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default Layout