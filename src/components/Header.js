import React from 'react'
import './Header.css';
import appLogo from '../images/PointItPoker.png';
import {Container, Row, Col, Button} from 'react-bootstrap'
import {IoIosPerson} from "react-icons/io";

function Header(props) {
    return(
        <div id={"Header"}>
            <Container>
                <Row>
                    <Col md={10}>
                        <img src={appLogo} className="rounded float-left"/>
                    </Col>
                    <Col md={2}>
                        <Container>
                            <Row className={"user-detail"}>
                                <Col md={12} className={"name login-name"}><span>Brian&nbsp;&nbsp;</span> <IoIosPerson className={"IoIosPerson"}/></Col>
                                <Button className={"user-button"} variant="secondary">Change User</Button>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Header