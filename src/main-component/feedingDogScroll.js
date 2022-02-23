import React, { Component } from "react";
import Slider from "react-slick";

export default class FeedingDogScroll extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <>
      <div className="container">
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-row profile pt-1 ">
                <div class=" flex-column pl-2">
                    <div class="name" style={{fontSize: '1.4rem', fontWeight:'bolder'}}>Deworming related articles</div>
                    <p class="text-muted designation h6">Learn more about deworming in animals</p>
                </div>
            </div>
            
                <button class="btn btn-xs bg-warning">
                    <p class='' style={{fontSize:'1.5rem', color:'white'}}>View</p>
                </button>
        
    </div>
        <Slider {...settings}>
        <div class="card ">
            <img src="https://s36700.pcdn.co/wp-content/uploads/2017/10/A-hungry-dog-looking-up-near-his-food-and-water-bowl-600x400.jpg.optimal.jpg" 
                    alt="grl" class="w-100 p-2 "/>
            <div class="card-body">
                <div class="pl-2">
                  <p class="card-text text-muted designation h5">Best diet to deworm your small dogs in summer season</p>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row profile pt-1 mt-auto">
                    <div class=" flex-column pl-2">
                      <div class="name card-text" style={{fontSize: '1rem'}}>Dog deworming</div>
                    </div>
                  </div>
                </div>
                <div class="card-text text-right d-flex pl-2 text-info" style={{fontSize: '1rem', fontWeight: 'bolder'}}>Learn more</div>
            </div>
          </div>

          <div class="card ">
            <img src="https://s36700.pcdn.co/wp-content/uploads/2017/10/A-hungry-dog-looking-up-near-his-food-and-water-bowl-600x400.jpg.optimal.jpg" 
                    alt="grl" class="w-100 p-2 "/>
            <div class="card-body">
                <div class="pl-2">
                  <p class="card-text text-muted designation h5">Best diet to deworm your small dogs in summer season</p>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row profile pt-1 mt-auto">
                    <div class=" flex-column pl-2">
                      <div class="name card-text" style={{fontSize: '1rem'}}>Dog deworming</div>
                    </div>
                  </div>
                </div>
                <div class="name d-flex pl-2 text-info" style={{fontSize: '1rem', fontWeight: 'bolder'}}>Learn more</div>
            </div>
          </div>

          <div class="card ">
            <img src="https://s36700.pcdn.co/wp-content/uploads/2017/10/A-hungry-dog-looking-up-near-his-food-and-water-bowl-600x400.jpg.optimal.jpg" 
                    alt="grl" class="w-100 p-2 "/>
            <div class="card-body">
                <div class="pl-2">
                  <p class="card-text text-muted designation h5">Best diet to deworm your small dogs in summer season</p>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row profile pt-1 mt-auto">
                    <div class=" flex-column pl-2">
                      <div class="card-text name" style={{fontSize: '1rem'}}>Dog deworming</div>
                    </div>
                  </div>
                </div>
                <div class="name d-flex pl-2 text-info" style={{fontSize: '1rem', fontWeight: 'bolder'}}>Learn more</div>
            </div>
          </div>
          
        </Slider>
      </div>
        
      </>
    );
  }
}