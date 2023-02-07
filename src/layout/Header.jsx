import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">GET IT DONE</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/register">New User</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/toDo">My Plan</Nav.Link>  
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header