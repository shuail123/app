import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import photo1 from './班级管理员_31.gif';

class RightBottomTitle extends Component{
    render(){
      return(
          <div className="content-rights-bottom-top">
              <img src={photo1}/>
                  <h3>惩罚减薪项目</h3>
                  <span>Punish pay project</span>
          </div>
      )
    }
}
export default  RightBottomTitle;