import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
var color =['#59C66B',"#DDA335","#DA2A2C","#58C6B9","#5385C4","#8459C4"];
class RightTopList extends Component{
    render(){
        var work=this.props.rew;
        return (
            <div className="content-rights-center-list" >
                {
                    work.map(function(obj,index){
                            return (
                                <div key={index} className="content-rights-center-list-one" style={{
          "borderBottom":'1px solid '+color[index>=color.length?index-color.length:index],"color":color[index>=color.length?index-color.length:index],"background":'#fff'}} onClick={()=>this.props.showMask(work[index])}>
                                    <ul>
                                        <li>
                                            <h3 key={index}>{work[index].name}</h3>
                                            <span>Speech contest</span>
                                        </li>
                                        <li>
                                            {work[index].score}$
                                        </li>
                                    </ul>
                                </div>
                            )

                        },this)
                    }
         </div>
        )
    }
}
export default RightTopList;