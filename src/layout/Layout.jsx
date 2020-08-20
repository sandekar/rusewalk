import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

import "./Layout.scss";

export default class Layout extends React.Component {
    render() {
        // TODO: add top background pic of ruse, maybe several with transition
        return (
            <div className="Layout">
                <Header/>
                <Container fluid className="LayoutContent">
                    <Row>
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}