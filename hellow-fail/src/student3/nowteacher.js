import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo1 from './touxiang_26.png';
class NowTeacher extends Component{
    render(){
       return(
           <div className="NowTeacher">
                   <div className="NowTeacher-list">
                       <div className="NowTeacher-lists ">
                           <div className="NowTeacher-lists-item yis">
                               <div className="yis-top">
                                   <h3>任课老师</h3>
                                   <p>Teacher</p>
                               </div>
                               <div className="yis-center">
                                   <img src={photo1} alt=""/>
                                   </div>
                                   <div className="yis-bottom">
                                       <ul>
                                           <li><span>苗林超</span></li>
                                           <li><span>WEB</span></li>
                                           <li><span>WEB</span></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="NowTeacher-lists-item lings">
                                   <div className="lings-top">
                                       <h3>任课老师</h3>
                                       <p>Teacher</p>
                                   </div>
                                   <div className="lings-center">
                                       <img src={photo1} alt=""/>
                                       </div>
                                       <div className="lings-bottom">
                                           <ul>
                                               <li><span>胡乃权</span></li>
                                               <li><span>WEB</span></li>
                                               <li><span>WEB</span></li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div className="NowTeacher-lists-item ers">
                                       <div className="ers-top">
                                           <h3>任课老师</h3>
                                           <p>Teacher</p>
                                       </div>
                                       <div className="ers-center">
                                           <img src={photo1} alt=""/>
                                           </div>
                                           <div className="ers-bottom">
                                               <ul>
                                                   <li><span>苗林超</span></li>
                                                   <li><span>WEB</span></li>
                                                   <li><span>WEB</span></li>
                                               </ul>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
       )
    }
}
export default NowTeacher;
