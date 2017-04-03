import React, {Component} from 'react';
import {connect} from'react-redux';
import {leftLinkRight} from './actions'
import Supertop from '../super/supertop.js';
import Superleft from '../super/superleft.js';
import {Link, hashHistory, browserHistory} from 'react-router';
class Super extends Component {
    constructor(props) {
        super(props);
        this.state={
            set:1
        }
    }
    componentDidMount(props){

        if(this.props.location.pathname=='/super/superright'){
            this.setState({
                set:1
            })
        }else if(this.props.location.pathname=='/super/superright1'){
            this.setState({
                set:2
            })
        }
    }

    render() {
        console.log(this.props)
        let children;
        if(this.state.set==1){
            alert(1)
            children=React.cloneElement(this.props.children,{
                grades:this.props.grades[this.props.linkIndex]
            })
        }
        if(this.state.set==2){
            alert(1)
            children=React.cloneElement(this.props.children,{
                grades:this.props.grades
            })
        }
        return (
            <div>
               <Supertop/>

                <Superleft grades={this.props.grades} onLink={this.props.onLink}/>
                {
                    children
                }
            </div>
        );
    }
}
function maneger(state) {
    return {
        // totalData:state,
        grades: state.superLink.grades,
        linkIndex:state.superLink.linkIndex||0
    }
}
const mapDispatchToProps = {
    onLink:leftLinkRight
};
export default connect(maneger,mapDispatchToProps)(Super);

