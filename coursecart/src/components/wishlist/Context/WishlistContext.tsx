import React, { useContext } from 'react'
import { CartContext } from '../../Course/CourseDetails/CourseDetails';
import { SideCart } from '../../Widgets/SideCartDetails/SideCart'
import { WishListItem } from '../WishlistItem/WishListItem';
import './WishlistContextStyles.css'

export const WishlistContext = () => {
    const  item   = useContext(CartContext);
    return (
        <section id="wishlist-section">
            <div className="section-courses">  
                <div className="filter cm">
                    <span className="header-title">My Wishlist</span>
                    <span className = "price-filter-btn"></span>
                 </div>
                {
                    item.map((curItem) => {
                        return <>
                            <WishListItem key={curItem.id} {...curItem}></WishListItem>
                        </>
                    })
                }
            </div>
            <SideCart></SideCart>
         </section>
    )
}
