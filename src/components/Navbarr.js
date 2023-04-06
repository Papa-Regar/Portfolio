import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarr = () => {
  return (
    <div>
      <Navbar className='container-fluid' bg="white" expand="lg" style={{position:'fixed', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)'}}>
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight: 'bold', fontFamily: 'Arial'}}>Sufian.Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link href="#home-section" style={{fontWeight: 'bold'}}>Home</Nav.Link>
            <Nav.Link href="#about-section" style={{fontWeight: 'bold'}}>About</Nav.Link>
            <Nav.Link href="#projects-section" style={{fontWeight: 'bold'}}>Project</Nav.Link>
            <Nav.Link href="#contact-section" style={{fontWeight: 'bold'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr
