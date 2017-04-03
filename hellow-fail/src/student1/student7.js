import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
class RightBottomList extends Component{
    render(){
        var work=this.props.rews;
        return(
            <div className="content-rights-bottom-list">
                <div className="content-rights-bottom-lists ">
                    {
                       work.map(function(obj,index){

                                return (
                                    <div className="content-rights-bottom-lists-item yi" key={index}
                                         onClick={()=>this.props.showMask(work[index])}>
                                        <div className="content-rights-bottom-lists-item-top">
                                            <div className="yuan">
                                            </div>
                                            <div className="zi">
                                                <span>{ work[index].score}</span>
                                                <span>$</span>
                                            </div>

                                        </div>
                                        <div className="content-rights-bottom-lists-item-bottom">
                                            <h3 key={index}>{ work[index].name}</h3>
                                            <span>Be late for class</span>
                                        </div>
                                    </div>
                                )

                        },this)
                    }
                    </div>
            </div>
        )

    }
}
export default RightBottomList;