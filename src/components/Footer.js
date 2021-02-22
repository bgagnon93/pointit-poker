import React from 'react'
import './Footer.css';
import logo from '../images/ScrumSideWebLogo.png';
import {Container, Row, Col} from 'react-bootstrap'

function Footer(props) {
    return(
        <div id={"Footer"}>
            <img src={logo}/>
        </div>
    );
}

export default Footer