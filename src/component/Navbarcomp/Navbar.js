import React from "react";
import logo from "./logo.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Nav.css";

function Navbaar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img width="50px" src={logo} alt="logo" />
            Logo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbaar;
