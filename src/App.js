import { Route,Routes } from "react-router-dom";
import Homepage from "./route/Homepage";
import AboutPage from "./route/AboutPage";
import NavBar from "./NavBar";
import Contact from "./Contact";
import NavFooter from "./NavFooter";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./profile";
function App() {
  return (
  <Routes>
  <Route path ='/' element ={<NavFooter />} >

  <Route index element ={<Homepage />} />
  <Route path='about' element ={<AboutPage />} />
  <Route path  = 'contact' element = {<Contact />} />
   <Route path  = '/login' element = {<Login />} />
    <Route path  = '/signup' element = {<Signup />} />
    <Route path  = '/profile' element = {<Profile />} />


</Route>

   </Routes>
  );
}

export default App;
