import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  const [url, setUrl] = useState([
    { slug: 'bee', name: 'Bee' },
    { slug: 'cat', name: 'Cat' },
  ])
  return (
    <header>
      <Navbar
        expand='lg'
        style={{
          border: 'none',

          background: '#FCFCFC',
          boxShadow: '-1px 0 5px #ccc',
        }}
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <img
              alt='HVA Logo'
              src='/images/hvaLogo.png'
              className='d-inline-block align-top'
              height='70'
            />
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title='Products' id='productdropdwon'>
                <LinkContainer to='/'>
                  <NavDropdown.Item>Our Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/'>
                  <NavDropdown.Item>Products Filter</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='Species' id='productdropdwonspecies'>
                {url.map((slug, index) => (
                  <LinkContainer key={index} to={`/species/${slug.slug}`}>
                    <NavDropdown.Item>{slug.name}</NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
