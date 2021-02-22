import React from 'react';

import './App.css';
import Card from "./components/Card";
import UserList from "./components/UserList";
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <div id={"Main-content"}>
                <hr className="solid"/>
                <Container>
                    <Row>
                        <Col md={8}>
                            <Container id={"poker-card-list"}>
                                <Row>
                                    <Col md={3}><Card num="1"/></Col>
                                    <Col md={3}><Card num="2"/></Col>
                                    <Col md={3}><Card num="3"/></Col>
                                    <Col md={3}><Card num="5"/></Col>
                                </Row>
                                <div>&nbsp;</div>
                                <Row>
                                    <Col md={3}><Card num="8"/></Col>
                                    <Col md={3}><Card num="13"/></Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={4}>
                            <Container id={"user-list"}>
                                <Row>
                                    <Col><UserList /></Col>

                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <hr className="solid"/>
            </div>
            <Footer/>
        </div>
        // <div className="App">
        //   <header className="App-header">
        //     <Card/>
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
