import React from 'react';
import './App.css';
import { CourseDetails } from './components/Course/CourseDetails/CourseDetails';
import { CourseInfo } from './components/Course/CourseInfo/CourseInfo';
import { FilterAndSearchBar } from './components/Widgets/FilterBar/FilterAndSearchBar';
import { Footer } from './components/Widgets/Footer/Footer';
import Header from './components/Widgets/header/Header';
import { MyProfile } from './components/Profile/MyProfile';
import { Pagination } from './components/Widgets/Pagination';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { ShoppingCart } from './components/cart/ShoppingCart';
import { WishlistContext } from './components/wishlist/Context/WishlistContext';
import { CoursesNav } from './components/Course/CourseNav/CoursesNav';
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path = "/" component={CourseDetails}/> 
      <Route exact path = "/courses" component={CourseDetails}/>
      <Route exact path = "/profile" component={MyProfile}/>
      <Route exact path = "/cart" component={ShoppingCart}/>
      <Route exact path = "/wishlist" component={WishlistContext}/>
      <Route exact path = "/viewcourse" component={CourseInfo}/>
      <Footer></Footer>
    </Router>
  );
}

export default App;
