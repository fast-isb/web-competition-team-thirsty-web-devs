import React, { useState } from "react";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    // Add any other relevant fields
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server for job posting and storage
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobPostingForm;