import React from 'react'
import './SideCartStyles.css'

export const SideCart = () => {
    return (
        <div>
             <section className = "section-cart-details">
                    <div className = "cart-header">
                        <span className="cart-title">YOUR CART DETAILS</span>
                    </div>
                    <div className="cart-body">
                        <span className="cart-empty-message">Your cart is empty right now. Please enter courser from the list</span>
                    </div>
                    <div className="cart-footer">
                        <span className="cart-value">Total Cart Value</span>
                        <span className="cart-amount">Rs 0/-</span>
                    </div>
              </section>
        </div>
    )
}
