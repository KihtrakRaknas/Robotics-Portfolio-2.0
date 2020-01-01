import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { Parallax, Background } from 'react-parallax';

import {Row,Col,Container,Card, Button, Carousel} from 'react-bootstrap';
import CadView from './Views/CadView.js';
import Header from './Components/Header.js';
import Home from './Views/Home.js';
import Programming from './Views/Programming.js';
import Leadership from './Views/Leadership.js';
  
  class Game extends React.Component {
    render() {
      return (
        <div>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/CAD" component={CadView} />
              <Route path="/Programming" component={Programming} />
              <Route path="/Leadership" component={Leadership} />
            </Switch>
            </BrowserRouter>


            <footer style={{backgroundColor: "lightgrey", height: "150px"}}>
            <Container>
                <br/>
                <br/>
            <Row>
                <Col sm="6">
                    <p>Thanks for reading!</p>
                </Col>
                <Col sm="6">
                    <p>Contact: <a href="mailto:karthikandsankar@gmail.com">karthikandsankar@gmail.com</a></p>
                </Col>
            </Row>
            </Container>
            </footer>
          </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  