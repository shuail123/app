import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
class LeftBottom extends Component{
    constructor(props){
        super(props);
        this.changeBackground=this.changeBackground.bind(this);
        this.state={
            num:1
        }
    }
    render(){
        var names=this.props.leftbottom;
        return(
                <div className="content-left-name" >
                    <ul>
                        {
                            names.map(function(obj,index){
                                return(
                                    <li key={index} data={obj} onClick={()=>this.changeBackground(obj)} style={this.state.num===obj.id?{backgroundColor:"#efd63b",color:"#323433",fontWeight:600,
    fontSize:"18px"}:{}}>{names[index].sname}</li>
                                )
                            },this)
                        }
                    </ul>
                </div>
        );
    }
    changeBackground(val){
        this.props.fn(val.id-1);
        this.setState({
            num:val.id
        })
    }
}
export default LeftBottom;
