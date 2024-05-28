import React from 'react'
import "../assets/css/navbar.css"
import Logo from '../assets/images/Logo.jpeg';
import {
  FaShoppingBag,
  FaSearch,
  FaStar,
  FaUser,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



const NavbarSec = () => {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">TeeSpace</Nav.Link>
                <Nav.Link href="#action2">Shop</Nav.Link>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action2">Pages</Nav.Link>
              <div className="nav-brand">
                <Navbar.Brand href="#">
                  <img
                    src={Logo}
                    alt="Teespace"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  TeeSpace
                </Navbar.Brand>
                </div>
              </Nav>
              <div className="icons">
              <div className="icon">
                <FaSearch />
              </div>
              <div className="icon">
                <FaUser />
              </div>
              <div className="icon">
                <FaStar />
                <span>0</span>
              </div>
              <div className="icon">
                <FaShoppingBag />
                <span>0</span>
              </div>
              </div>

              <Form className="d-flex">
                <Form.Control
                  type="form"
                  placeholder="Let's Talk"
                  className="me-2"
                  aria-label="Let,s Talk"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarSec
