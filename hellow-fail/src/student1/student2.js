import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import LeftTop from './left1.js';
import LeftBottom from './left2.js';
class Left extends Component{
    render(){
        return(
            <div className="content-left">
                <LeftTop />
                <LeftBottom data={this.props.data}/>
            </div>
        )
    }
}
export default Left;



