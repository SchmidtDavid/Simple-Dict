import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Layout } from '../components/Layout'
import './NavigationBar.css';

export const NavigationBar = () => (
  <Navbar expand="lg">
    <Layout>
      <Navbar.Brand className="navbar__link">
        <Link to="/">
          Simple Dictionary
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link className="navbar__link">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="navbar__link">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="navbar__link">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Layout>
  </Navbar>
)