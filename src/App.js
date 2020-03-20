import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Gifs from './pages/Gifs/Gifs.js';
import Splash from './pages/Splash/Splash.js';
import Navbar from './components/Nav/Nav.js';
import Error from './pages/Error/Error.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" component={Splash} exact />
          <Route path="/gifs" component={Gifs} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
