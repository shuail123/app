import React, {Component, PropTypes} from 'react';
import './super.css';
import photo from './班级管理员_06.gif';
import photos from './班级管理员_15.gif';
class Supertop extends Component{
    render(){
        return(
            <nav className="supertop">
                <div className="supernav">
                    <img src={photo}/>
                    <ul>
                        <li>
                            <span></span>
                            <span>web1503</span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                        </li>


                    </ul>
                    <img src={photos} className="shezhi"/>
                </div>
            </nav>
        )
    }
}
export default Supertop;