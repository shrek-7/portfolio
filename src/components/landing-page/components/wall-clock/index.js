import React, { Component } from 'react';
import './index.css';

export default class WallClock extends Component {
  render() {
    return (
    <section className="clock-container">
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand"></div>
          <div className="hand min-hand"></div>
          <div className="hand second-hand"></div>
        </div>
      </div>
    </section>
    
    )
  }
}
