import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import OrganizatonNavbar from './OrganizationNav';

const AddJobScholarship = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOpportunity = { email, title, description, location, type };
    
    try {
      await axios.post('http://localhost:3001/org/addOpportunity', newOpportunity)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    } catch (error) {
      
    }
  };

  return (
    <div>
      <OrganizatonNavbar></OrganizatonNavbar>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
        required
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
        required
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
        required
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
        required
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          as="select"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="job">Job</option>
          <option value="scholarship">Scholarship</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default AddJobScholarship;