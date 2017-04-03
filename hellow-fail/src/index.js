import React from 'react';
import ReactDOM from 'react-dom';
import All from './alls/all.js';
import RightBox from './student1/rightbox.js';
import RightBox1 from './student2/rightbox(1).js';
import RightBox2 from './student3/rightbox(2).js';
import Super from './alls/super.js';
import Login from './alls/login.js';
import SuperRight1 from './super/superright1/superright1.js';
import SuperRight from './super/superright/superright.js'
import { Router, Route, hashHistory,IndexRoute,Redirect,IndexRedirect} from 'react-router';
import {createStore} from 'redux';
import Totalreducers from './reducers';
let store=createStore(Totalreducers);
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router history={hashHistory}>

                <Route path="/login" component={Login}/>
                <Route path="/super" component={Super}/>
                     <IndexRoute component={Super}/>
                    <Route path="superright1" component={SuperRight1}/>
                    <Route path="superright" component={SuperRight}/>
                <Route/>
                <Route path="/student" component={All}>

                    <Route path="repos" component={RightBox}/>
                    <Route path="about" component={RightBox1}/>
                    <Route path="details" component={RightBox2}/>
                </Route>
            </Router>
        </Router>
    </Provider>
 ,
  document.getElementById('root')
);
