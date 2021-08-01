import React, { useState } from 'react'
import { CoursesNav } from '../CourseNav/CoursesNav'
import './CourseInfoStyles.css'
import Modal from 'react-modal'
import { customStyles } from '../CourseItem/CourseItem'

export const CourseInfo = () => {
    const[IsCartOpen, setCartIsOpen] = useState(false)
    const[IsWishlistOpen, setWishlistIsOpen] = useState(false)
    return (
        <div>
            <CoursesNav></CoursesNav>
            <section id="courses-info">
  
            <Modal isOpen={IsCartOpen}
                onRequestClose={() => setCartIsOpen(false)}
                style={customStyles} > 
                    <div className="close-container">
                        <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setCartIsOpen(false)}></i> </button>
                    </div>
                    <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />Course Successfully added in cart.</p>
             </Modal>

             <Modal isOpen={IsWishlistOpen}
                onRequestClose={() => setWishlistIsOpen(false)}
                style={customStyles} > 
                    <div className="close-container">
                        <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setWishlistIsOpen(false)}></i> </button>
                    </div>
                    <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />Course Successfully added in Wishlist.</p>
             </Modal>

                <div className="courses-header">
                    <span className="cm-title">All Courses </span>
                     <img className="arrow-icon" src="./images/Path 20.svg" alt="arrow-icon"/> 
                     <span className="cm-course-title">  Responsive Design Course</span>
                </div>

                <div className="info-nav-left">
                    <div className="info-title">
                        <span className="course-heading"> Responsive Design Course xyz How to design responsive <br/> templates </span><br/>
                        <span className="course-description"> Responsive Design Course xyz How to design responsive templates</span>
                        <span className="course-author">Jospeth</span>
                        <div className="info-btn-container">
                            <button className="course-info-btn">React</button>
                            <button className="course-info-btn">React</button>
                            <button className="course-info-btn">React</button>
                        </div>
                    </div>
                    <div className = "info-nav-right">
                    <i className="fa fa-play-circle play-icon" ></i> 
                    </div>
                </div>

                <div className="info-container">
                    <div className="info-details">
                        <span className="info-header"> Course Details</span>
                        <span className="info"> Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes. </span>
                        <span className="info"> Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes. </span>
                        <span className="info"> Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes. </span>
                        <span className="info"> Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes. </span>
                    </div>
                    <div className="add-on">
                        <span className="price">Rs 564</span>
                        <span className="discounted-price">Rs 923</span>
                        <div className="time-left"><img className="clock-icon" src="./images/clock.svg"></img> <span className="time-text"> 8 hours left for this price</span></div>
                        <div className="container-checkout">
                             <button onClick={() => setCartIsOpen(true)}  className="add-cart-btn" ><img  src="./images/Group 66.svg"/></button>
                             <button onClick={() => setWishlistIsOpen(true)} className="wishlistbtn"> Add To Wishlist <img className="wishlisticon" src="./images/wish-list.svg"></img> </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
