import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Job from "./pages/job";
import Mine from "./pages/mine";
import Search from "./pages/search";
import Login from "./pages/login";

ReactDOM.render(
        <Router history={hashHistory}>
           <Route path="/" component={App}>
           	 <IndexRoute component={Job} />
           	 <Route path="/search" component={Search}></Route>
           	 <Route path="/mine" component={Mine}></Route>
           </Route>
           <Route path="/login" component={Login}></Route>
        </Router>

	, document.getElementById('app'));
registerServiceWorker();
