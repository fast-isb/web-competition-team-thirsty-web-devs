import OrganizatonNavbar from './OrganizationNav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../orghome.css'

export default function OrgHome() {

  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');


  const handletitleSearch = (event) => {
    setTitle(event.target.value);

  };

  var filteredJobs = null;


  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.post('http://localhost:3001/org/alljobs', { email: 'kazimasif2020@gmail.com' })
      setJobs(response.data);
    };
    fetchJobs();
  }, []);


  if (title != '') {
    filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  const handleSearch = (e) => {
    setTitle(title)
  }


  return (
    <div>
      <OrganizatonNavbar></OrganizatonNavbar>
      <h1>Job Opportunities</h1>
      <input type="text" placeholder="Search by job title" value={title} onChange={handletitleSearch} />
      <button onClick={(e) => { handleSearch() }}>Search</button>
      <ul className='job-list'>
        {filteredJobs == null ?
          jobs.map((job) => (
            <li key={job._id}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p>{job.location}</p>
            </li>
          )) :
          filteredJobs.map((job) => (
            <li key={job._id}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p>{job.location}</p>
            </li>
          ))
        }

      </ul>
    </div>
  )
}