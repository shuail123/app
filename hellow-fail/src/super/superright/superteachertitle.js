import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import '../super.css';
import photo from './teacher_23.png';
class SuperTeacherTitle extends Component{
    render (){
        return(
            <div className="SuperCenterTitle">
                <img src={photo} alt=""/>
                <h3>班级教师</h3>
                <span>Class teacher</span>
            </div>
        )
    }
}
export default SuperTeacherTitle