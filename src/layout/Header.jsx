import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

import logo from "../images/liberty.png";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ruse walk
                    </Navbar.Brand>
                </Link>

                <Nav className="mr-auto"/>

                <NavDropdown title="Explore" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/walk/ruse-centre">
                        Ruse centre
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/walk/battenberg-square">
                        Battenberg square
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/walk/history-museum">
                        History museum
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/walk/sexaginta-prista">
                        Sexaginta prista
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/walk/ivanovo-rock-monastery">
                        Ivanovo rock monastery
                    </NavDropdown.Item>

                </NavDropdown>

                <Nav.Link href="/">Gallery</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
            </Navbar>
        );
    }
}