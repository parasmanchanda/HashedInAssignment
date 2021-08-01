import React from 'react'
import './CourseNavStyles.css'

export const CoursesNav = () => {
    return (
		<section id="courses-header">
	        <div className="nav-left">
                <span> Discover Latest Courses on <br/> React </span>
            </div>
            <div className = "nav-right">
                <img className ="maskgroup-icon" src="./images/MaskGroup1.png" alt="maskGroup-icon" />  
            </div>
		</section>
    )
}
