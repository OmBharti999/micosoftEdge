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
          <Nav>
            {" "}
            <Navbar.Brand className="nav-bar">
              <Link className="nav-bar anchor" to="/home">
                {" "}
                <Nav.Link className="nav-img-span" href="#home">
                  {" "}
                  <img
                    alt=""
                    src="/favicon.png"
                    width="20"
                    height="20"
                    className="d-inline-block align-top"
                  />{" "}
                  <span id="tit">Here's what's new in Microsoft Edge </span>{" "}
                </Nav.Link>{" "}
              </Link>{" "}
            </Navbar.Brand>
            {/*  */}
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link href="#feeds">News feed</Nav.Link>
              <Nav.Link href="#Shopping">Shopping in sidebar</Nav.Link>
              <Link className="nav-bar anchor" to="/activity">
                <Nav.Link href="#Shoppingactivity">Shopping activity</Nav.Link>
              </Link>
              {/* "/sidebar" */}
              <Link className="nav-bar anchor" to="/sidebar">
                {" "}
                <Nav.Link href="#sidebar">Sidebar</Nav.Link>
              </Link>{" "}
              <Link className="nav-bar anchor" to="/getStarted">
                <Nav.Link eventKey={2} href="#getStarted">
                  Get started
                </Nav.Link>
              </Link>
              <span className="search-bar">
                <input placeholder="Search the web" />
                <Button variant="dark">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Button>{" "}
              </span>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
