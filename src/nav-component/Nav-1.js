 import React from "react";
 import { Nav,Navbar,NavDropdown } from "react-bootstrap";



const Nav1 = () =>{
    return(
            <Navbar className=" " variant="dark" style={{backgroundColor:'black'}}>
                <Nav>
                <NavDropdown className="" style={{color:"white"}} title= ' &nbsp; Delhi' >
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="blog">Place 1</NavDropdown.Item>
                    <NavDropdown.Item href="blog">Place 2</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav className="ml-auto ">
                <Nav.Link href="blog" className="ml-lg-3 h4" style={{color:"white"}}><i class="fa-brands fa-facebook"></i></Nav.Link>
                    <Nav.Link href="blog" className="ml-lg-3 h4" ><i class="fa-brands fa-instagram" style={{color:"white"}}></i></Nav.Link>
                    <Nav.Link href="blog" className="mr-lg-5 mr-3 ml-lg-3 h4 " style={{color:"red"}}><i class="fa-brands fa-youtube "></i></Nav.Link>
                    <Nav.Link href="blog" className="mx-lg-5 " style={{color:"white"}}>Login</Nav.Link>
                </Nav>
            </Navbar>
        

        //<i class="fa-brands fa-youtube"></i>
        
    //   <nav >
    //        <span className="dropdown-toggle w-50" >Delhi </span>
    //        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
    //   </nav>
    )
}

export default Nav1;  




/* <nav className="navbar navbar-expand-md navbar-warning bg-danger">
                <a href="#/person/2">Person Link</a>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon bg-light text-dark"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav ml-auto ">
                        <li>
                            <a className="nav-link" href="#/person/2">Person Link</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#/person/2">Person Link</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#/person/2">Person Link</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#/person/2">Person Link</a>
                        </li>
                    </ul>
                </div>
            </nav> */