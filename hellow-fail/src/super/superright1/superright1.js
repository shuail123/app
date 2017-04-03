import React, {Component} from 'react';
import {connect} from'react-redux';
import '../super.css';
import ClassSeting from './classseting.js';
import SuperClassList from './superclasslist.js';
class SuperRight1 extends Component{
    render(){
        console.log(this.props.grades)
        return(
            <div className="superright">
                <div className="inner">
                    <ClassSeting/>
                    <SuperClassList grades={this.props.grades}/>
                </div>
            </div>
        )
    }
}
export default SuperRight1