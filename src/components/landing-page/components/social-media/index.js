import React,{Component} from 'react';
import './social-media.css';
import instaPath from '../../../../assets/instagram.png';
import linkedInPath from '../../../../assets/linkedin.png';
import facebookPath from '../../../../assets/facebook.png';

export default function SocialMedia() {
    
        return(
            <div className="social-media-wrap">
                <div className="social-facebook">
                    <img className="social-icon" src={facebookPath} alt="Facebook"/>
                </div>
                <div className="social-instagram">
                    <img className="social-icon" src={instaPath} alt="Instagram"/>
                </div>
                <div className="social-linkedIn">
                    <img className="social-icon" src={linkedInPath} alt="LinkedIn"/>
                </div>
            </div>
        )
}