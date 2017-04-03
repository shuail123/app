import React, {Component, PropTypes} from 'react';
import './super.css';
import photo1 from "./超级管理员-班级设置_02.gif";
import photo2 from "./超级管理员-班级设置_103.gif";
class Superleft extends Component{
    constructor(props){
        super(props);
        this.changeBackground=this.changeBackground.bind(this);
        this.shows=this.shows.bind(this);
        this.show=this.show.bind(this);
        this.state={
            num:1,
            show:false
        }
    }
    render(){
        return(
            <div className="superleft">
                <div className="superlefttop" style={{backgroundImage:`url(${photo1})`}}>                                           <div className="superlefttopimg" style={{backgroundImage:`url(${photo2})`}}>
                     </div>
                    <span>web</span>
                    <span></span>
                </div>

                    <div className="classlist" >
                    {
                        this.props.grades.map((obj,index)=>{
                            return(
                                    <div className="classname" key={index} style={this.state.num===obj.id?{backgroundColor:"#efd63b",color:"#323433",fontWeight:600,
        fontSize:"18px"}:{}} onClick={()=>{this.props.onLink(index),this.changeBackground(obj),this.show(obj.list)}}>
                                    <h3>{obj.gname}</h3>
                                        <ul className="classstudent" style={{display:this.state.show==false?"none":"block"}}>
                                        {
                                            this.props.grades[index].list.map((obj,index)=>{
                                                return(
                                                    <li key={index}>{obj.sname}</li>
                                                )
                                            },this)
                                        }

                                        </ul>
                                        </div>

                            )
                        },this)
                    }
                    </div>
        </div>

        )
    }
    changeBackground(val){
        this.setState({
            num:val.id
        })
    }
    show(obj){
        this.setState({
            show:obj
        })
    }
    shows(){
        this.setState({
            show:true

        })
    }
}
export default Superleft;