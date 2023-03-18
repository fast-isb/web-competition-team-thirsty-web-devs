import { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css';
import StudentNavbar from "./StudentNav";

export default function StudentProfile() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [experience, setExperience] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend API
    axios.post('http://localhost:3001/student/getSpecificUsers',{email:'yash@gmail.com'})
      .then(res => {
        const student = res.data;
        setName(student.name);
        setAddress(student.address);
        setContact(student.contact);
        setEmail(student.email);
        setPassword(student.password);
        setEducation(student.education);
        setPreferences(student.preferences);
        setExperience(student.experience);
        setWishlist(student.wishlist);
        
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send updated student data to the backend API
    axios.post('http://localhost:3001/student/update', {
      name,
      address,
      contact,
      email,
      password,
      education,
      preferences,
      experience,
      wishlist,
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
<>
    <StudentNavbar></StudentNavbar>
      
    <div className='form'>
      
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input required type="text" value={name} onChange={e => setName(e.target.value)} minLength={3} />
        </label>
        <br />
        <label>
          Address:
          <input required type="text" value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Contact:
          <input required type="text" value={contact} onChange={e => setContact(e.target.value)} minLength={9} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input required type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={8} />
        </label>
        <br />
        <label>
          Education:
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                <input required type="text" value={edu.Degree} onChange={e => setEducation(prevState => {
                  const newState = [...prevState];
                  newState[index].Degree = e.target.value;
                  return newState;
                })} />
                <input required type="text" value={edu.institute} onChange={e => setEducation(prevState => {
                  const newState = [...prevState];
                  newState[index].institute = e.target.value;
                  return newState;
                })} />
                <input required type="date" value={edu.startDate} onChange={e => setEducation(prevState => {
                  const newState = [...prevState];
                  newState[index].startDate = e.target.value;
                  return newState;
                })} />
                <input required type="date" value={edu.endDate} onChange={e => setEducation(prevState => {
                  const newState = [...prevState];
                  newState[index].endDate = e.target.value;
                  return newState;
                })} />
                <button type="button" onClick={() => setEducation(prevState => {
                  const newState = [...prevState];
                  newState.splice(index, 1);
                  return newState;
                })}>Delete</button>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => setEducation(prevState => {
                const newState = [...prevState];
                newState.push({ Degree: '', institute: '', startDate: '', endDate: '' });
                return newState;
              })}>Add</button>
            </li>
          </ul>
        </label>
        <br />
        <b>Preferences:</b>
        <label>
          
          <select required multiple value={preferences} onChange={e => setPreferences(Array.from(e.target.selectedOptions, option => option.value))}>
            <option value="remote">Remote</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
          </select>
        </label>
        <br />
        <label>
          Experience:
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <input required type="text" value={exp.title} onChange={e => setExperience(prevState => {
                  const newState = [...prevState];
                  newState[index].title = e.target.value;
                  return newState;
                })} />
                <input required type="text" value={exp.company} onChange={e => setExperience(prevState => {
                  const newState = [...prevState];
                  newState[index].company = e.target.value;
                  return newState;
                })} />
                <input required type="date" value={exp.startDate} onChange={e => setExperience(prevState => {
                  const newState = [...prevState];
                  newState[index].startDate = e.target.value;
                  return newState;
                })} />
                <input required type="date" value={exp.endDate} onChange={e => setExperience(prevState => {
                  const newState = [...prevState];
                  newState[index].endDate = e.target.value;
                  return newState;
                })} />
                <button type="button" onClick={() => setExperience(prevState => {
                  const newState = [...prevState];
                  newState.splice(index, 1);
                  return newState;
                })}>Delete</button>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => setExperience(prevState => {
                const newState = [...prevState];
                newState.push({ title: '', company: '', startDate: '', endDate: '' });
                return newState;
              })}>Add</button>
            </li>
          </ul>
        </label>
        <br />
        <label>
          Wishlist:
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>
                <input required type="text" value={item} onChange={e => setWishlist(prevState => {
                  const newState = [...prevState];
                  newState[index] = e.target.value;
                  return newState;
                })} />
                <button type="button" onClick={() => setWishlist(prevState => {
                  const newState = [...prevState];
                  newState.splice(index, 1);
                  return newState;
                })}>Delete</button>
              </li>
            ))}
            {/* <li>
              <button type="button" onClick={() => setWishlist(prevState => {
                const newState = [...prevState];
                newState.push('');
                return newState;
              })}>Add</button>
            </li> */}
          </ul>
        </label>
        <br />
        <button type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}
    