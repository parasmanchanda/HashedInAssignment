import React, { createContext, useReducer, useState } from 'react'
import { ContextCourse } from '../Context/ContextCourse';
import { items } from '../Data/Course-Data'
import {reducer} from '../../../reducers/reducer'
import { CoursesNav } from '../CourseNav/CoursesNav';
import { FilterAndSearchBar } from '../../Widgets/FilterBar/FilterAndSearchBar';

export const CartContext = createContext(items);

export const initialState : Array<LoginState>= items

export interface LoginState{
    id: number,
    title : string,
    author : string,
    price : string,
    discountedPrice : string,
    isAddedToCart: boolean
}

export const CourseDetails =  () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <CartContext.Provider value={state} >
          <CoursesNav></CoursesNav>
          <FilterAndSearchBar></FilterAndSearchBar>
          <ContextCourse/>
      </CartContext.Provider>
    )
}
