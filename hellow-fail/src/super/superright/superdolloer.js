import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import '../super.css';
import photo4 from './班级管理员_21.gif';
class SuperDolloer extends Component{
    constructor(props) {
        super(props);
    }

    render (){
        return (
            <div className="super-rights-top">
                <ul>
                    <li>
                        <img src={photo4}/>
                    </li>
                    <li>
                        <h3>本教学周期薪酬</h3>
                        <p>The teaching cycle pay</p>
                    </li>
                    <li>
                        ￥{this.props.grades.gscore}


                    </li>
                </ul>

            </div>
        )
    }
}
export default SuperDolloer;
