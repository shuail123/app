
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from'react-redux'
import {teacherLoginData} from './actions'
import './login.css';
import photo4 from './登录21.gif';
import photo3 from './登录43.png';
import {hashHistory} from 'react-router';
var color =['#59C66B',"#DDA335","#DA2A2C","#58C6B9","#5385C4","#8459C4"];
var colors=['#fff','#000','#ffe87c','#d0e9c6','#ofofof']
var size=['26px','18px','20px','22px','23px'];
class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.clickButton=this.clickButton.bind(this);
        this.getIden = this.getIden.bind(this);
        this.state = {
            genous:'数字媒体WEB',
            super:'超级管理员',
            identifying_code: 'wdjr',
            username:'用户名',
            authority:'教师',
            password:'密码',
            url: "http://192.168.60.110:8080",
            id:''
        };
    }
    clickButton(){
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        function getFourNumber() {
            let num = "";
            for (let i = 0; i < 4; i++) {
                switch (getRandomArbitrary(0, 3)) {
                    case 0:
                        num += String.fromCharCode(getRandomArbitrary(65, 91))
                        break;
                    case 1:
                        num += String.fromCharCode(getRandomArbitrary(97, 123))
                        break;
                    default:
                        num += String.fromCharCode(getRandomArbitrary(48, 58))
                }
            }
            return num;
        }
        const iden=getFourNumber()
        this.setState({identifying_code:iden});
        //this.status.getId(iden)
    }
    render(){
        return(
            <div className="bigboxs" style={{backgroundImage:`url(${photo4})`}}>
                <form action="">

                    <input type="text" placeholder="数字媒体WEB" list="datalist" ref="genous" className="sz"/>
                        <div className="img1" style={{backgroundImage:`url(${photo3})`}}></div>
                        <input type="text" placeholder="超级管理员" list="datalist" ref="super" className="cj" />
                            <div className="img2" style={{backgroundImage:`url(${photo3})`}}></div>

                            <input type="text"  className="name" placeholder="用户名" ref="username"/><br/>
                            <input type="text" ref="password" className="mima" placeholder="密码"/><br/>
                            <input type="text"  className="look" placeholder="验证码" ref="code" />
                            <input type="button" value="获取验证码" className="get" onClick={this.clickButton}/>
                             <div className="code" style={{backgroundColor:color[Math.floor(Math.random()*color.length)],color:colors[Math.floor(Math.random()*colors.length)],fontSize:size[Math.floor(Math.random()*size.length)]}}>{this.state.identifying_code}</div>
                                            <br/>
                            <input type="submit" value="登录" className="dl" onClick={this.login}/>
                    </form>
            </div>
        )
    }
    login (){
        let myinput=this.refs.genous.value;
        let mysuper=this.refs.super.value;
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=1`)
            .then(json=>json.json())
            .then(json=> {
                if (json.status == 201) {
                    alert(json.message);
                } else if (json.status == 200) {
                    this.props.onSuper(json);
                    hashHistory.push("/super");
                }
            }, err=> {
                alert("服务器异常");
            })
    }
    getIden(value) {
        console.log(value);
        this.setState({
            id: value
        })
    }
}

function maneger(state) {
    console.log(state);
    return {}
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(maneger,mapDispatchToProps)(Login);