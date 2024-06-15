import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PortfolioSimpleFooter from "./Components/PortfolioSimpleFooter";
import AboutPage from "./Components/AboutPage/AboutSimpleFooter"; 
import AddProjects from './Components/AddProjects/AddProjects';
import AddLogo from './Components/AddProjects/AddLogo';
import ViewLogo from './Components/AddProjects/ViewLogo';

import SignUp from "./Components/AuthPage/SignUp";
import SignIn from "./Components/AuthPage/SignIn";
import UserAccessPoint from "./Components/AuthPage/UserAccessPoint";
import UserAccess from "./Components/AuthPage/UserAccess";







import BrandAdd from  './Components/AddProjects/Brand Identity/Add'
import BrandView from './Components/AddProjects/Brand Identity/View'



import AIMLAdd from './Components/AddProjects/AIML/Add'
import AIMLView from './Components/AddProjects/AIML/View'



import ProjectsAdd from './Components/AddProjects/Projects/Add'
import ViewProjects from './Components/AddProjects/Projects/View'


import UpdateData from './Components/AddProjects/Update/UpdateData'






function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<PortfolioSimpleFooter/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/addprojects" element={<AddProjects/>}></Route>

           


            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>



            <Route path="/accesspoint" element={<UserAccessPoint/>}></Route>
            <Route path="/access" element={<UserAccess/>}></Route>
            
            <Route path="/addlogo" element={<AddLogo/>}></Route>
            <Route path="/viewlogo" element={<ViewLogo/>}></Route>

            <Route path="/brandadd" element={<BrandAdd/>}></Route>
            <Route path="/brandview" element={<BrandView/>}></Route>



            <Route path="/addaiml" element={<AIMLAdd/>}></Route>
            <Route path="/viewaiml" element={<AIMLView/>}></Route>


            <Route path="/addproject" element={<ProjectsAdd/>}></Route>
            <Route path="/viewproject" element={<ViewProjects/>}></Route>


            <Route path="/updatedata" element={<UpdateData/>}></Route>

            
          </Routes>
          <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
}

export default App;
