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
  <Card.Img variant="top" src={require('../CAD vids/tiles.PNG')} />
  <Card.Body>
    <Card.Title>Replica of a parking tile</Card.Title>
    <Card.Text className = "desc">
      This year's game involved parking on elevated platforms. We had not received these yet but my team wanted to make sure our robot could get onto the platform. Here are the iterations we went though when tring to print a replica.
    </Card.Text>
    <LinkContainer to="/CAD/parkingTile"><Button variant="primary">View Project</Button></LinkContainer>
  </Card.Body>
</Card>
<Card style={{ width: '20rem', margin:"10px" }}>
  <Card.Img variant="top" src={require('../images/locking mechanism.PNG')} />
  <Card.Body>
    <Card.Title>Locking Mechanism</Card.Title>
    <Card.Text className = "desc">
      A simple model which will hold it's 2 halves together unless reset by a human.
    </Card.Text>
    <LinkContainer to="/CAD/lockingMech"><Button variant="primary">View Project</Button></LinkContainer>
  </Card.Body>
</Card>
</Row>
</Container>

const tile = () =>           
<Container fluid>
<br/>
  <LinkContainer to="/CAD"><Button variant="outline-secondary">Back to projects</Button></LinkContainer>
  <br/>
  <h1 className="text-center">Parking Tile Replica</h1>
  <h4 >The Goal</h4>
  <p>In this year's game, Turning Point, involed building a robot which could park on top of an elevated platform. This was called a parking tile. It was taking a while for our parking tile to arrive so we disided to use the modle that vex provided to print an analog.</p>
  <br/>
  <h4 >Model provided by vex</h4>
  <Row>
  <Col sm="6"><br/><br/><p>
                I started with the 3D model provided by vex. The idea was to print out segments of the tubes that compose the sides of the tiles. In addition, the inserts which connected the corners could be used to connect segments of the tubes
                </p>
                
            </Col>
              <Col sm="6"><CadModelViewer url="https://a360.co/2PxmyHI"/></Col>

            </Row>
            <br/><br/>
  <h4 >Initial prints</h4>
            <Row>
              <Col sm="6"><CadModelViewer url="https://a360.co/2PB5Bwa"/></Col>
              <Col sm="6"><h3 className="text-center">
                Small Segment of Tube
                </h3>
                <video playsInline autoPlay loop muted style={{maxWidth:"100%",maxHeight:"100vh"}} >
                  <source type="video/mp4" src={require('../CAD vids/thick tube.MOV')}/>
                </video>
            </Col>
            </Row>
            <Row>
              <Col sm="6"><CadModelViewer url="https://a360.co/2PBh7aE"/></Col>
              <Col sm="6"><h3 className="text-center">
                Connector
                </h3>
                <video playsInline autoPlay loop muted style={{maxWidth:"100%",maxHeight:"100vh"}} >
                  <source type="video/mp4" src={require('../CAD vids/thick connector.MOV')}/>
                </video>
            </Col>
            </Row>

            <p>The intial prints were perfectly functional, unforchenetly, they were also very costly to print due to the thickness and of the models. It would have been extremly costly to print a full tube using these models, so a thiner model was designed.</p>
            <br/>
            <h4>Thinner costum designed tube</h4>
            <Row>
              <Col sm="6"><CadModelViewer url="https://a360.co/2L90SDl"/></Col>
              <Col sm="6"><h3 className="text-center">
                Thin Tube Test Print
                </h3>
                <video playsInline autoPlay loop muted style={{maxWidth:"100%",maxHeight:"100vh"}} >
                  <source type="video/mp4" src={require('../CAD vids/thin tube.MOV')}/>
                </video>
            </Col>
            </Row>

            <p>This new print was much cheaper but was not able to mantain it's shape under pressure.</p>
            <br></br>
            <h4>Thinner costum designed tube with supports</h4>
            <p>To combat the flex, I tried adding internal supports.</p>
            <Row>
              <Col sm="6"><CadModelViewer url="https://a360.co/2PBUa7f"/></Col>
              <Col sm="6"><h3 className="text-center">
                Thin Tube with Internal Supports Test Print
                </h3>
                <video playsInline autoPlay loop muted style={{maxWidth:"100%",maxHeight:"100vh"}} >
                  <source type="video/mp4" src={require('../CAD vids/thin with cross.MOV')}/>
                </video>
            </Col>
            </Row>

            <p>The interal supports did a good job of preventing the parts touching it from moving but the area in between the supports was still weak.</p>
            <br/>
            <h4>Thinner costum designed tube with revolved supports</h4>
            <p>In an attempt to remedy the previous problems, I revolved the supports thoughout the tube to cover every side with suports without using extra material. I also modeled the negitive space in the spiral and printed that as a connector.</p>
            <Row>
              <Col sm="6"><CadModelViewer url="https://a360.co/2PBrrQ1"/></Col>
              <Col sm="6"><h3 className="text-center">
                Thin Tube with Spirtal Test Print
                </h3>
                <video playsInline autoPlay loop muted style={{maxWidth:"100%",maxHeight:"100vh"}} >
                  <source type="video/mp4" src={require('../CAD vids/spiral.mp4')}/>
                </video>
            </Col>
            </Row>
            <Row>
              <Col sm="6"><CadModelViewer url="https://a360.co/2LaqWhs"/></Col>
              <Col sm="6"><h3 className="text-center">
                Spiral Connector
                </h3>
                <video playsInline autoPlay loop muted style={{maxWidth:"100%",maxHeight:"100vh"}} >
                  <source type="video/mp4" src={require('../CAD vids/spiral connector.MOV')}/>
                </video>
            </Col>
            </Row>
            <br/>
            <h4>Final prints</h4>
            <p>Everything turned out functional so we printed a full size tube and tested out robot on it.</p>

            <Row>
              <Col sm="12">   <h3 className="text-center">
                Spiral Connector
                </h3>            
               <video playsInline autoPlay loop muted style={{width:"100%",height:"100vh"}} >
                  <source type="video/mp4" src={require('../CAD vids/spiral connection.mp4')}/>
                </video>
                </Col>
              <Col sm="12"><h3 className="text-center">
                Spiral Connector
                </h3>
                <video playsInline autoPlay loop muted style={{width:"100%",height:"100vh", margin:"auto"}} >
                  <source type="video/mp4" src={require('../CAD vids/final demo.mp4')}/>
                </video>
            </Col>
            </Row>
</Container>


const lockingMech = () =>           
<Container fluid>
  <br/>
  <LinkContainer to="/CAD"><Button variant="outline-secondary">Back to projects</Button></LinkContainer>
  <br/>
  <h1 className="text-center">Locking mechanism</h1>
  <h4 >The Goal</h4>
  <p>This year's game, Turning Point, allowed robots to expand past the 18x18x18 inch size limit after the game started. This is a locking mechanism which would catch and hold any moving component in place.</p>
  <br/>
  <Row>
              <Col sm="12"><CadModelViewer url="https://a360.co/2FkhAMc"/></Col>

            </Row>
</Container>

export default class CadView extends React.Component {
    render() {
      return (
            <Switch>
              <Route exact path='/CAD' component={projects}/>
              <Route path='/CAD/parkingTile' component={tile}/>
              <Route path='/CAD/lockingMech' component={lockingMech}/>
            </Switch>
      );
    }
  }
  