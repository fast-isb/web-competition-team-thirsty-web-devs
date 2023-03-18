import OrganizatonNavbar from './OrganizationNav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function OrgHome(){

    const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');

  const handlelocationSearch = (event) => {
    setLocation(event.target.value);
    
  };
  const navigate = useNavigate()

  const handletitleSearch = (event) => {
    setTitle(event.target.value);
    
  };




  var filteredJobs=null;


  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.post('http://localhost:3001/org/alljobs',{email:'kazimasif2020@gmail.com'})
      setJobs(response.data);
    };
    fetchJobs();
  }, []);


    if(title!=''){
        filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(title.toLowerCase())
        );
    }
    if(location!=''){
        filteredJobs = jobs.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
        );
    }

 
  const handleSearch=(e)=>{
    setLocation(location)
    setTitle(title)
  }


    return(
        <div>
            <OrganizatonNavbar></OrganizatonNavbar>
            <h1>Job Opportunities</h1>
            <input type="text" placeholder="Search by job title" value={title} onChange={handletitleSearch} />
            <button onClick={(e)=>{handleSearch()}}>Search</button>
            <input type="text" placeholder="Search by location" value={location} onChange={handlelocationSearch} />
            <button onClick={(e)=>{handleSearch()}}>Search</button>
            <ul>
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
    )
}