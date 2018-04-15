import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import  Home  from '../components/Home';
import  About  from '../components/About';
import  Appointment  from '../components/Appointment';
import  Contact  from '../components/Contact';
import  NavBar  from '../components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Dental Designs by Dr. Debbie
          <NavBar />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path ='/about' component = {About} />
            <Route exact path = "/appointment" component = {Appointment} />
            <Route exact path = "/contact" component = {Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
