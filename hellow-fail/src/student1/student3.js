import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import photo3 from './班级管理员_17.gif';
import photo4 from './班级管理员_21.gif';
import photo2 from './班级管理员休学.gif';
class RightTop extends Component{
    constructor(props) {
        super(props);
    }

    render (){
        return (
            <div className="content-rights-top">
                <ul>
                    <li>
                        <img src={photo4}/>
                    </li>
                    <li>
                        <h3>本教学周期薪酬</h3>
                        <p>The teaching cycle pay</p>
                    </li>
                    <li>
                    ￥
                    {this.props.datas.score}
                    </li>
                    <li onClick={this.props.detail}>查看详情>></li>
                </ul>
                <div className="content-rights-top-xiuxue" style={this.props.benner.status==" "?{display:'block'}:{display:'none'}}><img src={photo2}/></div>
            </div>
        )
    }
}
                    export default RightTop;
