import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CourseItemStyles.css'
import Modal from 'react-modal'

export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height:'150px',
      width: '600px',
      zindex:1
 
    },
  };

export const CourseItem :  React.FC<Course>= ({id, title, author, price, discountedPrice, isAddedToCart}) => {
    
      
    const[IsOpen, setIsOpen] = useState(false)
    
    return (
        <div className="course-card">
           
           <Modal isOpen={IsOpen}
             onRequestClose={() => setIsOpen(false)}
             style={customStyles} > 
                <div className="close-container">
                    <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setIsOpen(false)}></i> </button>
                </div>
                <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />Course Successfully added in cart.</p>
            </Modal>

            <div className="course-image-container">
                <img className="course-img"></img>
            </div>
            <div className="course-info">
                <span>{title}</span>
                <div className="tags-container">
                    <button className = "tags-icon" type="submit">React</button>
                    <button className = "tags-icon" type="submit">React</button>
                 </div>
            </div>
                <span className="author">{author}</span> 
                <span className={"fa fa-star "+(isAddedToCart ? "checked" : "not-checked")}></span>
                <div className="pric">
                    <span className="course-price">{price}</span>
                    <span className="discounted-Price">{discountedPrice}</span>
                </div>
            <button onClick={() => setIsOpen(true)} className = "add-to-cart-btn"><span>Add to Cart</span></button>
            <button className="arrow-icon" ><Link to="/viewcourse"><img  src="./images/Path 20.svg" alt="arrow-icon"/></Link> </button>
        </div>
    )
}
