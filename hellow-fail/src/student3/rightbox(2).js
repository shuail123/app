import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import RightTop2 from './righttop.js';
import RightToday from './righttoday.js';
import Average from './average.js';
import RightCenterTitle from './rightcentertitle.js';
import NowTeacher from './nowteacher.js'
import Tem from './tem.js';
import History from './history.js';
class RightBox2 extends Component{
    render(){
        return(
            <div className="rightbox" >
                <RightTop2 datas={this.props.datas}/>
                <RightToday oparateRecord={this.props.oparateRecord}/>
                <Average/>
                <Tem/>
                <RightCenterTitle/>
                <NowTeacher/>
                <History oparateRecord={this.props.oparateRecord} close={this.props.close} changeScroll={this.props.changeScroll} add={this.props.add}/>
            </div>
        )
    }
}
export default RightBox2;