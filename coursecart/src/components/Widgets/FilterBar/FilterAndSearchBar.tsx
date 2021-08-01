import React from 'react'
import './FilterAndSearchBarStyles.css'

export const FilterAndSearchBar = () => {
    return (
          <section id="filter-bar">

            <div className="filter">
                    <span className="header-title">All Courses</span>
                    <span className = "price-filter-btn"></span>
            </div>

            <div className="filter-search">
                <form className = "myForm" action="/action_page.php">
                    <input className = "search-filter-input" type="text" placeholder="Search"/>
                    <button className = "search-btn" type="submit"><img className = "search-icon" src = "./images/Group 35.svg"></img></button>
                </form>
            </div>

		 </section>
    )
}
