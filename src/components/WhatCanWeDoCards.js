import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileUI from 'react-profile-card'
import './WhatCanWeDoCardsStyle.css'

const WhatCanWeDoCards = () => {
  return (
    <Container fluid className='developersCards'>
      <h2 style={{ textAlign: 'center', padding: '2rem' }}>
        <strong>WHAT CAN WE DO</strong>
      </h2>
      <Row>
        <Col>
          <div className='developers-cards'>
            <ProfileUI
              imgUrl='https://seeklogo.com/images/G/gmp-quality-logo-029EAE8B9B-seeklogo.com.png'
              name='Abdel rahman Abdaldeen'
              designation='computer scieince'
            />
          </div>
        </Col>
        <Col>
          <div className='developers-cards'>
            <ProfileUI
              imgUrl='https://seeklogo.com/images/G/gmp-quality-logo-029EAE8B9B-seeklogo.com.png'
              name='Diaa Jamel'
              designation='Electrical Engineer'
            />
          </div>
        </Col>

        <Col>
          <div className='developers-cards'>
            <ProfileUI
              imgUrl='https://seeklogo.com/images/G/gmp-quality-logo-029EAE8B9B-seeklogo.com.png'
              name='Sarah Al-Eswed'
              designation='mangment information system'
            />
          </div>
        </Col>

        <Col>
          <div className='developers-cards'>
            <ProfileUI
              imgUrl='https://avatars1.githubusercontent.com/u/71584075?s=460&u=8f8bc66b32c0084f0872d17b4161a4209a9aac01&v=4'
              name='Ashraf Al-Jabari'
              designation='computer scieince'
            />
          </div>
        </Col>
        <Col>
          <div className='developers-cards'>
            <ProfileUI
              imgUrl='https://avatars1.githubusercontent.com/u/71584075?s=460&u=8f8bc66b32c0084f0872d17b4161a4209a9aac01&v=4'
              name='Ashraf Al-Jabari'
              designation='computer scieince'
            />
          </div>
        </Col>
        <Col>
          <div className='developers-cards'>
            <ProfileUI
              imgUrl='https://avatars1.githubusercontent.com/u/71584075?s=460&u=8f8bc66b32c0084f0872d17b4161a4209a9aac01&v=4'
              name='Ashraf Al-Jabari'
              designation='computer scieince'
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default WhatCanWeDoCards
