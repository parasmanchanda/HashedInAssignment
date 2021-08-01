import React, { useContext, useReducer, useState } from 'react'
import { items } from '../Data/Course-Data'
import { CartContext } from '../CourseDetails/CourseDetails';
import { CourseItem } from '../CourseItem/CourseItem';
import './ContextCourseStyles.css'
import { SideCart } from '../../Widgets/SideCartDetails/SideCart';

export const ContextCourse = () => {

  const  item   = useContext(CartContext);

    return (
             <section id="course-details-section">
                <div className="section-courses">  
                    {
                        item.map((curItem) => {
                            return <>
                                <CourseItem key={curItem.id} {...curItem}></CourseItem>
                            </>
                        })
                    }
                </div>
               <SideCart></SideCart>
            </section>
    )
}
