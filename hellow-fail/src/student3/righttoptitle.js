import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo5 from './today.png';
class RightTop2Title extends Component {
    render() {
        return (
            <div>
                <div className="content-rights-center-top1">
                    <img src={photo5}/>
                    <h3>今日奖罚项目</h3>
                    <span>Incentive pay progran</span>
                </div>

            </div>
        )
    }
}
export default RightTop2Title;