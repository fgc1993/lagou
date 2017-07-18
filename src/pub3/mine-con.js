import React,{Component} from "react";
import "./mine-con.css";
import {Link} from 'react-router';
class MineCon extends Component{
	render(){
		return(
           <div className="base1">
              <header>拉勾网</header>
              <div className="base_con1">
                 <Link to="/login"><p>登录/注册</p></Link>
              </div>
              <ul className="basecon1">
                <li>投递</li>
                <li>面试</li>
                <li>邀约</li>
                <li>收藏</li>
              </ul>
           </div>
			)
	}
}
export default MineCon;