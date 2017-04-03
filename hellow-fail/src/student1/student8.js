import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
class Tan extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div>
                <div className="zsm" style={{display:this.props.showMask==false?"none":"block"}}>
                    <div className="mask">
                        <div className="zsm-z">
                            <div className="zsm-z-s">
                                <p>{this.props.showMask.score>0?"奖励加薪项目":"惩罚减新项目"}</p>
                            </div>
                            <div className="zsm-z-x">
                                <div className="right-2-2-top-x">
                                    <div className="right-2-2-top-z1-x">
                                        <p>{this.props.showMask.name}</p>
                                    </div>
                                    <div className="right-2-2-top-z2-x">
                                        <p>{this.props.showMask.score}<span>$</span></p>
                                    </div>
                                </div>
                                <div className="xxx">
                                    <div className="xxxl" onClick={this.props.cancelMask}>取消</div>
                                    <div className="xxxr" onClick={this.props.changeScore}>确定</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 }
                export default Tan;
