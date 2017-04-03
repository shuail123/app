import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student1.css';
import Left from './student2.js';
import RightBox from './rightbox.js';

 class Contener extends Component{
    render(){
        return(
            <div className="bigbox">
                <Left/>
                <RightBox/>
            </div>
        )
    }
}
export default Contener;