// import Header from "../components/Header";
// import FrameComponent from "../components/FrameComponent";

import Header from "./Header";
import FrameComponent from "./FrameComponent";
import "./CSS/global.css";

import { useCallback, useState , useEffect } from "react";


// import "./CSS/AboutSimpleFooter.css";
import '../AboutPage/CSS/AboutSimpleFooter.css';
import AboutPic from '../../Images/akash1.png';

const AboutSimpleFooter = () => {

  const [adminData, setadminData] = useState([]);

  // Step 1: Get the value from localStorage
const userString = localStorage.getItem("user");

// Step 2: Parse the JSON string to an object
const userObject = JSON.parse(userString);

// Step 3: Access the 'name' property
// const name = userObject.name;
// const adminId = userObject._id;


  const chk = () => {
    console.log(adminData);
  }

useEffect(() => {
  fetch(`/getadmindata/${userObject._id}`, {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
})
    .then((res) => res.json())
    .then((result) => {
      setadminData(result);
        // setPosts(result)
        console.log(adminData);
    });
 
}, []);







  return (
    <div className="about-simple-footer">
      <Header />
      <main className="about-simple-footer-inner">
        <section className="frame-parent1">
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="title-parent">
                <h1 className="title">About me</h1>
                <div className="text">
                  {adminData.aboutme}
                </div>
                <button className="button-primary">
                  <div className="text1">Resume</div>
                </button>
              </div>
            </div>
            <div className="bg-2">
              <div className="bg-2-child" />
              <img
                className="pexels-artem-beliaikin-1832323-icon"
                loading="lazy"
                alt=""
                src={adminData.Photo}
              />
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default AboutSimpleFooter;