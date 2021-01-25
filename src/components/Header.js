import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import Logo from '../images/hvaLogo.png'

const Header = () => {
  return (
    <header>
      <Navbar
        expand='lg'
        style={{
          border: 'none',
          position: 'fixed',
          width: '100%',
          background: '#FCFCFC',
          boxShadow: '-1px 0 5px #ccc',
        }}
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <img
              alt='HVA Logo'
              src={Logo}
              className='d-inline-block align-top'
              height='70'
            />
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title='Products' id='productdropdwon'>
                <LinkContainer to='/'>
                  <NavDropdown.Item>Our Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/'>
                  <NavDropdown.Item>Products Filter</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
