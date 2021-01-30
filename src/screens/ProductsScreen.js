import React, { useState, useEffect } from 'react'
import Data from '../data/species/speciesData'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

const ProductsScreen = ({ match }) => {
  const [specieData, setSpecieData] = useState([])
  const keyword = match.params.keyword

  useEffect(() => {
    if (keyword === 'cat') {
      setSpecieData(Data[0].cat)
    } else {
      setSpecieData(Data[0].bee)
    }
  }, [keyword, specieData])

  console.log(specieData)

  return (
    <>
      <Row>
        {specieData ? (
          specieData.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        ) : (
          <h1>products not found</h1>
        )}
      </Row>
    </>
  )
}

export default ProductsScreen
