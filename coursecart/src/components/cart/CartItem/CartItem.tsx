import React, { useState } from 'react'
import './CartItemStyles.css'
import Modal from 'react-modal'
import { customStyles } from '../../Course/CourseItem/CourseItem'

export const CartItem : React.FC<Course> = ({id, title, author, price, discountedPrice, isAddedToCart}) => {

    const[isDeletedOpen, setDeletedIsOpen] = useState(false)
    const[isWishlist, setWishlist] = useState(false)
    return (
        <div className="cart-card">
            <Modal isOpen={isDeletedOpen}
                onRequestClose={() => setDeletedIsOpen(false)}
                style={customStyles} > 
                    <div className="close-container">
                        <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setDeletedIsOpen(false)}></i> </button>
                    </div>
                    <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />Item removed form Cart successfully</p>
            </Modal>

            <Modal isOpen={isWishlist}
                onRequestClose={() => setWishlist(false)}
                style={customStyles} > 
                    <div className="close-container">
                        <button className="close-btn"><i className='fa fa-close fa-3x' onClick={() => setWishlist(false)}></i> </button>
                    </div>
                    <p className="cm-modal"><img className="cm" src="./images/noun_tick_1611480.svg" alt="profile-icon" />Item added to wishlist successfully</p>
            </Modal>

            <div className="cart-image-container">
                <img className="cart-course-img"></img>
                <div className="cart-course-info">
                    <span>{title}</span>
                    <span className="author">{author}</span> 
                </div>
            </div>

            <div className="price">
                <button onClick={() => setWishlist(true)} className="wishlist-btn-cm-text">Move to Wishlist</button>
                <span className="course-price">{price}</span>
                <button onClick={() => setDeletedIsOpen(true)}  className="delete-icon"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>

        </div>
    )
}
