import React from "react"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom"
import logo from "../../assets/images/res-logo.png"
import "../../styles/footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='logo footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5 className='footer__title'>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                autem adipisci incidunt perferendis amet ex
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00 -12:00</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00 -12:00</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5>Delivery Time</h5>
            <p>Subscireb our newsletter</p>
            <div className='newsletter'>
              <input type='email' placeholder='Enter your email' />
              <span>
                <i class='ri-send-plane-fill'></i>
              </span>
            </div>
          </Col>
          <Row className="mt-5">
            <Col lg='6' md='6'>
              <p className="cpr">Copyright - 2022, website made by İhlas MERT</p>
            </Col>

            <Col lg='6' md='6'>
              <div className='social__links d-flex align-items-center gap-3 justify-content-end'>
                <p>Follow:</p>
                <span>
                  <Link to=''>
                    <i class='ri-messenger-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to=''>
                    <i class='ri-messenger-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to=''>
                    <i class='ri-messenger-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to=''>
                    <i class='ri-messenger-line'></i>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
