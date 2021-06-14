import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import "./CSS/Style.css";

import logo from "./Images/logo.png";
import Home from "./Home";
import Products from "./Products";
import Cupons from "./Coupons";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/Home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/Products"}>
                  Manage Products
                </Nav.Link>
                <Nav.Link as={Link} to={"/Coupons"}>
                  Manage Coupons
                </Nav.Link>
                <Nav.Link as={Link} to={"/User"}>
                  Add User
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="#deets">Sign up</Nav.Link>
                <Nav.Link href="#memes">Login</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#Basket">
                  View Basket<Badge bg="secondary">9</Badge>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
