import React, {Component} from 'react';
import {connect} from'react-redux';
import '../super.css';
import photo from './超级管理员-班级设置_13.gif';
class ClassSeting extends Component{
    render(){
        return(
            <div className="SuperCenterTitle">
                <img src={photo} alt=""/>
                <h3>班级设置</h3>
                <span>Class seting</span>
            </div>
        )
    }
}
export default ClassSeting