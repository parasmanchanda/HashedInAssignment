import React, { useReducer } from 'react'
import { reducer } from '../../reducers/reducer'
import { CartContext, initialState } from '../Course/CourseDetails/CourseDetails'
import { CoursesNav } from '../Course/CourseNav/CoursesNav'
import { ContextCart } from './Context/ContextCart'
import './ShoppingCartStyles.css'

export const ShoppingCart = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
             <CartContext.Provider value={state} >
                <CoursesNav></CoursesNav>
                <ContextCart></ContextCart>
            </CartContext.Provider>
        </div>
    )
}
