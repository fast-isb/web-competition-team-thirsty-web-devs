import OrganizatonNavbar from './components/OrganizationNav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function(){

    const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');

  const handlelocationSearch = (event) => {
    setLocation(event.target.value);
  };

  const handletitleSearch = (event) => {
    setTitle(event.target.value);
  };

  let filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(title.toLowerCase())
  );
  filteredJobs = jobs.filter((job) =>
    job.location.toLowerCase().includes(location.toLowerCase())
  );


  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('/api/jobs'); // Replace with your backend API endpoint
      setJobs(response.data);

      filteredJobs=jobs
    };
    fetchJobs();
  }, []);


    return(
        <div>
            <h1>Job Opportunities</h1>
            <input type="text" placeholder="Search by job title" value={title} onChange={handletitleSearch} />
            <input type="text" placeholder="Search by location" value={location} onChange={handlelocationSearch} />
            <ul>
                {filteredJobs.map((job) => (
                <li key={job._id}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <p>{job.location}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}