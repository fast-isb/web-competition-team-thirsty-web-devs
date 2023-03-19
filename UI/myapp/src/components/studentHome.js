import StudentNavbar from "./StudentNav";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../stdhome.css'

function StudentHome() {

  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');


  const handletitleSearch = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.post('http://localhost:3001/org/alljobs',{email:'kazimasif2020@gmail.com'})
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  
  const handleSearch=()=>{
    setTitle(title)
  }
  
  var filteredJobs=null;

  if(title!=''){
    filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  
  return (
    <>
      <StudentNavbar></StudentNavbar>
      <br />
      
      <div>
        <h1>Job Opportunities</h1>
        <input type="text" placeholder="Search by job title" value={title} onChange={handletitleSearch} />
        <button onClick={(e)=>{handleSearch()}}>Search</button>
        <ul className="job-list">
                {filteredJobs==null?
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
    </>
  );
}

export default StudentHome;
