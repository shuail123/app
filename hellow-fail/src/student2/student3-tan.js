import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student2.css';
import photo4 from './选项箭头 拷贝.png';
class Tan2 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="zsms" style={{display:this.props.showMask1==-1?"none":"block"}}>
                    <div className="masks">
                        <div className="zsm-zs">
                            <div className="zsm-z-ss">
                                <p>班级基本信息</p>
                                <span>Basic class information</span>
                            </div>
                            <div className="zsm-z-xs">
                                <div className="right-2-2-top-xs">
                                    <div className="tan2">
                                        <div className="name">姓名</div>
                                        <input type="text" defaultValue="ascml" ref="name"/>
                                    </div>
                                    <div className="tan2">
                                        <div className="name">班级</div>
                                        <input type="text" defaultValue="ascml" ref="class"/>
                                    </div>
                                    <div className="tan2">
                                        <div className="name">学号</div>
                                        <input type="text" defaultValue="fbbffd" ref="num"/>
                                    </div>
                                    <div className="tan2">
                                        <div className="name">性别</div>
                                        <select name="sex" id="sex" ref="sex" style={{backgroundImage:`url(${photo4})`}}>
                                            <option>女</option>
                                            <option>男</option>
                                        </select>
                                    </div>
                                    <div className="tan2">
                                        <div className="name">身份证号</div>
                                        <input type="text" defaultValue="12444" ref="identify"/>
                                    </div>
                                </div>
                                <div className="xxxs">
                                    <div className="xxxls" onClick={this.props.cancelMask1}>取消</div>
                                    <div className="xxxrs" onClick={this.props.cancelMask1}>确定</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tan2;
