import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo from './teacher_23.png';
class RightCenterTitle extends Component{
    render(){
        return(
            <div className="RightCenterTitle">
                <img src={photo} alt=""/>
                    <h3>班级教师</h3>
                    <span>Class teacher</span>
                </div>
        )
    }
}

export default RightCenterTitle;