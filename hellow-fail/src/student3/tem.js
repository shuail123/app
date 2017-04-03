import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo1 from './查看详情_22.gif';
import photo2 from './teacher_15.png';
import photo3 from './class_15.png';
import photo4 from './查看详情_19.gif';
class Tem extends Component{
    render(){
        return(
            <div className="tem">
                <ul>
                    <li>
                        <div className="tem-left" style={{backgroundImage:`url(${photo4})`}}>
                            <img src={photo3} alt=""/>
                            <p>学期</p>
                        </div>
                        <div className="tem-right">
                            <span>第一教学周期</span>
                            <img src={photo1} alt=""/>
                         </div>
                    </li>
                    <li>
                        <div className="tem-left" style={{backgroundImage:`url(${photo4})`}}>
                             <img src={photo2} alt=""/>
                                    <p>课程</p>
                        </div>
                        <div className="tem-right">
                             <span>第一教学周期</span>
                             <img src={photo1} alt=""/>
                        </div>
                    </li>
                 </ul>
         </div>
        )
    }
}
export default Tem;