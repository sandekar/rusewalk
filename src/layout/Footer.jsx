import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import eufond from "./logos/eufond.png";
import program from "./logos/program.png";
import yatrus from "./logos/yatrus.png";
import savonia from "./logos/savonia.png";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="p-3 text-center Footer">
                <p className="m-0 FooterText" >
                    This site and its content were created in implementation of BG05M9OP001-4.003-0034-C01
                </p>
                <p className="m-0 FooterText">
                   "Virtual innovations for entrepreneurship and growth" under the procedure № BG05M9OP001-4.003 "Transnational partnerships"
                </p>
                <p className="m-0 FooterText">
                    funded by the Operational Program "Human Resources Development" 2014- 2020
                </p>
                <Container>
                    <Row>
                        <Col className="mt-3">
                            <img alt="EU fond logo" height="65" src={eufond} />
                        </Col>
                        <Col className="mt-3">
                            <img alt="Program logo" height="65" src={program} />
                        </Col>
                        <Col className="mt-3">
                            <img alt="Yatrus fondation" height="65" src={yatrus} />
                        </Col>
                        <Col className="mt-3">
                            <img alt="Savonia university" height="65" src={savonia} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}