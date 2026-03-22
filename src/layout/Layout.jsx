import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

import "./Layout.scss";

export default class Layout extends React.Component {

    isEmbedded() {
        const params = new URLSearchParams(window.location.search);
        return params.get("embed") === "1";
    }

    render() {
        if (this.isEmbedded()) {
            return (
                <div className="embedded">
                    {this.props.children}
                </div>
            );
        }

        return (
            <div className="Layout">
                <Header/>
                <Container fluid className="LayoutContent">
                    {this.props.children}
                </Container>
                <Footer/>
            </div>
        );
    }
}
