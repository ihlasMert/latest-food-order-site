import React, { useEffect, useState } from "react"
import Helmet from "../../src/components/Helmet/Helmet"
import { Container, Row, Col } from "reactstrap"
import heroImg from "../../src/assets/images/hero.png"
import "../../src/styles/home.css"
import "../../src/styles/heroSection.css"
import { Link } from "react-router-dom"
import Category from "../components/UI/category/Category"
import featureImg01 from "../../src/assets/images/service-01.png"
import featureImg02 from "../../src/assets/images/service-02.png"
import featureImg03 from "../../src/assets/images/service-03.png"
import products from "../assets/fake-data/products"
import ProductCart from "../components/UI/productCart/ProductCart"

const featureData = [
  {
    title: "Quick Delivery",
    imageUrl: featureImg01,
    desc: "lorem12dsfklnw dfwewasdpoasd avv"
  },
  {
    title: "Super Dine In",
    imageUrl: featureImg02,
    desc: "lorem12dsfklnw dfwewasdpoasd avv"
  },
  {
    title: "Easy Pick Up",
    imageUrl: featureImg03,
    desc: "lorem12dsfklnw dfwewasdpoasd avv"
  }
]

const Home = () => {
  const [category, setCategory] = useState("PIZZA")
  const [allProducts, setAllProducts] = useState(products)
  /* hot pizza */
  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza")
    const slicePizza = filteredPizza.slice(0, 3)
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      )
      setAllProducts(filteredProducts)
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      )
      setAllProducts(filteredProducts)
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      )
      setAllProducts(filteredProducts)
    }
  }, [category])

  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col lg='6' mdd='6'>
              <div className='hero__content'>
                <h5>Easy way make an order</h5>
                <h1>
                  <span>Hungry?</span> just wait food <span>at your home</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis, architecto?
                </p>
                <div className='hero__btns d-flex align-items-cente'>
                  <button className='order__btn'>Order Now</button>
                  <button className='all__foods-btn'>
                  
                  </button>
                </div>
              </div>
            </Col>
            <Col lg='6' mdd='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-4'>
              <h5 className='feature__subtitle'>What we serve</h5>
              <h2 className='feature__subtitle'>Just sit back at home</h2>
              <h2 className='feature__subtitle'>Just sit back at home</h2>
            </Col>
            {featureData.map((item, index) => (
              <Col lg='4' md='4' key={index} className='mt-5'>
                <div className='feature__item text-center p-4'>
                  <img src={item.imageUrl} alt='' className=' w-25 mb-3' />
                  <h5 className='fw-bold mb-2'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-2'>
                <button
                  className={`d-flex align-items-center justify-content-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center justify-content-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center justify-content-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg='3' md='4' key={item.id} className='mt-5'>
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
