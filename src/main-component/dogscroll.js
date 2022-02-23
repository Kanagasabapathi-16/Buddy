import React, { Component } from "react";
import Slider from "react-slick";

export default class SwipeToSlide extends Component {
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
        <h2>Trending topics</h2>
        <h6 class="text-muted designation">Find Q&As for the topics below</h6>
        <Slider {...settings}>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px',  height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
            <div><img src="https://images.ctfassets.net/nx3pzsky0bc9/1jZFV48bJ4AL9T7Yy0tSba/d174954081a5aaf82af7f523b056f0cf/dog-eye.jpg" alt="DogEye"
                style={{width: '100px', height: '100px', borderRadius: '50%'}} class="img img-fluid"/>
               <figcaption class="jestify-content-center">Dog eyes</figcaption>
            </div>
        </Slider>
      </div>
        
      </>
    );
  }
}