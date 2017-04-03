import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './student3.css';
import photo5 from './today.png';
class RightToday extends Component{
    constructor(props){
        super(props);
        this.close=this.close.bind(this);
        this.state={
            index:0
        }
    }
    render(){
        return (
            <div>
            <div className="RightToday">
                <img src={photo5}/>
                <h3>今日奖罚项目</h3>
                <span>Incentive pay progran</span>
            </div>
            <div className="RightTodayList">
            <h1>{new Date().getYear()+1900}年{new Date().getMonth()+1}月</h1>
        {
            this.props.oparateRecord.todayArr.map((obj,index)=>{
                return (

                    <div className="RightTodayList-center-list" key={index}>
                        <div className="RightTodayList-center-list-one one">
                            <ul>
                                <li>
                                    <h3>{obj.des}</h3>
                                    <span>Speech contest</span>
                                </li>
                                <li>
                                    {obj.operate}
                                </li>
                            </ul>
                            <div className="close" onClick={()=>this.close(this.props.oparateRecord.todayArr,this.state.index)}><span>×</span></div>
                        </div>

                    </div>
                )
            })
        }
        </div>
      </div>
        )
    }
    close(obj,index){
        this.setState({
            record:obj
        })
        this.props.oparateRecord.todayArr.splice(index,1);
        console.log(obj)
    }
}
export default RightToday;