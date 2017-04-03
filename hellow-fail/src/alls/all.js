import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Top from './../student1/student1';
import LeftTop from './../student1/left1.js';
import LeftBottom from './../student1/left2.js';
import LeftBottom2 from './../student1/left3.js';
import Tan from './../student1/student8.js';
import Tan2 from '../student2/student3-tan.js';
import photos from './../student1/班级管理员_15.gif';
import photos1 from './../student1/超级管理员-班级设置_03.png';
import {Link, hashHistory, browserHistory} from 'react-router';
var str1 =
    {"message":"登录成功",
    "students":[{"id":1,
                    "pid":1,
                    "sname":"张壮壮",
                    "sex":"1",
                    "identity":"123",
                    "sno":"160201",
                    "init":100000,
                    "score":10425,
                    "status":"1",
                    "createTime":null,
                    "updateTime":"2017-03-05 17:36:33",
                    "market":"鲁东市场部",
                    "pic":null,
                    "beginsDate":null,
                    "term":"一年",
                    "birthday":"123"},
             {"id":2,
                    "pid":1,
                    "sname":"帅帅",
                    "sex":null,
                    "identity":null,
                    "sno":"160202",
                    "init":100,
                    "score":125,
                    "status":"1",
                    "createTime":null,
                    "updateTime":null,
                    "market":null,
                    "pic":null,
                    "beginsDate":null,
                    "term":null,
                    "birthday":null},
            {"id":3,
                    "pid":1,
                    "sname":"陈阳",
                    "sex":null,
                    "identity":null,
                    "sno":"160203",
                    "init":100,
                    "score":105,
                    "status":" ",
                    "createTime":null,
                    "updateTime":null,
                    "market":null,
                    "pic":null,
                    "beginsDate":null,
                    "term":null,
                    "birthday":null},
            {"id":4,
                    "pid":1,
                    "sname":"周佳林",
                    "sex":null,
                    "identity":null,
                    "sno":"160204",
                    "init":100,
                    "score":110,
                    "status":"1",
                    "createTime":null,
                    "updateTime":null,
                    "market":null,
                    "pic":null,
                    "beginsDate":null,
                    "term":null,
                    "birthday":null},
            {"id":5,
                    "pid":1,
                    "sname":"春霞",
                    "sex":null,
                    "identity":null,
                    "sno":"160205",
                    "init":100,
                    "score":95,
                    "status":" ",
                    "createTime":null,
                    "updateTime":null,
                    "market":null,
                    "pic":null,
                    "beginsDate":null,
                    "term":null,
                    "birthday":null},
            {"id":6,
                    "pid":1,
                    "sname":"刘云秋",
                    "sex":"1",
                    "identity":"5",
                    "sno":"4",
                    "init":10000,
                    "score":10010,
                    "status":"1",
                    "createTime":"2017-03-04 16:44:06",
                    "updateTime":"2017-03-05 12:46:47",
                    "market":"鲁东市场部",
                    "pic":null,
                    "beginsDate":"8",
                    "term":"一年",
                    "birthday":"6"},
            {"id":7,
                    "pid":1,
                    "sname":"林心如",
                    "sex":"1",
                    "identity":"77",
                    "sno":"66",
                    "init":10000,
                    "score":10000,
                    "status":"1",
                    "createTime":"2017-03-04 16:45:41",
                    "updateTime":"2017-03-04 16:45:41",
                    "market":"é2?????????oé?¨",
                    "pic":null,
                    "beginsDate":"99",
                    "term":"????1′",
                    "birthday":"88"},
            {"id":8,
                    "pid":1,
                    "sname":"辉辉",
                    "sex":"1",
                    "identity":"123123123",
                    "sno":"123123123",
                    "init":10000,
                    "score":10000,
                    "status":"3",
                    "createTime":"2017-03-04 16:55:48",
                    "updateTime":"2017-03-06 13:49:47",
                    "market":"鲁东市场部","pic":null,
                    "beginsDate":"123123123",
                    "term":"一年",
                    "birthday":"123123123"},
            {"id":9,
                    "pid":1,
                    "sname":"琳达",
                    "sex":"1",
                    "identity":"44",
                    "sno":"33",
                    "init":10000,
                    "score":10000,
                    "status":"1",
                    "createTime":"2017-03-04 17:00:09",
                    "updateTime":"2017-03-04 17:00:09",
                    "market":"é2?????????oé?¨",
                    "pic":null,
                    "beginsDate":"66",
                    "term":"????1′",
                    "birthday":"55"},
            {"id":10,
                    "pid":1,
                    "sname":"周润发",
                    "sex":"1",
                    "identity":"123123",
                    "sno":"123123",
                    "init":10000,
                    "score":10000,
                    "status":" ",
                    "createTime":"2017-03-04 17:11:00",
                    "updateTime":"2017-03-05 13:16:19",
                    "market":"鲁东市场部",
                    "pic":null,
                    "beginsDate":"123123",
                    "term":"一年","birthday":"123123"},
            {"id":11,
                     "pid":1,
                    "sname":"文天祥",
                    "sex":"1",
                    "identity":"123123",
                    "sno":"123123",
                    "init":10000,
                    "score":10000,
                    "status":" ",
                    "createTime":"2017-03-05 10:50:27",
                    "updateTime":"2017-03-05 13:17:52",
                    "market":"鲁东市场部",
                    "pic":null,
                    "beginsDate":"123123",
                    "term":"一年",
                    "birthday":"123123"},
            {"id":12,
                    "pid":1,
                    "sname":"李白",
                    "sex":"1",
                    "identity":"132",
                    "sno":"",
                    "init":10000,
                    "score":10000,
                    "status":"2",
                    "createTime":"2017-03-05 10:52:13",
                    "updateTime":"2017-03-05 14:15:03",
                    "market":"鲁东市场部",
                    "pic":null,
                    "beginsDate":"",
                    "term":"一年",
                    "birthday":"123"},
            {"id":13,
                    "pid":1,
                    "sname":"史远",
                    "sex":"1",
                    "identity":"123123",
                    "sno":"123123",
                    "init":10000,
                    "score":10000,
                    "status":"1",
                    "createTime":"2017-03-06 14:10:01",
                    "updateTime":"2017-03-08 16:46:33",
                    "market":"鲁东市场部",
                    "pic":null,
                    "beginsDate":"123123",
                    "term":"一年",
                    "birthday":"123123"}],
        "teacherList":[
                {"tid":7,
                    "tname":"苗林超",
                    "type":"1",
                    "officeType":"1"},
                {"tid":8,
                    "tname":"胡乃全",
                    "type":"2",
                    "officeType":"1"},
                {"tid":9,
                    "tname":"梁静",
                    "type":"2",
                    "officeType":"1"},
                {"tid":10,
                    "tname":"孙绍瑜",
                    "type":"1",
                    "officeType":"1"},
                {"tid":11,
                    "tname":"施丽芳",
                    "type":"1",
                    "officeType":"1"},
                {"tid":12,
                    "tname":"李欢欢",
                    "type":"2",
                    "officeType":"1"},
                {"tid":13,
                    "tname":"腾琴琴",
                    "type":"1",
                    "officeType":"1"},
                {"tid":14,
                    "tname":"陈梦",
                    "type":"2",
                    "officeType":"1"},
                {"tid":15,
                    "tname":"杨小艳",
                    "type":"2",
                    "officeType":"1"},
                {"tid":16,
                    "tname":"张俊杰",
                    "type":"1",
                    "officeType":"1"},
                {"tid":17,
                    "tname":"刘旭东",
                    "type":"1",
                    "officeType":"1"},
                {"tid":18,
                    "tname":"赵子文",
                    "type":"1",
                    "officeType":"1"}],
            "status":200,
             "rewards":[
                 {"id":3,
                     "name":"打扫卫生",
                     "type":"1",
                     "des":"",
                     "score":5},
                 {"id":4,
                     "name":"三好学生",
                     "type":"1",
                     "des":"",
                     "score":5},
                 {"id":5,
                     "name":"学院活动比赛",
                     "type":"1",
                     "des":"",
                     "score":5},
                 {"id":6,
                     "name":"班级争光",
                     "type":"1",
                     "des":"",
                     "score":5},
                 {"id":7,
                     "name":"班委",
                     "type":"1",
                     "des":"",
                     "score":5},
                 {"id":8,
                     "name":"上课迟到",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":9,
                     "name":"上课早退",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":10,
                     "name":"上课戴耳机",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":11,
                     "name":"不跑早操",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":12,
                     "name":"上课吃东西",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":13,
                     "name":"上课玩游戏",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":14,
                     "name":"上课看视频",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":15,
                     "name":"打架",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":16,
                     "name":"吸烟",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":17,
                     "name":"喝酒",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":18,
                     "name":"辱骂上司",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":19,
                     "name":"宿舍卫生差",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":20,
                     "name":"个人卫生差",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":21,
                     "name":"发型不合格",
                     "type":"2",
                     "des":"",
                     "score":-5},
                 {"id":22,
                     "name":"111",
                     "type":"1",
                     "des":null,
                     "score":100},
                 {"id":23,
                     "name":"111",
                     "type":"1",
                     "des":null,
                     "score":100},
                 {"id":24,
                     "name":"12",
                     "type":"1",
                     "des":null,
                     "score":22},
                 {"id":25,
                     "name":"12322",
                     "type":"1",
                     "des":null,
                     "score":123},
                 {"id":26,
                     "name":"44",
                     "type":"1",
                     "des":null,
                     "score":66},
                 {"id":27,
                     "name":"上课积极",
                     "type":"2",
                     "des":null,
                     "score":55},
                 {"id":28,
                     "name":"爱听歌",
                     "type":"2",
                     "des":null,
                     "score":5}],
            "courseList":[
                {"id":7,
                    "cname":"PS & AI图标与界面设计软件",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":8,
                    "cname":"WUI & MUI设计规范|Html&Css基础",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":9,
                    "cname":"Html&Css实战",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":10,
                    "cname":"JavaScript",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":11,
                    "cname":"项目实训一",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":12,
                    "cname":"JavaScript高级|JQuery",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":13,
                    "cname":"Html5&Css3",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":14,
                    "cname":"Html5&Css3高级|Bootstrap",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":15,
                    "cname":"WebAPP开发|HybridApp",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":16,
                    "cname":"项目实训二",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":17,
                    "cname":"微信订阅号开发",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":18,
                    "cname":"Angular.Js",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":19,
                    "cname":"React框架",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":20,
                    "cname":"Php|Php开发框架",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":21,
                    "cname":"项目实训三",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":22,
                    "cname":"程序开发项目流程",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":23,
                    "cname":"node.Js",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":24,
                    "cname":"node.Js|数据库应用",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":25,
                    "cname":"毕业设计",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":26,
                    "cname":"企业实习实训",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":27,
                    "cname":"数据库MySQL|SQL Server|Oracle数据库优化",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":28,
                    "cname":"SSM框架",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":29,
                    "cname":"Linux操作系统|熟悉Linux下常用服务器搭建",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":30,
                    "cname":"大数据基础|java基础",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":31,
                    "cname":"校内实习实训",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":32,
                    "cname":"面向对象编程技术，配置工具使用服务器配置调优，数据库建模",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":33,
                    "cname":"服务器配置调优，数据库建模     Web策划运作(线上，线下)",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":34,
                    "cname":"毕业设计",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":35,
                    "cname":"毕业论文",
                    "tname":null,
                    "type":"1",
                    "score":null},
                {"id":36,
                    "cname":"企业实习实训",
                    "tname":null,
                    "type":"1",
                    "score":null}],

    "data": [
        {
        "id": 380,
        "sid": 51,
        "sname": null,
        "time": "2017-03-23 20:44:42",
        "year": 2017,
        "month": 3,
        "day": 23,
        "week": 2,
        "des": "学生会",
        "operate": 300
    },
        {
        "id": 379,
        "sid": 51,
        "sname": null,
        "time": "2017-03-21 09:44:40",
        "year": 2017,
        "month": 3,
        "day": 21,
        "week": 2,
        "des": "班委",
        "operate": 500
    },
        {
        "id": 378,
        "sid": 51,
        "sname": null,
        "time": "2016-02-21 09:44:37",
        "year": 2016,
        "month": 2,
        "day": 21,
        "week": 2,
        "des": "三好生",
        "operate": 500
    },
        {
        "id": 377,
        "sid": 51,
        "sname": null,
        "time": "2017-01-11 09:44:34",
        "year": 2017,
        "month": 1,
        "day": 11,
        "week": 2,
        "des": "学生会",
        "operate": 300
    },
        {
        "id": 376,
        "sid": 51,
        "sname": null,
        "time": "2017-03-06 08:38:47",
        "year": 2017,
        "month": 3,
        "day": 6,
        "week": 2,
        "des": "请假5天",
        "operate": -10000
    },
        {
        "id": 375,
        "sid": 51,
        "sname": null,
        "time": "2017-03-07 08:38:44",
        "year": 2017,
        "month": 3,
        "day": 7,
        "week": 2,
        "des": "不完成作业",
        "operate": -1200
    },
        {
        "id": 374,
        "sid": 51,
        "sname": null,
        "time": "2017-03-21 08:38:40",
        "year": 2017,
        "month": 3,
        "day": 21,
        "week": 2,
        "des": "演讲比赛",
        "operate": 500
    },
        {
        "id": 373,
        "sid": 51,
        "sname": null,
        "time": "2017-03-21 08:38:39",
        "year": 2017,
        "month": 3,
        "day": 21,
        "week": 2,
        "des": "生活",
        "operate": 100
    },
        {
        "id": 372,
        "sid": 51,
        "sname": null,
        "time": "2017-03-21 08:38:37",
        "year": 2017,
        "month": 3,
        "day": 21,
        "week": 2,
        "des": "三好生",
        "operate": 500
    },
        {
        "id": 371,
        "sid": 51,
        "sname": null,
        "time": "2017-03-21 08:38:35",
        "year": 2017,
        "month": 3,
        "day": 21,
        "week": 2,
        "des": "点多",
        "operate": 500
    },
        {
        "id": 356,
        "sid": 51,
        "sname": null,
        "time": "2017-03-15 08:55:45",
        "year": 2017,
        "month": 3,
        "day": 15,
        "week": 3,
        "des": "三好学生",
        "operate": 5
    }
    ],
    "grade":{
            "id":1,
            "gname":"1602A",
            "gscore":100430,
            "ginit":2500,
            "gcount":13,
            "gstatus":"1",
            "createTime":null,
            "updateTime":"2017-03-06 18:01:52",
            "teacher":"苗林超",
            "header":"胡乃全",
            "course":"PS ",
            "officeType":"1",
            "officeName":"WEB教研室",
            "tpic":null,
            "hpic":null,
            "list":null,
            "password":null},
    "gradeList":[
        {"id":1,
            "gname":"1602A",
            "gscore":100430,
            "ginit":2500,
            "gcount":25,
            "gstatus":"1",
            "createTime":null,
            "updateTime":"2017-03-06 18:01:52",
            "teacher":"苗林超",
            "header":"胡乃全",
            "course":"PS ",
            "officeType":"1",
            "officeName":"WEB教研室",
            "tpic":null,
            "hpic":null,
            "list":null,
            "password":null},
        {"id":4,
            "gname":"1508A",
            "gscore":100000,
            "ginit":100000,
            "gcount":null,
            "gstatus":null,
            "createTime":"2017-01-16 14:51:55",
            "updateTime":"2017-01-16 14:51:55",
            "teacher":null,
            "header":null,
            "course":"xxx",
            "officeType":"1",
            "officeName":"WEB教研室",
            "tpic":null,
            "hpic":null,
            "list":null,
            "password":null},
        {"id":20,
            "gname":"1507B",
            "gscore":10000,
            "ginit":10000,
            "gcount":null,
            "gstatus":"2",
            "createTime":null,
            "updateTime":"2017-03-06 17:07:16",
            "teacher":"东宝宝",
            "header":"胡乃全",
            "course":"Socket",
            "officeType":"1",
            "officeName":"WEB教研室",
            "tpic":null,
            "hpic":null,
            "list":null,
            "password":null}],
    "period":{
        "id":2,
        "name":"第二教学周期",
        "course":"把vsalaslasc",
        "year":2017,
        "type":1,
        "startDate":"2017-03-09",
        "endDate":"2017-04-09"}}
