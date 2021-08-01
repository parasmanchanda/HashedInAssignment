import React, { useContext, useState } from 'react'
import { CartContext } from '../../Course/CourseDetails/CourseDetails';
import { CourseItem, customStyles } from '../../Course/CourseItem/CourseItem';
import { CartItem } from '../CartItem/CartItem';
import './ContextCartStyles.css'
import Modal from 'react-modal'

export const ContextCart = () => {
    const  item   = useContext(CartContext);
    const[checkoutIsOpen, setCheckoutIsOpen] = useState(false)
    
    return (
        <div>
            <Modal isOpen={checkoutIsOpen}
                onRequestClose={() => setCheckoutIsOpen(false)}
                style={customStyles} > 
                    <div className="close-container">
                        <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setCheckoutIsOpen(false)}></i> </button>
                    </div>
                    <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />You have successfully placed the order.</p>
            </Modal>

          <span className="course-number">3 Courses in Cart</span>
          <section id="course-details" >
                <div className="courses">  
                    {
                        item.map((curItem) => {
                            return <>
                                { <CartItem key={curItem.id} {...curItem}></CartItem> }
                            </>
                        })
                    }
                </div>
                <div className = "cart-details">
                    <span className="cart-value">Total Cart Value</span>
                    <span className="cart-amount">Rs 1689/-</span>
                    <span className = "savings">You have saved Rs 1000/-</span>
                    <button onClick={() => setCheckoutIsOpen(true)} type="submit"><img className = "checkout-btn" src = "./images/Group 65.svg"></img></button>
                </div>
                <br/> 
             
            </section>
           
            <span className="recommend">Recommended Courses</span>     
            <div className="rec-courses">  
                    {
                        item.map((curItem) => {
                            return <>
                                { <CourseItem key={curItem.id} {...curItem}></CourseItem> }
                            </>
                        })
                    }
            </div>
        </div>
    )
}
