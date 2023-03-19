
import './App.css';
import {BrowserRouter,Routes,Route, NavLink} from "react-router-dom";
import RegistrationForm from './components/Register';
import StudentHome from './components/studentHome';
import StudentProfile from './components/studentprofilemng';
import OrgProfileManagement from './components/orgprofile'
import AddJobScholarship from './components/addjob';
import OrgHome from './components/orgHome';
// import LoginPage from './components/login';
import {LoginPageContainer,SignupPageContainer} from './components/login'
function App() {
  return (
    <div className="App">
      {/* <NavLink as={Link} to="/coverpage"><CoverPage className="html"></CoverPage></NavLink> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignupPageContainer/>}></Route>
          <Route exact path='/login' element={<LoginPageContainer/>}></Route>

          <Route exact path='/student' element={<StudentHome/>}></Route>
          <Route exact path='/student/profile' element={<StudentProfile/>}></Route>

          <Route exact path='/org' element={<OrgHome/>}></Route>
          <Route exact path='/org/profile' element={<OrgProfileManagement/>}></Route>
          <Route exact path='/org/jobpost' element={<AddJobScholarship/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
