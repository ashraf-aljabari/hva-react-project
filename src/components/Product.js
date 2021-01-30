import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='m-3 p-3 rounded'>
      <Link to={`/product/${product.slug}/${product.id}`}>
        <Card.Img height='200' src={product.image} variant='top' />
      </Link>

      <Link to={`/product/${product.slug}/${product.id}`}>
        <Card.Title style={{ textAlign: 'center' }} as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
    </Card>
  )
}

export default Product
