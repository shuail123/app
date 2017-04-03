import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import  RightTop from './student3.js';
import RightTitle from './student4.js';
import RightTopList from './student5.js';
import RightBottomTitle from './student6.js';
import RightBottomList from './student7.js';
class RightBox extends Component{
    render(){
        return(

            <div className="rightbox" >
                <RightTop  datas={this.props.datas} righttop={this.props.righttop} benner={this.props.benner} detail={this.props.detail}/>
                <RightTitle/>
                <RightTopList showMask={this.props.showMask} rew={this.props.rew}/>
                <RightBottomTitle/>
                <RightBottomList rews={this.props.rews} showMask={this.props.showMask}/>
            </div>
        )
    }
}
export default RightBox;