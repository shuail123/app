import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './student2.css';
import  RightTop1 from './student3(1).js';
class RightBox1 extends Component{
    render(){
        return(
            <div className="rightbox1" >
                <RightTop1  name={this.props.righttop}  showMask1={this.props.showMask1}  cancelMask1={this.props.cancelMask1} />
            </div>
        )
    }
}
export default RightBox1;