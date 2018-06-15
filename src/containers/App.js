import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import OurTeam from '../components/OurTeam';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import FAQs from '../components/FAQs';
import '../index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
           <div className = "NavBar"> Dental Designs by Dr. Debbie
           </div>
          <NavBar />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path ='/our-team' component = {OurTeam} />
            <Route exact path ='/services' component = {Services} />
            <Route exact path = "/appointment" component = {Appointment} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/faqs" component = {FAQs} />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App;
