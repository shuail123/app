import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import photo from './班级管理员_06.gif';
import photos from './班级管理员_15.gif';
class Top extends Component{
    render(){
        return(
            <nav className="nav">
                <div className="navs">
                    <img src={photo}/>
                    <ul>
                    <li>


                        <a href="">
                            <span>{this.props.per.year}年</span>
                            <p>{this.props.per.name}</p>
                        </a>
                        <span>{this.props.per.course}</span>
                    </li>
                    <li>
                        <a href="">
                            <span>任课老师:</span>
                            <p>苗林超</p>
                        </a>
                        <span>班主任:</span>
                        <p>胡乃权</p>
                    </li>

                    <img src={this.props.img} className="shezhi" onClick={this.props.click}/>
                </ul>
		        </div>
            </nav>
        )
    }
}
export default Top;
