import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Nav1 from './nav-component/Nav-1';
import Nav2 from './nav-component/Nav-2';
import MainDog from './main-component/main-dog';
import MainButtons from './main-component/main-buttons';
import MainReview from './main-component/Main-review';
import Footer from './footer-component/footer';
import SwipeToSlide from './main-component/dogscroll';
import DoctorScroll from './main-component/doctroscroll';
import Search from './main-component/search';


function App() {
  return (
    <div>
      <Nav1/>
      <Nav2/>
      <MainDog/>
      <div className='my-5'>
        <SwipeToSlide/>
      </div>
      <Search/>
      <div className='my-5'>
        <DoctorScroll/>
      </div>
      <MainButtons/>
      <MainReview/>
      <Footer/>
    </div>
  );
}

export default App;
