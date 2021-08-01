import React, { useContext, useReducer } from 'react'
import { reducer } from '../../../reducers/reducer';
import { ContextCourse } from '../../Course/Context/ContextCourse';
import { CartContext, initialState } from '../../Course/CourseDetails/CourseDetails';
import { CoursesNav } from '../../Course/CourseNav/CoursesNav';
import { WishlistContext } from '../Context/WishlistContext';
import { WishListItem } from '../WishlistItem/WishListItem';
import './MyWishlistStyles.css'

export const MyWishlist = () => {

    const  item   = useContext(CartContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
        
            <CartContext.Provider value={state} >
              <WishlistContext></WishlistContext>
            </CartContext.Provider>
        </div>
    )
}
