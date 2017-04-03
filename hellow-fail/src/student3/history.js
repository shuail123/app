import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo5 from './today.png';
class History extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var add=2+this.props.add*2;
         var order=[...this.props.oparateRecord.order];
        order=order.splice(0,add);
        return(
            <div className="history2">
        <div className="History">
            <img src={photo5}/>
            <h3>历史奖罚项目</h3>
            <span>Incentive pay progran</span>
        </div>
                {
                    order.map((token,index)=>{
                    return (
                        <div key={index} className="Historys">
                            <h1>{`${token.slice(0,4)}年${token.slice(4,6)}月${token.slice(6,8)}日`}</h1>
                             <div className="his">
                             {
                                 this.props.oparateRecord.historyObject[token].map((obj,index2)=>{
                                return(
                                    <div  key={index2} style={{position:'relative'}}>
                                        <div className="Historyyi">
                                            <ul>
                                                <li>
                                                    <h3>{obj.des}</h3>
                                                    <span>Speech contest</span>
                                                </li>
                                                <li>
                                                    {obj.operate}
                                                </li>
                                            </ul>
                                            <div className="close"><span>×</span></div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                            </div>
                        </div>
                    )
                })
                }
         </div>
        )
    }


}
export default History;