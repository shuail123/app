import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import '../super.css';
import photo1 from './查看详情_22.gif';
import photo2 from './teacher_15.png';
import photo3 from './class_15.png';
import photo4 from './查看详情_19.gif';
class SuperRightTop extends Component{
    render(){
        return(
            <div className="weeks">
                <ul>
                    <li>
                        <div className="weeks-left" style={{backgroundImage:`url(${photo4})`}}>
                            <img src={photo3} alt=""/>
                            <p>学期</p>
                        </div>
                        <div className="weeks-right">
                            <span>第一教学周期</span>
                            <img src={photo1} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div className="weeks-left" style={{backgroundImage:`url(${photo4})`}}>
                            <img src={photo2} alt=""/>
                            <p>课程</p>
                        </div>
                        <div className="weeks-right">
                            <span>第一教学周期</span>
                            <img src={photo1} alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default SuperRightTop