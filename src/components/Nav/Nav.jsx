import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";

import "./nav.css";
import { Button } from "bootstrap";

function BrandExample() {
  return (
    <>
      <Navbar bg="light" fixed="bottom" className="nav-container">
        <Container>
          <Navbar.Brand className="nav-bar" href="#home">
            <img
              alt=""
              src="/favicon.png"
              width="20"
              height="20"
              className="d-inline-block align-top"
            />{" "}
            <span id="tit">Here's what's new in Microsoft Edge </span>
          </Navbar.Brand>

          {/*  */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>

              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
              <input placeholder="Search the web" />
              <button>hi</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
