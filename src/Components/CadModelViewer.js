import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';

import { Parallax, Background } from 'react-parallax';
  
export default class CadModelViewer extends React.Component {
    constructor(props) {
        super(props);
        this.iframe = React.createRef();
        this.state={
            he:400,
            url:props.url,
        }
      }
    
      componentDidMount() {
        console.log(this.iframe.current.offsetWidth);
        this.setState({he:this.iframe.current.offsetWidth/3*2,})
      }
    
    render() {
      return (
        <div>
          <iframe ref={this.iframe} style={{ height: this.state.he, width: '100%' }} src ={this.state.url}>If you dont see a CAD model use a different broswer</iframe>
        </div>
      );
    }
  }
  