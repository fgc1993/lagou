import React, { Component } from 'react';
import './App.css';
import {Link,IndexLink} from 'react-router';
import "./font/iconfont.css";

class App extends Component {
  render() {
    return (
    	<div className="app">
             {this.props.children}
	         <ul className="footer">
	           <li><IndexLink to="/" activeClassName="active" className="zi"><span className="iconfont icon-zhuye"></span>职位</IndexLink></li>
	           <li><Link to="/search" activeClassName="active" className="zi"><span className="iconfont icon-sousuo"></span>搜索</Link></li>
	           <li><Link to="/mine" activeClassName="active" className="zi"><span className="iconfont icon-wode"></span>我的</Link></li>
	          </ul>
	        </div>
    )
  }
}

export default App;
