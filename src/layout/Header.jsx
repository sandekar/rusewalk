import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router";

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" fixed="top" className="Header">
                <Link to="/" className="m-2">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/liberty.png"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ruse walk
                    </Navbar.Brand>
                </Link>

                <NavDropdown title="Explore" id="basic-nav-dropdown" align="end" className="ms-auto m-2 fs-5">
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