import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './WishListItemStyles.css'
import Modal from 'react-modal'
import { customStyles } from '../../Course/CourseItem/CourseItem'

export const WishListItem :  React.FC<Course>= ({id, title, author, price, discountedPrice, isAddedToCart}) => {
   
    const[wishlistAdded, setWishlistAdded] = useState(false);
    const[wishistDeleted ,setWishlistDeleted ]= useState(false);

    return (
     <div className="course-card">

        <Modal isOpen={wishlistAdded}
            onRequestClose={() => setWishlistAdded(false)}
            style={customStyles} > 
                <div className="close-container">
                    <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setWishlistAdded(false)}></i> </button>
                </div>
                <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />Item added to cart successfully</p>
        </Modal>

        <Modal isOpen={wishistDeleted}
            onRequestClose={() => setWishlistDeleted(false)}
            style={customStyles} > 
                <div className="close-container">
                    <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setWishlistDeleted(false)}></i> </button>
                </div>
                <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />Item removed form Cart successfully</p>
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
            <div className="pric">
                <span className="course-price">{price}</span>
                <span className="discounted-Price">{discountedPrice}</span>
            </div>
        <button onClick={() => setWishlistAdded(true)}  className = "add-to-cart-btn"><span>Add to Cart</span></button>
        <button onClick={() => setWishlistDeleted(true)}  className="delete-icon"><i className="fa fa-trash" aria-hidden="true"></i></button>
        <Link to="/viewcourse"><img className="arrow-icon" src="./images/Path 20.svg" alt="arrow-icon"/></Link> 
    </div>
    )
}
