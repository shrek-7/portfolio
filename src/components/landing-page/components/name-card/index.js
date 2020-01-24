import React,{Component} from 'react';
import './name-card.css';

export default class NameCard extends Component {
    render(){
        return(
            <div className="name-card-wrap">
                <div className="profile-name">
                    Hello, I'm Shreyas.
                </div>
                <hr className="separator"/>
                <div className="profile-introduction">
                    I'm a Javascript developer.
                </div>
                <br />
                <div className="profile-introduction">
                    {/* <div>
                        Currently in Bangalore, India.
                    </div> */}
                    <a href="mailto:shreyas.srivastava199@gmail.com?Subject=Hello%20there!" target="_top">
                        Connect me at: shreyas.srivastava199@gmail.com
                    </a>
                    
                </div>
                <div className="profile-introduction">
                    Checkout my projects on portfolio page. 
                </div>
                <div className="profile-note">
                    P.S: I'm not your average Front-end Developer.
                </div>
            </div>
        )
    }
}