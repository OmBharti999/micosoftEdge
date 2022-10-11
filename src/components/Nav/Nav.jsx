import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./nav.css";
// import { Button } from "bootstrap";

function BrandExample() {
  return (
    <>
      <Navbar bg="light" fixed="bottom" className="nav-container">
        <Container className="nav-container">
          <Navbar.Brand className="nav-bar">
            <Link className="nav-bar anchor" to="/home">
              {" "}
              <img
                alt=""
                src="/favicon.png"
                width="20"
                height="20"
                className="d-inline-block align-top"
              />{" "}
              <span id="tit">Here's what's new in Microsoft Edge </span>
            </Link>
          </Navbar.Brand>

          {/*  */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-container nav-sec-text">
              <Nav.Link href="#features">News feed</Nav.Link>
              <Nav.Link href="#pricing">Shopping in sidebar</Nav.Link>
              <Nav.Link href="#features">Shopping activity</Nav.Link>

              <Nav.Link href="#deets">Sidebar</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Get started
              </Nav.Link>
              <span className="search-bar">
                <input placeholder="Search the web" />
                <Button variant="dark">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Button>{" "}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
