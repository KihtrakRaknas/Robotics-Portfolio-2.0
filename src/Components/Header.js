import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { LinkContainer } from 'react-router-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';


import { Parallax, Background } from 'react-parallax';
  
export default class Header extends React.Component {
    render() {
      return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="#home">Karthik's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/CAD"><Nav.Link >CAD</Nav.Link></LinkContainer>
                    <LinkContainer to="/Programming"><Nav.Link >Programming</Nav.Link></LinkContainer>
                    <LinkContainer to="/Leadership"><Nav.Link >Leadership</Nav.Link></LinkContainer>
                    <Nav.Link href="https://kihtrak.com/Portfolio/">Last year's Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  