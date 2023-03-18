
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import RegistrationForm from './components/Register';
import JobPostingForm from './components/jobpost';
import StudentNavbar from './components/StudentNav';
import OrganizatonNavbar from './components/OrganizationNav';
import StudentProfile from './components/studentprofilemng';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<RegistrationForm/>}></Route>
          <Route exact path='/jobpost' element={<JobPostingForm/>}></Route>
          <Route exact path='/student' element={<StudentNavbar/>}></Route>
          <Route exact path='/student/profile' element={<StudentProfile/>}></Route>
          <Route exact path='/org' element={<OrganizatonNavbar/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
