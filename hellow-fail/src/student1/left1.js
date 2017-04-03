import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import photo1 from './班级管理员_13.gif';
import photo2 from './班级_13.gif';

class LeftTop extends Component{
    render(){
        return(

                <div className="picture" style={{backgroundImage:`url(${photo2})`}}>
                    <img src={photo1}/>
                    <p>WEB1503B</p>
                    <p>人数：29人</p>
                    <p>总额：33000元</p>
                </div>
        )
    }
}
export default LeftTop;
