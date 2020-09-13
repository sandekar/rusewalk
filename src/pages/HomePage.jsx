import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import WalkText from "../components/walk-text/WalkText";

import "./HomePage.scss";

import centre from './thumbs/centre.jpg';
import battenberg from './thumbs/battenberg.jpg';
import history from './thumbs/history.jpg';
import sexaginta from './thumbs/sexaginta.jpg';
import ivanovo from "./thumbs/ivanovo.jpg";

export default class HomePage extends React.Component {
    render() {
        return (
            <Container className="HomePage" fluid>
                <Row className="mb-3">
                    <Col/>
                    <Col>
                        <h2 className="text-center">Select a walk</h2>
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    {/*Centre*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card className="HomePageWalkCard">
                            <Card.Img variant="top" src={centre}/>
                            <Card.Body>
                                <Card.Title>Ruse centre</Card.Title>
                                <Card.Text>
                                    <WalkText text="
                                        Svoboda Square, is a favorite place for the citizens, guests and
                                        tourists of Ruse. It is one of the few squares in Europe where twelve
                                        streets meet.
                                        The Monument of Freedom is in the middle of Svoboda Square; to its
                                        right position is the magnificent Profit Building - two symbols of Ruse.
                                        Five fountains and an exquisite park in the Central Square
                                        landscaped back in 1905 by the landscape architect Richard Neuwirth
                                        and the city gardener Stefan Belov shaped Ruse`s “green heart”.
                                        The first fountain of Ruse is also here. It was made by the sculptor
                                        Vladimir Vladimirov in 1926.
                                        The imposing building of Ruse Court House is in the square and
                                        close to it across the Aleksandrovska street is the House with the Clock." />
                                </Card.Text>
                                <Link to="/walk/ruse-centre">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*Battenberg*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card className="HomePageWalkCard">
                            <Card.Img variant="top" src={battenberg}/>
                            <Card.Body>
                                <Card.Title>Old centre</Card.Title>
                                <Card.Text>
                                    <WalkText text="
                                    The old city centre in earlier times was around Alexander Battenberg
                                    Square. It is surrounded by buildings that are national cultural
                                    sights: The Regional Museum of History, Hristo Botev High School,
                                    Regional Library Lyuben Karavelov, the Old Central Post Office." />
                                </Card.Text>
                                <Link to="/walk/old-centre">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*History*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card className="HomePageWalkCard">
                            <Card.Img variant="top" src={history}/>
                            <Card.Body>
                                <Card.Title>Regional museum of History – Ruse</Card.Title>
                                <Card.Text>
                                    <WalkText text="
                                    The Rousse Regional Historical Museum was established in 1904. Its basis are the
                                    archeological collections of Karel and Hermenguild Shkorpil, as well as of the
                                    naturalist Vasil Kovachev, which were gathered in the &quot;Knyaz Boris&quot; men's high
                                    school of Rousse. Nowadays, it holds approximately 140 000 items." />
                                </Card.Text>
                                <Link to="/walk/history-museum">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*Sexaginta*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card className="HomePageWalkCard">
                            <Card.Img variant="top" src={sexaginta}/>
                            <Card.Body>
                                <Card.Title>Roman Fort of Sexaginta prista</Card.Title>
                                <Card.Text>
                                    <WalkText text="
                                    Sexsaginta Prista is located in the contemporary Northwestern part of the town of Rousse,
                                    on an upland next to the riverbank of the Danube. The castle is localized at the end of
                                    the 19th century by Felix Kanitz on the ground of the distances between the fortresses,
                                    marked in the Roman route maps." />
                                </Card.Text>
                                <Link to="/walk/sexaginta-prista">
                                    <Button variant="primary">Explore</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*Ivanovo*/}
                    <Col xl={4} md={6} sm={12}>
                        <Card className="HomePageWalkCard">
                            <Card.Img variant="top" src={ivanovo}/>
                            <Card.Body>
                                <Card.Title>Ivanovo Rock-Hewn Churches</Card.Title>
                                <Card.Text>
                                    <WalkText text="
                                    The Rock-hewn Churches of Ivanovo are a group of monolithic churches, chapels and
                                    monasteries hewn out of solid rock and completely different from other monastery
                                    complexes in Bulgaria, located near the village of Ivanovo, 20 km south of Rousse.
                                    The Rock-hewn Churches of Ivanovo were included in the UNESCO World Heritage List
                                    in 1979." />
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
