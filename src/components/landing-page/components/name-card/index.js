import React,{Component} from 'react';
import './name-card.css';

export default class NameCard extends Component {
    render(){
        return(
            <div className="name-card-wrap">
                <div className="profile-name">
                    Hello, my name is Shreyas Kumar.
                </div>
                <hr className="separator"/>
                <div className="profile-introduction">
                    I'm UI/UX Javascript developer.
                </div>
                <div className="profile-introduction">
                    Checkout my projects on portfolio page. 
                </div>
                <div className="profile-introduction">
                    Based in Bangalore,India. Connect me at: shreyas.srivastava199@gmail.com
                </div>
                <div className="profile-note">
                    P.S: I'm not your average Front-end Developer.
                </div>
            </div>
        )
    }
}