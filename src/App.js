import React, { Component } from 'react';
import LandingPage from './components/landing-page';
import WallClock from './components/landing-page/components/wall-clock';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route
                path="/home"
                render={() => <LandingPage />}
              />
              <Route
                path="/clock"
                render={() => <WallClock />}
              />
              <Redirect exact from="/" to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
