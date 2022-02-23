import React from "react"
import FeedingDogScroll from "./feedingDogScroll";


const MainReview = () =>{
    return(
        <div>
            <div class="container">
            <div class="row p-0">
                <div class="col-md-8 my-3 col-sm-12  ">
                    <div class="card  my-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row profile pt-1 mt-auto">
                                    <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                alt="grl" className="img img-fluid" style={{width: '5rem', borderRadius: '50%', display: 'inline'}}/>
                                <div class=" flex-column pl-2">
                                    <div class="name" style={{fontSize:'1rem '}}>Riddhi Nagpal</div>
                                    <p class="card-text text-muted designation" style={{fontSize: '1rem'}}>Mother of a 1 year old german shephred dogs</p>
                                    <p class="card-text designation">1h ago</p>
                                </div>
                                </div>
                                <div class="">
                                    <button class="btn bg-warning ">
                                        <i class='far fa-bell' style={{fontSize:'1rem', color:'white'}}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="m-auto">
                            <p class="card-text mx-4" style={{fontWeight: 'bold', fontSize: "15vm"}}>I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                            <p class="card-text mx-4 text-muted designation" style={{fontSize: '15vm'}}>My beagle pup is very stubborn and does not listen any commands. He marks his does not listen any ddjsk. He marks his..</p>
                        </div>
                        <div class="d-flex flex-row profile pt-1 m-4">
                            <img src="https://cdn.wallpaperdirect.com/asset/img/product/158114/tiled/sketchtwenty-3-mottled-texture-light-grey-wallpaper-tiled-158114.jpg" 
                        alt="grl" className="img img-fluid borderd" style={{width: '4rem', borderRadius: '50%', display: 'inline'}}/>
                        <div class=" flex-column pl-2">
                            <div class="name">Dr. Akshay Sole</div>
                            <p class="text-muted designation">Vet with over 10+ years of experience</p>
                        </div>
                        </div>
                        <div class="m-auto">
                        <p class="text-muted designation mx-5" style={{marginLeft: '6rem', fontSize: '15vm'}}>Beagles are usually stubborn and you need a lot of patience to train them for anything.
                            They have the habit to mark territories all the time. Take one step at a time and ...</p>
                        </div>
                            <button class="btn bg-white btn-outline-warning w-15 my-3" style= {{margin: 'auto'}} > <i class='far fa-comment-alt' style={{fontSize:'24px'}}></i> &nbsp; Shoe more</button>
                    </div>

                    <div class="card my-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row profile pt-1 mt-auto">
                                    <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                alt="grl" className="img img-fluid" style={{width: '7rem', borderRadius: '50%', display: 'inline'}}/>
                                <div class=" flex-column pl-2">
                                    <div class="name">Riddhi Nagpal</div>
                                    <p class="text-muted designation">Mother of a 1 year old german shephred dogs</p>
                                    <p class="designation">1h ago</p>
                                </div>
                                </div>
                                <div class="">
                                    <button class="btn bg-warning">
                                        <i class='far fa-bell' style={{fontSize:'1rem', color:'white'}}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="m-auto">
                            <p class="card-text mx-4" style={{fontWeight: 'bold', fontSize: '15vm'}}>I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                            <p class="card-text mx-4 text-muted designation" style={{fontSize: '15vm'}}>My beagle pup is very stubborn and does not listen any commands. He marks his does not listen any ddjsk. He marks his..</p>
                            <p class="mx-4 " style={{fontWeight: 'bolder'}}><i class='far fa-comment-alt m-2' ></i>Be the first to Answer</p>
                        </div>
                        <button class="btn bg-white btn-outline-warning my-3 w-15" style={{margin: 'auto'}} > <i class='fas fa-pen' style={{fontSize:'24px'}}></i>  &nbsp; Answer</button>
                    </div>

                    <div class="card my-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row profile pt-1 mt-auto">
                                    <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                alt="grl" className="img img-fluid" style={{width: '7rem', borderRadius: '50%', display: 'inline'}}/>
                                <div class=" flex-column pl-2">
                                    <div class="name">Riddhi Nagpal</div>
                                    <p class="text-muted designation">Mother of a 1 year old german shephred dogs</p>
                                    <p class="designation">1h ago</p>
                                </div>
                                </div>
                                <div class="">
                                    <button class="btn bg-warning">
                                        <i class='far fa-bell' style={{fontSize:'1rem', color:'white'}}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="m-auto">
                            <p class="card-text mx-4" style={{fontWeight: 'bold', fontSize: '15vm'}}>I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                            <p class="card-text mx-4 text-muted designation" style={{fontSize: '15vm'}}>My beagle pup is very stubborn and does not listen any commands. He marks his does not listen any ddjsk. He marks his..</p>
                        </div>
                        <div className="d-flex flex-row profile pt-1 mt-auto">
                        <div className="d-flex-row profile pt-1 mt-4 ml-4 mr-2">
                            <img src="https://cdn.wallpaperdirect.com/asset/img/product/158114/tiled/sketchtwenty-3-mottled-texture-light-grey-wallpaper-tiled-158114.jpg" alt="dp"
                            className="img img-fluid" style={{width: '5rem', display: 'inline'}}/>
                        </div>
                        <div className="d-flex-column profile pt-1 mt-4">
                            <img src="https://cdn.wallpaperdirect.com/asset/img/product/158114/tiled/sketchtwenty-3-mottled-texture-light-grey-wallpaper-tiled-158114.jpg" alt="dp"
                            className="img img-fluid" style={{width: '5rem', display: 'inline'}}/>
                        </div>
                        </div>
                        <div class="d-flex flex-row profile pt-1 m-4">
                            <img src="https://cdn.wallpaperdirect.com/asset/img/product/158114/tiled/sketchtwenty-3-mottled-texture-light-grey-wallpaper-tiled-158114.jpg" 
                        alt="grl" className="img img-fluid" style={{width: '4rem', borderRadius: '50%', display: 'inline'}}/>
                        <div class=" flex-column pl-2">
                            <div class="name">Dr. Akshay Sole</div>
                            <p class="text-muted designation">Vet with over 10+ years of experience</p>
                        </div>
                        </div>
                        <div class="m-auto">
                        <p class="text-muted designation mx-5" style={{marginLeft: '6rem', fontSize: '15vm'}}>Beagles are usually stubborn and you need a lot of patience to train them for anything.
                            They have the habit to mark territories all the time. Take one step at a time and ...</p>
                        </div>
                            <button class="btn bg-white btn-outline-warning w-15 my-3" style={{margin: 'auto'}} > <i class='far fa-comment-alt' style={{fontSize:'24px'}}></i> &nbsp; Shoe more</button>
                    </div>

                    <FeedingDogScroll/>


                    <div class="card my-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row profile pt-1 mt-auto">
                                    <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                alt="grl" className="img img-fluid" style={{width: '7rem', borderRadius: '50%', display: 'inline'}}/>
                                <div class=" flex-column pl-2">
                                    <div class="name">Riddhi Nagpal</div>
                                    <p class="text-muted designation">Mother of a 1 year old german shephred dogs</p>
                                    <p class="designation">1h ago</p>
                                </div>
                                </div>
                                <div class="">
                                    <button class="btn bg-warning">
                                        <i class='far fa-bell' style={{fontSize:'1rem', color:'white'}}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="m-auto">
                            <p class="card-text mx-4" style={{fontWeight: 'bold', fontSize: '15vm'}}>I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                            <p class="card-text mx-4 text-muted designation" style={{fontSize: '15vm'}}>My beagle pup is very stubborn and does not listen any commands. He marks his does not listen any ddjsk. He marks his..</p>
                        </div>
                        <div className="d-flex-row profile pt-1 m-4">
                            <img src="https://cdn.wallpaperdirect.com/asset/img/product/158114/tiled/sketchtwenty-3-mottled-texture-light-grey-wallpaper-tiled-158114.jpg" alt="dp"
                            className="img img-fluid" style={{width: '7rem', display: 'inline'}}/>
                        </div>
                        <div class="d-flex flex-row profile pt-1 m-4">
                            <img src="https://cdn.wallpaperdirect.com/asset/img/product/158114/tiled/sketchtwenty-3-mottled-texture-light-grey-wallpaper-tiled-158114.jpg" 
                        alt="grl" className="img img-fluid" style={{width: '4rem', borderRadius: '50%', display: 'inline'}}/>
                        <div class=" flex-column pl-2">
                            <div class="name">Dr. Akshay Sole</div>
                            <p class="text-muted designation">Vet with over 10+ years of experience</p>
                        </div>
                        </div>
                        <div class="m-auto">
                        <p class="text-muted designation mx-5" style={{marginLeft: '6rem', fontSize: '15vm'}}>Beagles are usually stubborn and you need a lot of patience to train them for anything.
                            They have the habit to mark territories all the time. Take one step at a time and ...</p>
                        </div>
                            <button class="btn bg-white btn-outline-warning w-15 my-3" style={{margin: 'auto'}} > <i class='far fa-comment-alt' style={{fontSize:'24px'}}></i> &nbsp; Shoe more</button>
                    </div>


                </div>
                <div class="col-md-4 my-3 col-sm-12" >
                <div class="card" style={{backgroundColor:'black'}}>
                                <div class="row ">
                                  <div class="col-8">
                                    <div class="card-body">
                                      <p class="card-text text-center"><span className="text-warning">Download the App</span>  &nbsp;<span class="text-muted">to Find the pets up for</span> <span class="text-muted" style={{fontWeight:'bolder'}}> Adoption</span></p>
                                      <button className="btn bg-warning btn-center text-white px-3" style={{borderRadius:'20px'}}>Download Now</button>
                                    </div>
                                  </div>
                                  <div class="col-4 m-auto">
                                    <img src="https://rukminim1.flixcart.com/image/416/416/k5fn3ww0/cases-covers/back-cover/r/z/u/tpm-vi-1915-u20-vi-y19-dog-dogs-619-original-imafz4hmjzrfdphq.jpeg?q=70" 
                                    class="card-img" style={{width:'3rem'}} alt="..."/>
                                    <div className="text-white my-2">
                                        <i class='fab fa-apple mx-1' style={{fontSize:'24px'}}></i>
                                        <i class="fa fa-android mx-1" style={{fontSize:'24px'}}></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                    <div class="card my-3 table-responsive">
                        <div class="m-2">
                            <h6 className="m-3" style={{fontWeight:'bolder'}}>Topics for Questions</h6>
                        </div>
                        <table class="table tabel-responsive table-border ">
                            <tbody>
                              <tr>
                                <td class="text-center" style={{backgroundColor: 'orange'}}> Toilet training</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Dogs</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Beagle</td>
                              </tr>
                              <tr>
                                <td class="text-center" style={{backgroundColor: 'orange'}}> Toilet training</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Dogs</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Beagle</td>
                              </tr>
                              <tr>
                                <td class="text-center" style={{backgroundColor: 'orange'}}> Toilet training</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Dogs</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Beagle</td>
                              </tr>
                              <tr>
                                <td class="text-center" style={{backgroundColor: 'orange'}}> Toilet training</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Dogs</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Beagle</td>
                              </tr>
                              <tr>
                                <td class="text-center" style={{backgroundColor: 'orange'}}> Toilet training</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Dogs</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Beagle</td>
                              </tr>
                              <tr>
                                <td class="text-center" style={{backgroundColor: 'orange'}}> Toilet training</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Dogs</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Beagle</td>
                              </tr>
                              <tr>
                                <td class="text-center" style={{backgroundColor: 'orange'}}> Toilet training</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Dogs</td>
                                <td class="text-center" style={{backgroundColor: 'orange'}}>Beagle</td>
                              </tr>
                              
                            </tbody>
                          </table>
                    </div>
                    <div class="list-group">
                        <a href="blog" className="bg-warning mx-auto my-5 text-center list-group-item list-group-item-action flex-column align-items-start"><p style={{color:'black', fontWeight:'bolder'}}>Trending Questions</p></a>
                         <a href="blog" class="list-group-item list-group-item-action flex-column align-items-start">
                           <p class="mb-1">Q. I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                           <small><i class='far fa-comment-alt' style={{fontSize:'15px'}}></i> &nbsp;3 Awnsers</small>
                         </a>
                         <a href="blog" class="list-group-item list-group-item-action flex-column align-items-start">
                           <p class="mb-1">Q. I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                           <small><i class='far fa-comment-alt' style={{fontSize:'15px'}}></i> &nbsp;3 Awnsers</small>
                         </a>
                         <a href="blog" class="list-group-item list-group-item-action flex-column align-items-start">
                           <p class="mb-1">Q. I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                           <small><i class='far fa-comment-alt' style={{fontSize:'15px'}}></i> &nbsp;3 Awnsers</small>
                         </a>
                         <a href="blog" class="list-group-item list-group-item-action flex-column align-items-start">
                           <p class="mb-1">Q. I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                           <small><i class='far fa-comment-alt' style={{fontSize:'15px'}}></i> &nbsp;3 Awnsers</small>
                         </a>
                         <a href="blog" class="list-group-item list-group-item-action flex-column align-items-start">
                           <p class="mb-1">Q. I am facing issues in potty training my Beagle pup who is 6 months old.</p>
                           <small><i class='far fa-comment-alt' style={{fontSize:'15px'}}></i> &nbsp;3 Awnsers</small>
                         </a>
                         <a href="blog" class="list-group-item list-group-item-action flex-column align-items-start">
                         </a>
                    </div>
                

                </div>
            </div>
            </div>
        </div>
    )
}

export default MainReview;