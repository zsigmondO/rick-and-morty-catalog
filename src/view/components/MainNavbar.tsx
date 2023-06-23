import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default class MainNavbar extends Component {
  render() {
    return (
      <Navbar className="bg-success">
        <Container className="justify-content-center">
          <Navbar.Brand>
            <img
              alt=""
              src="\misc\..\rick.svg"
              width="32"
              height="32"
              className="d-inline-block align-top"
            />{" "}
            Rick & Morty Catalog{" "}
            <img
              alt=""
              src="\misc\..\morty-icon.jpg"
              width="32"
              height="32"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
