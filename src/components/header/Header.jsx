import React, { useRef, useEffect, useState } from "react"
import { Container } from "reactstrap"
import logo from "../../assets/images/res-logo.png"
import { NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { cartUiActions } from "../../store/shopping-Cart/cartUiSlice"

import "../../styles/header.css"
const nav__links = [
  {
    display: "Home",
    path: "/home"
  },
  {
    display: "All-Foods",
    path: "/foods"
  }
]
const Header = () => {
  const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu")
  const [show, setShow] = useState(false)
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  /* redux toolkit */
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  return (
    <header className={`nav ${show && "header__black"}`}>
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo} alt='' />
            <h5>Restaurant</h5>
          </div>
          {/* =========menu ======= */}
          <div className='navigation' ref={menuRef}>
            <div className='menu d-flex align-items-center gap-4'>
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ?=======nav right icons */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <span className='cart__icon' onClick={toggleCart}>
              <i class='ri-shopping-bag-line'></i>
              <span className='cart__badge'>{totalQuantity}</span>
            </span>
            <span className='user'>
         
            </span>
            <span className='mobile__menu' onClick={toggleMenu}>
              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
