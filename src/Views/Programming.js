import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Container,Card, Button} from 'react-bootstrap';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import CadModelViewer from '../Components/CadModelViewer.js'
import { LinkContainer } from 'react-router-bootstrap';
import { Parallax, Background } from 'react-parallax';

const projects = () =>           
<Container fluid>
<br/>
<Row>

<Card style={{ width: '20rem', margin:"10px"}}>
  <Card.Img variant="top" src={require('../images/favicon.ico.gif')} />
  <Card.Body>
    <Card.Title>Team Website</Card.Title>
    <Card.Text className = "desc">
      This year's team website was writen without a framework. I helped to create and mantain it.
    </Card.Text>
    <LinkContainer to="/Programming/teamSite"><Button variant="primary">View Info</Button></LinkContainer>
    <Button variant="success" style={{marginLeft:"5px"}} href="http://750s.github.io">Go</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem', margin:"10px"}}>
  <Card.Img variant="top" src="http://edayan.info/wp-content/uploads/2016/10/this-image.jpg" />
  <Card.Body>
    <Card.Title>This Website</Card.Title>
    <Card.Text className = "desc">
      This portfolio is my first time using a framework to make a website. It is made with React.
    </Card.Text>
    <LinkContainer to="/Programming/this"><Button variant="primary">View Info</Button></LinkContainer>
    <Button variant="success" style={{marginLeft:"5px"}} href="#">Go</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem', margin:"10px"}}>
  <Card.Img variant="top" src={require('../images/aimOverlay.JPG')} />
  <Card.Body>
    <Card.Title>Auto-Aiming</Card.Title>
    <Card.Text className = "desc">
      Code to automatically get our robot to aim at a target.
    </Card.Text>
    <LinkContainer to="/Programming/aimBot"><Button variant="primary">View Info</Button></LinkContainer>
  </Card.Body>
</Card>

<Card style={{ width: '20rem', margin:"10px"}}>
  <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1381/1501/products/43749248_rfr_construction_caution_tape_ci_grande.jpg?v=1468450750" />
  <Card.Body>
    <Card.Title>More to come</Card.Title>
    <Card.Text className = "desc">
      There are more projects to be documented but this site is still under construction.
    </Card.Text>
  </Card.Body>
</Card>

</Row>
</Container>

const teamSite = () =>           
<Container fluid>
<br/>
  <LinkContainer to="/Programming"><Button variant="outline-secondary">Back to projects</Button></LinkContainer>
  <br/>
  <h1 className="text-center">Team Website</h1>
  
  <Row>
  <Col sm="4">
              <img src={require('../images/signInScreenShot.jpg')} style={{maxWidth:"100%", maxHeight:"100vh", margin: "auto"}}></img>
            </Col>
            <Col sm="8">
            <h4>Sign in</h4>
  <p>The site uses Firebase authentication and real time database to verify users. <br/> If one of our team member signs into our website, they will be taken to our sign in screen.</p>

              <p>This site allows us to quickly take care of attendance and move on to getting actual stuff done during meetings.</p>

              <p>Since we use Google Sheets to keep track of attendance, the site uses the google sheets API to automatically update your attendance</p>

              <p>If the user does not already have a start time recorded on the spreadsheet, the site will auto-fill the current time in the interface. If the user does have a start time, the site will autofill the end time. If the user has both the site will simply show the user their previously entered time in and time out.</p>
              </Col>

            </Row>
            
            <br/><br/>
  <h4>Other info:</h4>
            <p className="text-center">The code for the website is on github here: <a href="https://github.com/750S/750s.github.io">https://github.com/750S/750s.github.io</a></p>
            <p className="text-center">We used Bootstrap 4 for most of the styling</p>
</Container>


const thisSite = () =>           
<Container fluid>
  <br/>
  <LinkContainer to="/Programming"><Button variant="outline-secondary">Back to projects</Button></LinkContainer>
  <br/>
  <h1 className="text-center">This Site</h1>
  <h4 >Source Code</h4>
  <p>All the code used to make this site is visible on github: <a href="https://github.com/KihtrakRaknas/Robotics-Portfolio-2.0">https://github.com/KihtrakRaknas/Robotics-Portfolio-2.0</a></p>
  <br/>
</Container>

const aimBot = () =>           
<Container fluid>
  <br/>
  <LinkContainer to="/Programming"><Button variant="outline-secondary">Back to projects</Button></LinkContainer>
  <br/>
  <h1 className="text-center">Automatic Aiming</h1>
  <h4>The Goal</h4>
  <p>This year's game, Turning Point, required robots to shoot colored rectangles (flags) to score points. We had access to a camera this year, so here is some code that automatically points the robot at a flag in it's feild of view.</p>
  <br/>
  <Row>
              <Col sm="6">                
              <video playsInline autoPlay loop muted style={{maxWidth:"100%",maxHeight:"100vh"}} >
                  <source type="video/mp4" src={require('../images/aimVid.MOV')}/>
                </video>
                </Col>

                <Col sm="6">  
                    <p>Unfortunately, we soon descovered that competitions had unrealiable lighting and very harsh glare which made the program unrealiable.</p>
                </Col>

            </Row>
</Container>

export default class Programming extends React.Component {
    render() {
      return (
            <Switch>
              <Route exact path='/Programming' component={projects}/>      
              <Route path='/Programming/teamSite' component={teamSite}/>
              <Route path='/Programming/this' component={thisSite}/>
              <Route path='/Programming/aimBot' component={aimBot}/>
            </Switch>
      );
    }
  }
  