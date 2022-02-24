import React, { Component } from "react";
import Slider from "react-slick";

export default class DoctorScroll extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 6,
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
        <h2>Superstars this week</h2>
        <h4 class="text-muted designation">Top users who helped others by answering their questions</h4>
        <Slider {...settings}>
        <div className="px-sm-2" >
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px',borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        </Slider>
      </div>

      <div className="container my-3">
        <h2>Top Pet Parents</h2>
        <Slider {...settings}>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div><div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div><div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        <div className="px-sm-2">
          <figcaption class="jestify-content-center"><h3>Top Vets</h3></figcaption>
          <img src="https://thumbs.dreamstime.com/b/portrait-black-male-doctor-stethoscope-white-background-smiling-176051856.jpg" alt="DogEye"
           style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
          <figcaption class="jestify-content-center">Dr. Akshya Gupta</figcaption>
        </div>
        </Slider>
        </div>
        
      </>
    );
  }
}