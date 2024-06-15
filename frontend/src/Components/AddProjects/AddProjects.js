import { useEffect } from 'react';
import Header from '../../Components/Header'
import FooterIcons from './AIML/FooterIcons'
import './AddProjects.css'
import pic1 from '../../Images/2.JPG'
import pic2 from '../../Images/Capture.JPG'
import pic3 from '../../Images/lion.webp'

import aiml from '../../Images/AiMl.JPG'
import project from '../../Images/project.JPG'
import update from '../../Images/update.JPG'
import user from '../../Images/user.JPG'

import { Link , useNavigate } from 'react-router-dom'


function AddProjects() {
  const navigate = useNavigate();




  const handleSubmitaiml = (e) => {  
    navigate('/addaiml')
  }
  const handleSubmitproject = (e) => {  
    navigate('/addproject')
  }
  const handleSubmitBrand = (e) => {  
    navigate('/brandadd')
  }
  const handleSubmitupdate = (e) => {  
    navigate('/accesspoint')
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
      if(!token){
        navigate('/signin')
      }
  }, []);




  return (
    <div className='AddProjects'>
      <Header />

      <div className="ApMainBox">
          <div className="ApbtnsNBox">
              <div className="section1">
                <button onClick={handleSubmitproject}>Add Projects</button>
                <div className="AIMLBox">
                  <Link to={'/viewproject'}>
                  
                    <img src={project} alt="" />
                  </Link>
                </div>

              </div>


              <div className="section1">
                <button onClick={handleSubmitaiml}>Add ALML</button>
                <div className="AIMLBox">
                  <Link to={'/viewaiml'}>
                    <img src={aiml} alt="" />
                  </Link>
                </div>
              </div>


              <div className="section1" style={{justifyContent : "center"}}>
                <button onClick={handleSubmitupdate}>Access Point</button>
                {/* <h3>Access Point</h3> */}
                <div className="AIMLBox">
                  <Link to={'/accesspoint'}>
                    <img src={user} alt="" />
                  </Link>
                </div>
              </div>



              <div className="section1" style={{justifyContent : "center"}}>
                {/* <button onClick={handleSubmitaiml}>Update</button> */}
                <div className="AIMLBox">
                  <Link to={'/updatedata'}>
                    <img src={update} alt="" />
                  </Link>
                </div>
              </div>


             
              
          </div>
      </div>

    <div className="AP-footer">
      <FooterIcons /> 
      <br />
      <br />
      <br />
      <br />
    </div>
    </div>
  )
}

export default AddProjects