var arr1=[];
var arr2=[];
for(var i=0;i<str1.rewards.length;i++){
    if(str1.rewards[i].type==1){
        arr1.push(str1.rewards[i]);
    }else{
        arr2.push(str1.rewards[i]);
    }
}
class All extends Component{
        constructor(props){
            super(props);
            this.changeIndex = this.changeIndex.bind(this);
            this.cancelMask = this.cancelMask.bind(this);
            this.showMask = this.showMask.bind(this);
            this.cancelMask1 = this.cancelMask1.bind(this);
            this.showMask1 = this.showMask1.bind(this);
            this.changeNum=this.changeNum.bind(this);
           this.changeScore=this.changeScore.bind(this);
            this.changeScroll=this.changeScroll.bind(this);
            this.click=this.click.bind(this);
            this.detail=this.detail.bind(this);
            this.state = {
                    data:str1,
                    index:0,
                     num:0,
                     add:0,
                    showMask:false,
                    showMask1:-1,
                     set:1,
                    obj:0,
                     object:1,
                    oparateRecord:false
                }
            }
    componentWillMount(){
        const data=this.state.data.data;
        let todayArr=[];
        let historyObject={};
        let order=[];
        let todayTime=new Date();
        todayTime=`${todayTime.getYear()+1900}${(todayTime.getMonth()+1).toString().length==1?"0"+(todayTime.getMonth()+1):(todayTime.getMonth()+1)}${(todayTime.getDate()+1).toString().length==1?"0"+(todayTime.getMonth()):(todayTime.getDate())}`;
        data.map((obj,index)=>{
            let token;
            token=obj.time.slice(0,10).replace(/-/g,"");
            obj.token=token;
            order.push(token);
        });
        order=[...new Set(order)];
        order=order.sort((a,b)=>b-a);
        if(order[0]==todayTime){
            order.splice(0,1)
        }
            order.forEach((token,index)=>{
                historyObject[token]=[]
            });
       data.forEach((obj,index)=>{
           if(obj.token==todayTime){
               todayArr.push(obj);
           }else{
               historyObject[obj.token].push(obj)
           }
       });
        this.setState({
            oparateRecord:{
                todayArr,
                historyObject,
                order
            }
        })
    }
    componentDidMount(props){
        if(this.props.location.pathname=='/student/repos'){
            this.setState({
                set:1
            })
        }else if(this.props.location.pathname=='/student/about'){
            this.setState({
                set:2
            })
        }
        else if(this.props.location.pathname=='/student/details'){
            this.setState({
                set:3
            })
        }
    }
    render() {
        let children;
       if(this.state.set==1){
         children=React.cloneElement(this.props.children,{
             student:this.state.data.students[this.state.num1],
             datas:this.state.data.students[this.state.num],
             righttop:str1.students,
             benner:this.state.data.students[this.state.num],
             showMask:this.showMask,
             rewards:this.state.data.rewards,
             rew:arr1,
             rews:arr2,
             fn:this.changDate,
             detail:this.detail,
             add:this.state.add,
             oparateRecord:this.state.oparateRecord
         });
       }else if(this.state.set==2){
           alert(2)
           children=React.cloneElement(this.props.children,{
               showMask1:this.showMask1,
               benner:this.state.data.students[this.state.num],
               student:this.state.data.students[this.state.num1],
               cancelMask1:this.cancelMask1,
               datas:this.state.data.students[this.state.num],
               name:str1.students.sname,
               rew:arr1,
               rews:arr2,
               righttop:str1.students
           });
       }else if(this.state.set==3){
           children=React.cloneElement(this.props.children,{
               showMask:this.showMask,
               datas:this.state.data.students[this.state.num],
               benner:this.state.data.students[this.state.num],
               oparateRecord:this.state.oparateRecord,
               rew:arr1,
               rews:arr2,
               add:this.state.add,
               index:this.state.index
           })
       }
        return (
            <div className="All" onScroll={this.changeScroll} ref={"container"}>
                <Top per={str1.period} click={this.click} img={this.props.location.pathname=="/student/repos"?photos:photos1}/>
                <div className="bigbox">
                    <div className="content-left" >
                        <LeftTop/>
                        {
                            this.props.location.pathname=="/student/repos"||this.props.location.pathname=="/student/details"?<LeftBottom leftbottom={str1.students} fn={this.changeNum}/>:<LeftBottom2/>
                        }
                    </div>
                    <Tan showMask={this.state.showMask} cancelMask={this.cancelMask} names={this.state.data.rewards[this.state.obj==0?0:this.state.obj]}  changeScore={this.changeScore}/>
                    <Tan2 showMask1={this.state.showMask1} cancelMask1={this.cancelMask1}
                        />
                {
                    children
                }
               </div>
            </div>
        );
    }
    changeScroll(){
        if(this.props.location.pathname=="/student/details"){
            if(this.refs.container.clientHeight+this.refs.container.scrollTop==this.refs.container.scrollHeight){
                this.setState({
                    add:this.state.add+1
                })
            }
        }
    }
    changeIndex(index) {
        this.setState({
            index: index
        })
    }

    showMask(obj){
        this.setState({
            showMask: obj
        })
    }
    cancelMask() {
        this.setState({
            showMask: false
        })
    }
    changeScore(object){

        let data = this.state.data;
        data.students[this.state.num].score += this.state.showMask.score;
        this.setState({
            data: data,
            showMask:false
        })
    }
    showMask1(obj){
        this.setState({
            showMask1: obj
        })
    }
    cancelMask1() {
        this.setState({
            showMask1: -1
        })
    }
    click(){
        this.props.location.pathname=="/student/repos"?hashHistory.push("/student/about"):hashHistory.push("/student/repos")
    }
    detail(){
        if(this.props.location.pathname=="/student/repos"){
            hashHistory.push("/student/details")
        }else{
            hashHistory.push("/student/repos")
        }
    }
    changeNum(obj){
        this.setState({
            num:obj
        })
    }
}
export default All;
