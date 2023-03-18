import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function StudentNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>ScholarsHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="//student/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/student/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default StudentNavbar;