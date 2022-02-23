 import React from "react";
 import ColoredLine from "../css/hr";
 import ColoredLine1 from "../css/hr1";
 import ColoredLine2 from "../css/hr2";

const Footer =()=>{
    return(
      <div className="container-fluid font-small indigo" style={{backgroundColor:'black'}}>
        <div className="text-light p-5 " style={{fontWeight:'bolder'}}>
          TAILSBUDDY
          <ColoredLine1/> 
        </div>
        <div class="row justify-content-center">
        <div class="col-md-3 mx-md-4 ">
          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">About tailsbuddy</a>
            </li>
            <ColoredLine/>
            <li>
              <a href="#!" class="text-white">Pet Adoption</a>
            </li>
            <ColoredLine/>
            <li>
              <a href="#!" class="text-white">Pet Care Topics</a>
            </li>
            <ColoredLine/>
            <li>
              <a href="#!" class="text-white">Sitemap</a>
            </li>
            <ColoredLine/>
          </ul>
        </div>
        <ColoredLine/>
        <div class="col-md-3 mx-md-3">
          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">Primary Policy</a>
            </li>
            <ColoredLine/>
            <li>
              <a href="#!" class="text-white">About Our Ads</a>
            </li>
            <ColoredLine/>
            <li>
              <a href="#!" class="text-white">Shelter and Rescue Login</a>
            </li>
            <ColoredLine/>
          </ul>
        </div>
        <ColoredLine/>
        <div class="col-md-3 px-md-5 mx-md-3">
          <ul class="list-unstyled text-center btn-center">
            <li className="mx-auto">
              <a href="#!" class="text-white text-center">Intreger gravida dui et porta rhoncous. Nulla loareetvitaeuran in luctus. Praesent et Lacinia ante</a>
            </li>
            <li className="mx-auto">
              <button class="btn btn-outline-light m-2" style={{backgroundColor: 'black', color: 'white',padding:'1rem 6rem', borderRadius:'5rem'}}>Sing Up</button>
            </li>
            <li className="">
              <button class="btn btn-outline-light  m-2" style={{backgroundColor: 'black', color: 'white', padding:'1rem 6rem',borderRadius:'5rem'}}>Download</button>
            </li>
          </ul>
        </div> 
        </div> 
        <div className="row">
        <ColoredLine2/>
        </div>
        <div className="row">
          <p className="text-white mx-xs-auto px-md-5 mx-md-5">@2020 Tailsbuddy.com</p>
          <p className="text-center text-white mx-md-5 px-md-5">Integer gravida dui et porta rhoncus. Nulla laoreet vitae urna in luctus. Praesent et lacinia ante.</p>
        </div>
      </div>
    )
}


export default Footer;

