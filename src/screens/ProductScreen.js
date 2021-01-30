import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Data from '../data/species/speciesData'
import { SideBySideMagnifier } from 'react-image-magnifiers'

const ProductScreen = ({ match }) => {
  const id = match.params.id
  const keyword = match.params.keyword
  let item
  if (keyword === 'bee') {
    item = Data[0].bee.filter((item) => {
      return item.id === parseInt(id)
    })
  } else {
    item = Data[0].cat.filter((item) => {
      return item.id === parseInt(id)
    })
  }
  return (
    <>
      <Row className='mt-5'>
        <Col md={4}>
          <SideBySideMagnifier
            imageSrc={item[0].image}
            imageAlt={item[0].name}
            alwaysInPlace={true}
          />
        </Col>
        <Col md={8}>
          <h1>{item[0].name}</h1>
          <p>
            <strong>Composition: </strong> {item[0].composition}
          </p>
          <p>
            <strong>Indications for use: </strong> {item[0].indications_for_use}
          </p>
          <p>
            <strong>Packaging: </strong> {item[0].packaging}
          </p>
          <p>
            <strong>Withdrawal period: </strong> {item[0].withdrawal_period}
          </p>
          <p>
            <strong>Dosage: </strong> {item[0].dosage}
          </p>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
