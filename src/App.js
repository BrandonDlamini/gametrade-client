import React from "react";
import Navbar from "react-bootstrap/Navbar";
import './App.css';
import Routes from './Routes';
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';
import ViewGames from './components/ViewGames'
import AddGame from './components/AddGame'



function App(){
  return (
    <div className ="App container py-3">
      <Navbar collapseOnSelect bg ="light" expand ="md" className ="mb-3">
        <LinkContainer to ="/">
          <Navbar.Brand className= "font-weight-bold text-muted">
            GameTrade
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle/>
        <Navbar.Collapse className ="justify-content-end">
          <Nav activeKey = {window.location.pathname}>
            <LinkContainer to ="/viewgames">
              <Nav.Link >View Games</Nav.Link>
            </LinkContainer>
            <LinkContainer to ="/addgames">
              <Nav.Link>Add Game</Nav.Link>
            </LinkContainer>  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
   

      <Routes />
    </div>
  );
}

export default App;