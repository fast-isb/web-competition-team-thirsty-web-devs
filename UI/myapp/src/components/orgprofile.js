import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import OrganizatonNavbar from './OrganizationNav';

const OrgProfileManagement = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tagline, setTagline] = useState('');


  useEffect( () => {
    // Fetch student data from the backend API
    
     axios.post(`http://localhost:3001/org/getSpecificUsers`,{email:'a@gmail.com'})
      .then(res => {
        const org = res.data;
        console.log(org)
        setName(org.name);
        setLocation(org.location);
        setEmail(org.email);
        setPassword(org.password);
        setTagline(org.tagline)
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  axios.post(`http://localhost:3001/org/update`, {
    name,
    location,
    email,
    password,
    tagline,
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to update the organization's profile
  }

  return (
    <div>
      <OrganizatonNavbar></OrganizatonNavbar><br/>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formTagline">
        <Form.Label>Tagline</Form.Label>
        <Form.Control type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
    </div>
  );
};

export default OrgProfileManagement;