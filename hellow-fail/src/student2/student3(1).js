import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student2.css';
import photo4 from './班级管理员-学生管理2_03.gif';
class RightTop1 extends Component{
    constructor(props) {
        super(props);
    }

    render (){
        return (
            <div className="content-right">
                <div className="content-rights">
                    <div className="content-rights-center">
                        <div className="content-rights-center-top">
                            <img src={photo4} alt=""/>
                                <h3>学生管理项目</h3>
                                <span>Incentive pay progran</span>
                         </div>
                            <div className="content-rights-center-lists">
                                <ul className="lists">
                                    {
                                        this.props.name.map(function(obj,index){
                                            return(
                                                    <li className="list one" key={index} onClick={()=>this.props.showMask1(this.props.reward)}>
                                                        <p key={index}>{this.props.name[index].sname}</p>
                                                    </li>
                                                )

                                        },this)
                                    }


                                    <li className="add">
                                        <p>+</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                </div>
            </div>
        )
    }
}
                    export default RightTop1;
