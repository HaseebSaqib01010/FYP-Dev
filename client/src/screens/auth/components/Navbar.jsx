import React from "react";
import logo from "../../../assets/img/invest-logo.jpg";
import img from "../../../assets/img/invest.jpg";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-between"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link type="submit" to="/auth">
              <button type="submit" className="btn homebutton">
                Home
              </button>
            </Link>
            <Link type="submit" to="/auth/about">
              <button type="submit" className="btn homebutton">
                About
              </button>
            </Link>

            <Link type="submit" to="/auth/contact">
              <button type="submit" className="btn homebutton">
                Contact
              </button>
            </Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
