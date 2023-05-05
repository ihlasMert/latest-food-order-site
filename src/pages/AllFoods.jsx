import React, { useState } from "react"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/commonSection/CommonSection"
import { Container, Row, Col } from "reactstrap"
import products from "../assets/fake-data/products"
import ProductCart from "../components/UI/productCart/ProductCart"
import "../styles/all-foods.css"

const AllFoods = () => {
  const [searchItems, setSearchItems] = useState("")
  const [productData, setProductData] = useState(products)

  return (
    <Helmet title='All Foods'>
      <CommonSection title='All Foods' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className='search__widget d-flex align-items-center justify-between-center w-50'>
                <input
                  type='text'
                  placeholder='I am looking...'
                  className='text-end'
                  value={searchItems}
                  onChange={(e) => setSearchItems(e.target.value)}
                />
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' className='mb-5'></Col>
            {productData
              .filter((item) => {
                if (setSearchItems.value === "") return item
                if (
                  item.title.toLowerCase().includes(searchItems.toLowerCase())
                )
                  return item
              })

              .map((item) => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                  {" "}
                  <ProductCart item={item} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods
