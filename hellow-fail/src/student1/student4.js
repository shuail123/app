import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import photo5 from './添加分类.png';
class RightTitle extends Component{
    render(){
        return(
            <div className="content-rights-center-top">
                <img src={photo5}/>
                    <h3>奖励加薪项目</h3>
                    <span>Incentive pay progran</span>
                </div>
        )
    }
}
export default RightTitle;