import React from "react";
import "./Bar.css";
import { FaBullseye } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Gallery } from "../components/Gallery";
import { Pricing } from "../components/Pricing";


export const Bar = () => {
  return (
    
      <BrowserRouter>
        <Navbar expand="lg" className="fixed-top">
          <Container>
            <Navbar.Brand as={Link} to="/" className="lg">
              <FaBullseye /> Economy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className=" justify-content-end"
            >
              <Nav>
                <Nav.Link as={Link} to="/" >
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" >
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/services" >
                  Services
                </Nav.Link>
                <NavDropdown title="Dropdown"  id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/gallery">
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/pricing">
                    Pricing
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>


     


   

  );
};
