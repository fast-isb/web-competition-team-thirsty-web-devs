import React, { useState } from "react";
import { Link } from "react-router-dom";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
    role:"",
  });

  const [role, setRole] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server for user creation and profile storage
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleroleChange = (event) => {

  setRole(event.target.value);

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
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <label>
        Role
          <select value={role} onChange={handleroleChange} required>
            <option value="Student/Researcher">Student/Researcher</option>
            <option value="Organization">Organization</option>
          </select>
        </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;