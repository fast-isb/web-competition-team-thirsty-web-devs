import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function OrganizatonNavbar() {
  return (
    <>
      <Navbar className='navbar' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>ScholarsHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/jobpost">Job Posting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default OrganizatonNavbar;