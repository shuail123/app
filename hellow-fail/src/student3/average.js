import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo1 from './班级管理员_21.gif'
class Average extends Component{
    render (){
        return(
            <div className="average">
                <ul>
                    <li>
                        <img src={photo1} alt=""/>
                    </li>
                    <li>
                        <h3>历史平均薪资</h3>
                        <p>Historical average wage</p>
                    </li>
                    <li>
                        <h3>12334</h3>

                    </li>
                </ul>
             </div>
        )
    }
}
export default Average;
