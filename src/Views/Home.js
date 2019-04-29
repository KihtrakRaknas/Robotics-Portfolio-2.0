import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Row,Col,Container,Card, Button, Carousel} from 'react-bootstrap';

import { Parallax, Background } from 'react-parallax';
  
export default class Home extends React.Component {
    render() {
      return (
          <div>

        <Parallax
            blur={4}
            bgImage={require('../images/bot.JPG')}
            bgImageAlt="the bot"
            strength={1000}

            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        opacity: `${-percentage*2 +2}`,
                        left: '50%',
                        bottom: '10%',
                        width: "50px",
                        marginLeft: `-25px`,
                        height: "50px",
                        backgroundSize: "50px",
                        backgroundImage: "url('http://clipart-library.com/images/rinrpaxqT.png')"
                    }}
                />
            )}
        >
            <div style={{ height: '100vh' }} />

            <div
                    style={{
                        position: 'absolute',

                    }}
                />
        </Parallax>

            

                    <br/>
              <h1 className = "text-center">About</h1>
        <Container>
        <Row>
            <Col sm="3">
                <img title="" src={require('../images/profile.png')} className="rounded-circle" alt="Profile pic" width="100%"/>
            </Col>
            <Col sm="9">
                <p style={{fontSize:"30px"}}>Hi! My name is <em>Karthik Sankar</em>. At the time of writing this, I am a Junior at South Brunswick High School. I'm the Team Captain of 750S. In addition, I'm also a programmer, Curriculum Team Member and webmaster for my team. Outside of robotics, I enjoy running, coding and making stuff.</p>
                <p style={{fontSize:"30px"}}>This is my Robotics Portfolio</p>
            </Col>
        </Row>
        <br/>
        </Container>
                    <Parallax
            bgImage={require('../images/teamPic.JPG')}
            strength={800}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        bottom: '0%',
                        width: percentage * 1000,
                        marginLeft: `-${percentage * 1000/2}px`,
                        height: percentage * 100,
                        display:"flex",
                        margin:"auto",
                    }}
                ><Button variant="info" style={{margin:"auto",}}>Visit Our Team Website</Button></div>
            )}
            >
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </Parallax>
            <Container>
            <p style={{fontSize:"30px"}} className="text-center">Check out the tabs!</p>
            </Container>

          </div>
      );
    }
  }
  