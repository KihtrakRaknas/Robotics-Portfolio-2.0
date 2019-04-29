import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Row,Col,Container,Card, Button} from 'react-bootstrap';

import { Parallax, Background } from 'react-parallax';
  
export default class Home extends React.Component {
    render() {
      return (
          <Container>
        <h1 className="text-center">Leadership</h1>

        <img src="http://www.telco-forum.ru/en/const.jpg"/>
        <p>Photos will be added shortly</p><br/>

        <h4>Maker Fair</h4>
        <p>Me and my team presented at our public library's annual Maker Fair. It was a ton of fun and we got to teach the kids how our robots worked. We let them drive our robots around and ask us questions. The goal was to peak their interest in robotics and STEM in general.</p>
        
        <img src="http://www.telco-forum.ru/en/const.jpg"/>
        <p>Photos will be added shortly</p><br/>

        <h4>Boy Scouts</h4>
        <p>I also helped to present to a Boy Scout troop. We once again talked to kids to get them excited about STEM</p>

        <img src="http://www.telco-forum.ru/en/const.jpg"/>
        <p>Photos will be added shortly</p><br/>
        <h4>Tech Storm</h4>
        <p>We were invited to demo at an event focused on. We once again talked to kids to get them excited about STEM</p>
        </Container>
      );
    }
  }
  