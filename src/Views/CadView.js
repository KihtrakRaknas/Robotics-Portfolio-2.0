import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Container,Card, Button} from 'react-bootstrap';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import CadModelViewer from '../Components/CadModelViewer.js'
import { LinkContainer } from 'react-router-bootstrap';
import { Parallax, Background } from 'react-parallax';

const projects = () =>           
<Container fluid>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../images/placeholder.png')} />
  <Card.Body>
    <Card.Title>Replica of a parking tile</Card.Title>
    <Card.Text>
      This year's game involved parking on elevated platforms. We had not received these yet but my team wanted to make sure our robot could get onto the platform. Here are the iterations we went though when tring to print a replica.
    </Card.Text>
    <LinkContainer to="/CAD/parkingTile"><Button variant="primary">View Project</Button></LinkContainer>
  </Card.Body>
</Card>
</Container>

const project = () =>           
<Container fluid>
  <LinkContainer to="/CAD"><Button variant="outline-secondary">Back to projects</Button></LinkContainer>
  <h1 className="text-center">Parking Tile Replica</h1>
  <h4 >The Goal</h4>
  <p>In this year's game, Turning Point, involed building a robot which could park on top of an elevated platform. This was called a parking tile. It was taking a while for our parking tile to arrive so we disided to use the modle that vex provided to print an analog.</p>
  <h4 >Model provided by vex</h4>
</Container>


export default class CadView extends React.Component {
    render() {
      return (
        <div>
            <Switch>
              <Route exact path='/CAD' component={projects}/>
              <Route path='/CAD/parkingTile' component={project}/>
            </Switch>

          <Container fluid>
            <Row>
              <Col sm="6"><CadModelViewer url="https://a360.co/2PBk9fr"/></Col>
              <Col sm="6"><h3 className="text-center">
                ModelName
                </h3></Col>
            </Row>
            <video playsinline autoPlay loop muted style={{maxWidth:"100%"}} >
              <source type="video/mp4" src="//bg.cdn.ustudio.com/app/transcodes/TQAdh6DJdtuY.mp4"/>
            </video>
          </Container>
          
          <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require('../images/placeholder.png')}
          bgImageAlt="the dog"
          strength={-400}
          >
          Blur transition from min to max
          <div style={{ height: '800px' }} />
          </Parallax>

          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
      );
    }
  }
  