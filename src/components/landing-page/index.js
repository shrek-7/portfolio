import React,{Component} from 'react';

import Particles from 'react-particles-js';

import NameCard from './components/name-card';
import SocialMedia from './components/social-media';
import Hamburger from './components/hamburger-menu';

import './landing-page.css';

export default class LandingPage extends Component {
    constructor(){
        super()

        this.state = {
            hamburgerStatus: false
        }

        this.animate=this.animate.bind(this);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    toggleHamburger(e) {
        e.currentTarget.classList.toggle("hamburger-open");
        this.setState({hamburgerStatus:!this.state.hamburgerStatus});
    }

    animate(){
        document.querySelector('.loader-text').classList.add('reload-bullet');
        setTimeout(()=>{
            document.querySelector('.loader-text').classList.add('fire-bullet');
        },3000);
        setTimeout(()=>{document.querySelector('.loader-text').classList.add('animate');
        },3300);
        setTimeout(()=>{
            document.querySelector('.loader-wrapper').classList.add('hide-loader');
        },5000);
        setTimeout(()=>{
            document.querySelector('.loader-wrapper').classList.add('display-none');
        },9000);
    }

    componentDidMount(){
        setTimeout(()=>{
            document.querySelector('.loader-text').classList.remove('expand');
        });
        setTimeout(()=>{
            this.animate();
        },10000);
    }
    render(){
        return(
            <div className="landing-page-container">
                <div className="loader-wrapper">
                    <ul onClick={()=>this.animate()} className="loader-text expand">
                        <li>h</li>
                        <li>e</li>
                        <li>y</li>
                        &emsp;
                        <li>t</li>
                        <li>h</li>
                        <li>e</li>
                        <li>r</li>
                        <li>e</li>
                        &emsp;
                        <li>!</li>
                    </ul>
                </div>
                {/* <Particles 
                    params={{
                            particles: {
                                line_linked: {
                                    shadow: {
                                        enable: true,
                                        color: "#3CA9D1",
                                        blur: 5
                                    }
                                },
                                number: {
                                    value: 20
                                },
                                size: {
                                    value: 3
                                },
                                move: {
                                    direction: 'top-right',
                                    speed: 1
                                },
                                opacity: {
                                    anim: {
                                        enable: true,
                                        speed: 1
                                    }
                                }
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "grab"
                                    },
                                    onclick:{
                                        enable: true,
                                        mode: 'push'
                                    }
                                },
                                modes: {
                                    repulse: {
                                        distance: 80,
                                        duration: 0.4
                                    },
                                    grab: {
                                        distance: 250
                                    }
                                }
                            }
                        }}
                    style={{
                        width: '100%',
                        height: '100vh',
                        position: 'fixed',
                        top:0,
                        left:0 
                    }}
                /> */}
                <div className="name-card-cont">
                    {/* <NameCard/> */}
                </div>
                <div className="social-media-cont">
                    <SocialMedia/>
                </div>
                <div className="hamburger-menu__icon" onClick={(e)=> this.toggleHamburger(e)}>
                        <ul>
                            <li className="hamburger-menu__bar"></li>
                            <li className="hamburger-menu__bar"></li>
                            <li className="hamburger-menu__bar"></li>
                            <li className="hamburger-menu__bar"></li>
                        </ul>
                </div>
                <div className="hamburger-menu-cont">
                    <Hamburger show={this.state.hamburgerStatus}/>
                </div>
            </div>
        )
    }
}