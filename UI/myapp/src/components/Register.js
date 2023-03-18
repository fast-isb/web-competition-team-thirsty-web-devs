import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
    role:"",
  });

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    
console.log(formData)

    if(formData.role=='Organization'){
     await axios.post('http://localhost:3001/org/addorg',formData)
    }
    else{
      await axios.post('http://localhost:3001/student/addStudent',formData)
    }
      
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <form onSubmit={handleSubmit} className="form">
      
      <input required
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input required
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input required
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <label>
        Role
          <select name="role" onChange={handleChange} required>
            <option value="Student">Student/Researcher</option>
            <option value="Organization">Organization</option>
          </select>
        </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;