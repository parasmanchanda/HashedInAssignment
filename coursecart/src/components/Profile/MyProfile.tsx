import React, { useState } from 'react'
import { CoursesNav } from '../Course/CourseNav/CoursesNav'
import './MyProfileStyles.css'
import Modal from 'react-modal'

export const MyProfile = () => {
    const [user, setUser] = useState({fname:"Paras", dname:"Paras Manchanda", lname:"Manchanda",tarea:"I am a Programmer.", check:"Developer", radio:"Professional", info:"0-5",exp:"Java", role:"Softwaer Enginner-2" });

    function handleSubmit(e:any) {
        e.preventDefault()
    }

    let name, value;
    const handleInputs = (e:any) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height:'150px',
          width: '600px',
     
        },
      };
      
    const[modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className="profile-container">
            <CoursesNav></CoursesNav>
            <Modal isOpen={modalIsOpen}
             onRequestClose={() => setModalIsOpen(false)}
             style={customStyles} > 
                <div className="close-container">
                    <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setModalIsOpen(false)}></i> </button>
                </div>
                <p className="cm-modal"><img className="cm"   src="./images/noun_tick_1611480.svg" alt="profile-icon" />Your profile is Saved</p>
            </Modal>

            <section id="myprofile">
                <div className="profile-left">
                    <img className ="maskgroup-icon" src="./images/Mask Group 2.png" alt="maskGroup-icon" />  
                </div>
            
                <form className="my-profile-form" onSubmit={handleSubmit}>
                    <div className="form-group-info">
                        <div className="col-info">
                            <label><span className="label">Display Name</span></label>
                            <input type="text"  name="dname" value={user.dname}  placeholder="Display Name"  onChange={handleInputs} />
                        </div>
                        <div className="col-info">
                            <label><span  className="label">First Name</span></label>
                            <input type="text" name="fname" placeholder="First Name" onChange={handleInputs} value={user.fname}/>
                        </div>
                        <div className="col-info">
                            <label><span className="label">Last Name</span></label>
                            <input type="text" name="lname" placeholder="Last Name" value={user.lname} onChange={handleInputs}/>
                        </div>
                    </div>
                    
                    <div className="form-userinfo-txt-area">
                        <div>
                            <label><span className="label">About Yourself</span></label>
                            <textarea className="text-area" name="tarea" placeholder="Write something.." value={user.tarea} onChange={handleInputs}></textarea>
                        </div>
                    </div>
                
                    <div className="fg-checkbox-container">
                        <label><span className="label">Your Area of interest</span></label><br/>
                        <label className="container">Designer
                            <input type="checkbox" name="check" onChange={handleInputs} value="Designer" checked={user.check === 'Designer'}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container" >Developer
                            <input type="checkbox" name="check" onChange={handleInputs} value="Developer" checked={user.check === 'Developer'}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Project Manager
                            <input type="checkbox" name="check" onChange={handleInputs} value="Project Manager"checked={user.check === 'Project Manager'} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Sales
                            <input type="checkbox" name="check" onChange={handleInputs} value="Sales" checked={user.check === 'Professsional'}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
            
                <div className="st-container">
                        <label><span className="label">Are you a student or professional?.</span></label><br/>
                        <label className="container">Student
                            <input type="radio" name="radio" onChange={handleInputs} value="Student" checked={user.radio === 'Student'}/>
                            <span className="radio-checkmark"></span>
                        </label>
                        <label className="container">Professional
                            <input type="radio" name="radio" onChange={handleInputs} value="Professional" checked={user.radio=== 'Professional'} />
                            <span className="radio-checkmark"></span>
                        </label>
                </div>
                
                <div className="more-info-section">
                    <label><span className="label">How much of experience do you have?</span></label>
                    <div className="radio-row">
                            <label className="container">0-5
                                <input type="radio" name="info" onChange={handleInputs} value="0-5" checked={user.info === '0-5'}/>
                                <span className="radio-checkmark" ></span>
                            </label>
                            <label className="container">5-10
                                <input type="radio" name="info" onChange={handleInputs} value="5-10" checked={user.info === '5-10'}/>
                                <span className="radio-checkmark"></span>
                            </label>

                            <label className="container">10 & Above
                                <input type="radio" name="info"onChange={handleInputs} value="10 & Above" checked={user.info === '10 & Above'}/>
                                <span className="radio-checkmark" ></span>
                            </label>
                    </div>

                    <label><span className="label">What is your expertise?</span></label>
                    <div className="radio-row"  >
                            <label className="container">Java
                                <input type="radio" name="exp" onChange={handleInputs} value="Java" checked={user.exp === 'Java'} />
                                <span className="radio-checkmark"></span>
                            </label>
                            <label className="container">React
                                <input type="radio" name="exp" onChange={handleInputs} value="React" checked={user.exp === 'React'}/>
                                <span className="radio-checkmark"></span>
                            </label>

                            <label className="container">Backend
                                <input type="radio" name="exp" onChange={handleInputs} value="Backend" checked={user.exp === 'Backend'}/>
                                <span className="radio-checkmark"></span>
                            </label>
                    </div>
                    <label><span className="label">Mention your role</span></label>
                    <input className="input" type="text" id="fname" name="firstname" placeholder="Your Role" onChange={handleInputs} value={user.role}/>               
                </div>

                    <div className="btn-container">
                        <button onClick={() => setModalIsOpen(true)} className="save-button">Save</button>
                    </div>
                </form>
            </section>
        </div>
    )
}


