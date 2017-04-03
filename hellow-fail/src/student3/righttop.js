import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo1 from './班级管理员_21.gif'
class RightTop2 extends Component{
    render(){
        return(
            <div className="content-rights-top1" >
                <div className="content-rights-top1">
                    <ul>
                        <li className="content-rights-top1-left">
                            <div>
                                <p>{this.props.datas.sname}</p>
                            </div>
                            <span>学号:{this.props.datas.sno}</span>
                            <span>市场部:{this.props.datas.market}</span>
                            <span>入学日期:{this.props.datas.updateTime}</span>
                            <span>学制:{this.props.datas.term}</span>
                        </li>
                        <li className="content-rights-top1-right">
                            <h2><img src={photo1} alt=""/>本教学周期薪酬</h2>
                             <span>The teaching cycle pay</span>
                            <span className="dollor">{this.props.datas.score}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default RightTop2;