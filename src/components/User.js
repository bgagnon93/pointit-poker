import React from 'react'
import './User.css';
import {Container, Row, Col} from 'react-bootstrap'
import { IoIosPerson} from "react-icons/io";

function User(props) {
    return(
        <div className={"user"}>
            <Container>
                <Row>
                    <Col md={2}><IoIosPerson className={"IoIosPerson"}/></Col>
                    <Col md={8} className={"name"}>{props.name}</Col>
                    <Col md={2} className={"score"}></Col>
                </Row>
            </Container>
            <hr className="solid"/>
        </div>
    );
}

export default User