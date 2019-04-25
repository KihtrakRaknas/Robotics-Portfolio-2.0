import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { Parallax, Background } from 'react-parallax';


import CadView from './Views/CadView.js';
import Header from './Components/Header.js';
import Home from './Views/Home.js';
import Programming from './Views/Programming.js';
import Leadership from './Views/Leadership.js';
  
  class Game extends React.Component {
    render() {
      return (
        <div>
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/CAD" component={CadView} />
              <Route path="/Programming" component={Programming} />
              <Route path="/Leadership" component={Leadership} />
            </Switch>
            </BrowserRouter>
            <Parallax
            bgImage={require('./images/placeholder.png')}
            strength={800}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
            >
            <p>... Content</p>
            <p>... Content</p>
            <p>... Content</p>
            <p>... Content</p>
            <p>... Content</p>
            <p>... Content</p>
            <p>... Content</p><p>... Content</p>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </Parallax>
                    <p>test</p>

          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
          </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  