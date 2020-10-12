import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

import logo from "../images/liberty.png";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" fixed="top" className="Header">
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ruse walk
                    </Navbar.Brand>
                </Link>

                <Nav className="mr-auto"/>

                <NavDropdown title="Explore" id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Item href="/walk/ruse-centre">
                        Ruse centre
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/walk/old-centre">
                        Old centre
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/walk/history-museum">
                        Regional museum of History – Ruse
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/walk/sexaginta-prista">
                        Roman Fort of Sexaginta prista
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/walk/ivanovo-rock-monastery">
                        Ivanovo Rock-Hewn Churches
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/walk/youth-park">
                        Youth Park
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/walk/adeo-hotel">
                        ADEO Hotel
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        );
    }
}