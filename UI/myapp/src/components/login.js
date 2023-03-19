

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the server-side API to verify the email and password
    // If the credentials are valid, call the onLogin callback with the user's role

    const formData = {
      email: email,
      password: password,
      role: role,
    };

    if (role === 'Organization') {
      const org = await axios.post(
        'http://localhost:3001/org/getSpecificUsers',
        formData
      );
      if (org.data) {
        onLogin(role);
        navigate('/org');
      }
    } else {
      const std = await axios.post(
        'http://localhost:3001/student/getSpecificUsers',
        formData
      );
      if (std.data) {
        onLogin(role);
        navigate('/student');
      }
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
                <DropdownButton
                  id="dropdown-role"
                  title="Select role"
                  onSelect={(e) => setRole(e)}
                >
                  <Dropdown.Item eventKey="Student">
                    Student/Researcher
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Organization">
                    Organization
                  </Dropdown.Item>
                </DropdownButton>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
            <Button>
              <Link to="/">SignUp</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;



const SignupPage = ({ onSignup }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        // Call the server-side API to create a new user with the email, password, and role
        // If the signup is successful, call the onSignup callback with the user's role

        const formData={
            name:name,
            email: email,
            password: password,
            role:role,
          }

        if(role=='Organization'){
            await axios.post('http://localhost:3001/org/addorg',formData)
            onSignup(role);
           }
           else{
             await axios.post('http://localhost:3001/student/addStudent',formData)
             onSignup(role);
           }


        
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-center mb-4">Signup</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicRole">
                                <Form.Label>
                                    Role
                                </Form.Label>
                                <DropdownButton id="dropdown-role" title="Select role" onSelect={(e) => setRole(e)}>
                                    <Dropdown.Item eventKey="Student">Student/Researcher</Dropdown.Item>
                                    <Dropdown.Item eventKey="Organization">Organization</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Signup
                            </Button>
                            
                        </Form>
                        <Button><Link to="/login">Login</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

const LoginPageContainer = () => {
    const handleLogin = (role) => {
        console.log(`Logged in as ${ role }`);

        // const navigate = useNavigate()
        
        // Display the respective page based on the user's role
        if(role=='Organization'){
           }
           else if(role=='Student'){
           }
       
    };

    return <LoginPage onLogin={handleLogin} />;
};

const SignupPageContainer = () => {
    const handleSignup = (role) => {
        // Display the respective page based on the user's role
        
        console.log(`Signed up as ${ role }`);
    };

    return <SignupPage onSignup={handleSignup} />;
};

export { LoginPageContainer, SignupPageContainer };





