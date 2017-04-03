import React, {Component, PropTypes} from 'react';
import '../super.css';
import ReactDOM from 'react-dom';
import SuperRightTop from './superrighttop.js';
import SuperTeacherTitle from './superteachertitle.js';
import SuperTeacherList from './superteacherlist.js'
import SuperDolloer from './superdolloer.js';
class SuperRight extends Component {
    render (){
        return(
            <div className="superright">
                <div className="inner">
                    <SuperRightTop/>
                    <SuperTeacherTitle/>
                    <SuperTeacherList/>
                    <SuperDolloer grades={this.props.grades}/>
                </div>
            </div>
        )
    }
}
export default SuperRight;
