import React, { Component } from 'react';
import LandingPage from './components/landing-page';
import {ThemeContext} from './context';
import ThemeTogglerButton from './components/landing-page/components/themeToggleButton';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleTheme = (theme) => {
      console.log(theme);
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: 'light',
      toggleTheme: this.toggleTheme,
    };
  }


  render() {
    return (
      
        <div className="App">
            <LandingPage/>
            <ThemeContext.Provider value={this.state}>
              {/* <ThemeTogglerButton label="myButton"  /> */}
            </ThemeContext.Provider>
        </div>
    );
  }
}

export default App;
