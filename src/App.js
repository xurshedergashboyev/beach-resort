import React, { Component } from 'react';
import './App.css'


///////////Pages

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import {
  Switch,
  Route,
  
} from "react-router-dom";

import Navbar from './components/Navbar'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />

          <Route component={Error} />
        </Switch>
        
      </div>
     );
  }
}
 
export default App;