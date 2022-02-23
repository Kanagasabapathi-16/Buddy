import React from "react";

const Search =() =>{
    return(
        <div className="container">
            <div className="row">
            <div class=" mx-auto ">
            <div class="input-group  my-1" >
                <input class="form-control border-end-0 border rounded-pill" type="search" value="search" id="example-search-input" />
                <span class="input-group-append "  >
                    <button class="btn btn-outline-secondary  bg-white border-bottom-0 border rounded-pill ms-n5" type="button" style={{position: 'absolute',right: '0'}} >
                        <i class="fa fa-search " ></i>
                    </button>
                </span>
            </div>
        </div>
            </div>
        </div>
    )
}


export default Search;