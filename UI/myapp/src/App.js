
import './App.css';
import {BrowserRouter,Routes,Route, NavLink} from "react-router-dom";
import RegistrationForm from './components/Register';
import StudentHome from './components/studentHome';
import StudentProfile from './components/studentprofilemng';
import OrgProfileManagement from './components/orgprofile'
import AddJobScholarship from './components/addjob';
import OrgHome from './components/orgHome';
function App() {
  return (
    <div className="App">
      {/* <NavLink as={Link} to="/coverpage"><CoverPage className="html"></CoverPage></NavLink> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<RegistrationForm/>}></Route>
          <Route exact path='/org/jobpost' element={<AddJobScholarship/>}></Route>
          <Route exact path='/student' element={<StudentHome/>}></Route>
          <Route exact path='/student/profile' element={<StudentProfile/>}></Route>
          <Route exact path='/org/profile' element={<OrgProfileManagement/>}></Route>
          <Route exact path='/org' element={<OrgHome/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
