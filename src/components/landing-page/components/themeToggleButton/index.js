import {ThemeContext} from '../../../../context';
import React, {Component} from 'react';
import './toggle-theme.css';
class ThemeTogglerButton extends Component {
// The Theme Toggler Button receives not only the theme
// but also a toggleTheme function from the context

constructor(props) {    
    super(props)

    this.toggleSwitch = this.toggleSwitch.bind(this);
}

toggleSwitch(toggleTheme) {
    document.querySelector('.toggle-switch').classList.toggle('active');
    toggleTheme('dark');
}

render(){
    return (
        <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
            <div className="toggle-wrapper" onClick={()=>this.toggleSwitch(toggleTheme)}>
                <div className="toggle-label">
                    {this.props.label}
                </div>
                <div className="toggle-switch">
                    <div className="toggle-switch-ball"></div>
                </div>
            </div>
        )}
        </ThemeContext.Consumer>
    );
}
}

export default ThemeTogglerButton;