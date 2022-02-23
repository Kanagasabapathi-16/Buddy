import React from "react";
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";



const Nav2 = () =>{
    return(<>
        <div className="container-fluid"> 
            <div className="row p-0" >
                <div className="col-md-8 p-0 col-6">
                <Navbar className="bg-warning" variant="dark" expand="md">
                <NavbarToggle className="ml-0 p-0" style={{fontSize:'1rem', color:'white'}} />
                <Nav className="navbar-brand">
                    <Nav.Item className="text-dark">
                        <Nav.Link href="blog" className="md-h3 md-text-primary md-mr-0   " style={{color:'white'}}>
                            TAILSBUDDY<span style={{top: '69px', fontSize:'1rem',left: '247px',width: '17px',height: '37px',transform: 'rotateY(50deg)',textAlign: 'left',font: 'normal normal bold 14px/20px Lato',letterSpacing: '0px',opacity: '1',color:' #FFFFFF'}}>.com</span></Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        <NavDropdown className="mx-3 h6" style={{color:'white'}} title= ' Home'>
                            <NavDropdown.Item style={{color:'white'}} href="blog">Home 1</NavDropdown.Item>
                            <NavDropdown.Item style={{color:'white'}} href="blog">Home 2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="mx-3 h6" style={{color:'white'}} title= ' Breads'>
                            <NavDropdown.Item style={{color:'white'}} href="blog">Dog</NavDropdown.Item>
                            <NavDropdown.Item style={{color:'white'}} href="blog">Cat</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="mx-3 h6" style={{color:'white'}} title= ' Learn'>
                            <NavDropdown.Item style={{color:'white'}} href="blog">Learn 1</NavDropdown.Item>
                            <NavDropdown.Item style={{color:'white'}} href="blog">Learn 2</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="blog " style={{color:'white'}} className="mx-3 h6">Blog</Nav.Link>
                        <Nav.Link href="blog " style={{color:'white'}} className="mx-3 h6">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                </div>
                <div className="col-md-4 col-6 p-0 bg-warning" >
                <Nav className="nav nav-navbar mt-3 mr-auto">
                    <Nav.Link href="blog" className=" btn text-center bg-white text-dark w-sm-1 ml-auto ml-lg-auto   " style={{height:"44px" ,fontSize:'1rem'}}>Download App</Nav.Link>
                    <Nav.Link href="blog" className="btn bg-white  text-warning ml-lg-auto ml-auto mr-lg-5 text-white"><i className="fa-solid fa-magnifying-glass" style={{fontSize:'1rem'}}></i></Nav.Link>
                </Nav>
                </div>
            </div>
        </div>
            <Navbar className="bg-white">
                <Nav>
                    <Nav.Link href="blog " className="mx-3 h6">Home &nbsp;<i class="fa-solid fa-angle-right"></i>  Q&As</Nav.Link>
                </Nav>
            </Navbar>
        </>
        
    )
}


export default Nav2;




/*<div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#/person/2">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/person/2">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/person/2">Link</a>
                        </li>    
                    </ul>
                </div>  */