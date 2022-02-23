import React from "react";

const MainButtons = () =>{
    return(
        <div class="container  ">
            <div class="row mx-5">
                <div class="col-md-8 my-2  ">
                        <div>
                            <button class="btn btn-outline-warning border-top-0 border-right-0 border-left-0 w-50" type="button" style={{fontSize:'1rem' }}>Top Question</button>
                            <button class="btn btn-outline-warning border-top-0 border-right-0 border-left-0  w-50" type="button" style={{fontSize:'1rem'}}>Recent Question</button>
                        </div>
                </div>
                <div class="col-md-4 my-2" >
                    <div class="card card-bg-pink.bg-accent-1" style={{backgroundColor: "pink"}} >
                        <div class="jestify-content-center">
                        <p class="card-title mx-auto my-3  text-center w-50 text-white  p-1" style={{backgroundColor: "black", fontSize:'0.8rem', fontWeight:'bolder'}}><i class='fas fa-pen'></i>  &nbsp; ASK A QUESTION</p>
                        </div>
                        <p className="cart-text text-center" style={{fontWeight:'bolder'}}>Get answer from vets, fellow pet parents and experts</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MainButtons;

