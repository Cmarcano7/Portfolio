import React from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

function NavBar() {
    return(
        <Navbar bg="dark" expand="lg">
            <div class="container">
                <a href="https://www.linkedin.com/in/cmarcano7/">
                    <i><FontAwesomeIcon icon={faLinkedin} size="2x" /></i>
                </a>
                <a href="https://github.com/Cmarcano7">
                    <i><FontAwesomeIcon icon={faGithub} size="2x" /></i>
                </a>
                <a href="https://docs.google.com/document/d/1SQInm8yXMIIEqw3XwEbXDenoQ4y5sRTdfc9G8deAXJ8/edit?usp=sharing">
                    <i><FontAwesomeIcon icon={faGoogleDrive} size="2x" /></i>
                </a>
            </div>
        </Navbar>
    )
}
export default NavBar;