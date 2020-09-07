import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./HomePage.scss";

import centre from './thumbs/centre.jpg';
import battenberg from './thumbs/battenberg.jpg';
import history from './thumbs/history.jpg';
import sexaginta from './thumbs/sexaginta.jpg';
import ivanovo from "./thumbs/ivanovo.jpg";

export default class HomePage extends React.Component {
    render() {
        return (
            <Container className="HomePage">
                <Row>
                    <Col/>
                    <Col>
                        Information row
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    {/*Centre*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card bg="dark" className="HomePageWalkCard">
                            <Card.Img variant="top" src={centre}/>
                            <Card.Body>
                                <Card.Title>Ruse centre</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/walk/ruse-centre">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*Battenberg*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card bg="dark" className="HomePageWalkCard">
                            <Card.Img variant="top" src={battenberg}/>
                            <Card.Body>
                                <Card.Title>Old centre</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/walk/old-centre">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*History*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card bg="dark" className="HomePageWalkCard">
                            <Card.Img variant="top" src={history}/>
                            <Card.Body>
                                <Card.Title>History museum</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/walk/history-museum">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*Sexaginta*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card bg="dark" className="HomePageWalkCard">
                            <Card.Img variant="top" src={sexaginta}/>
                            <Card.Body>
                                <Card.Title>Sexaginta Prista</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/walk/sexaginta-prista">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*Ivanovo*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card bg="dark" className="HomePageWalkCard">
                            <Card.Img variant="top" src={ivanovo}/>
                            <Card.Body>
                                <Card.Title>Ivanovo rock monastery</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/walk/ivanovo-rock-monastery">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
