import React from 'react';
import './navbar.css'
import {Navbar} from 'react-bootstrap';

function NavBar() {
    return(
        <Navbar bg="dark" expand="lg">
            <div class="container">
                <a target="blank" href="https://www.linkedin.com/in/cmarcano7/">
                    <i className="fab fa-linkedin" size="2x"></i>
                </a>
                <a target="blank" href="https://github.com/Cmarcano7">
                    <i className="fab fa-github" size="2x"></i>
                </a>
                <a target="blank" href="https://docs.google.com/document/d/1SQInm8yXMIIEqw3XwEbXDenoQ4y5sRTdfc9G8deAXJ8/edit?usp=sharing">
                    <i className="fab fa-google-drive" size="2x"></i>
                </a>
            </div>
            <div className="menu-icon">
                
            </div>
        </Navbar>
    )
}
export default NavBar;