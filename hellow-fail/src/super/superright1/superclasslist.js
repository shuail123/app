import React, {Component} from 'react';
import {connect} from'react-redux';
import '../super.css';
class SuperClassList extends Component{
    constructor(props) {
        super(props);
    }

    render (){

        return (
                        <div className="content-rights-center-lists">
                            <ul className="lists">
                                {
                                    this.props.grades.map((obj,index)=>{
                                        return(
                                            <li className="list one" key={index} onClick={()=>this.props.showMask1(this.props.reward)}>
                                                <p key={index}>{obj.gname}</p>
                                            </li>
                                        )

                                    },this)

                                }

                                <li className="add">
                                    <p>+</p>
                                </li>
                            </ul>
                        </div>

        )
    }
}
export default SuperClassList;
