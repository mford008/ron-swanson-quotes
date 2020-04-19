import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from "./context/auth";


import './App.css';
import Gifs from './pages/Gifs/Gifs.js';
import Splash from './pages/Splash/Splash.js';
import Navbar from './components/Nav/Nav.js';
import Error from './pages/Error/Error.js';
import PrivateRoute from './PrivateRoute';
import Admin from './pages/Admin/Admin.js';
import Login from "./pages/Login";
import Signup from './pages/Signup';

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <div className="App">
        <Navbar className="Nav"/>
          <Switch className="Switch">
            <Route path="/" component={Splash} exact />
            <Route path="/gifs" component={Gifs} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route component={Error} />
          </Switch>
      </div>
    </AuthContext.Provider >
  );
}

export default App;
