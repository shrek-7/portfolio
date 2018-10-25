import React,{Component} from 'react';
import './hamburger.css';

export default class HamburgerMenu extends Component {

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        if(this.props.show){
            document.querySelector('.hamburger-menu__contents').classList.add("active");
        }else{
            document.querySelector('.hamburger-menu__contents').classList.remove("active");
        }
    }

    render(){
        return(
            <div className='hamburger-menu__contents'>
                <div className="topLeft"></div>
                <div className="topRight"></div>
                <div className="bottomLeft"></div>
                <div className="bottomRight"></div>
            </div>  
        )
    }
}