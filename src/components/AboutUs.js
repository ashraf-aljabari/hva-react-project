import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div>
      <Container fluid className='aboutUsContainer'>
        <Row>
          <Col className='whoWeAre'>
            <div className=' contentRow'>
              <h1>WHO WE ARE</h1>
              <p>
                Alpha-Vet Ltd. develops, manufactures and continuously improves
                portfolio of veterinary pharmaceuticals, feed supplements, pet
                food and plant nutrition products. As a result of our innovative
                investments, a GMP certificated veterinary pharma-ceutical
                factory, GMP+ cerificated feed supplements factory and a plant
                nutrion factory.{' '}
              </p>
              <button className='btn'>LEARN MORE</button>
            </div>
          </Col>
          <Col className='ourGoal'>
            {' '}
            <div className=' contentRow'>
              <h1>WHAT IS OUR GOAL</h1>
              <p>
                According to Alpha-Vet’s philosophy, we can be successful and
                effective if we support agriculture with complex solutions:
                counselling, reasonably priced and excellent quality products.
                In order to protect pets we developed excellent quality
                preservative-free pet food, which guarantees a long, happy life
                for our favourite ones.
              </p>
              <button className='btn'>LEARN MORE</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: '0' }} md={3}>
            <div className='products'>
              <div className='overproducts'>
                <div className='suboverproducts'>
                  <p>loremjk uioh uigh; </p>
                  <div className='btn btn-primary'>test</div>
                </div>
              </div>
            </div>
          </Col>
          <Col style={{ padding: '0' }} md={3}>
            <div className='products'>
              <div className='overproducts'>
                <div className='suboverproducts'>
                  <p>loremjk uioh uigh; </p>
                  <div className='btn btn-primary'>test</div>
                </div>
              </div>
            </div>
          </Col>
          <Col style={{ padding: '0' }} md={3}>
            <div className='products'>
              <div className='overproducts'>
                <div className='suboverproducts'>
                  <p>loremjk uioh uigh; </p>
                  <div className='btn btn-primary'>test</div>
                </div>
              </div>
            </div>
          </Col>
          <Col style={{ padding: '0' }} md={3}>
            <div className='products'>
              <div className='overproducts'>
                <div className='suboverproducts'>
                  <p>loremjk uioh uigh; </p>
                  <div className='btn btn-primary'>test</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
