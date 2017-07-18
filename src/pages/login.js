import React,{Component} from "react";
import "./login.css";
import {hashHistory} from 'react-router';


class Login extends Component{
	constructor(){
		super();
		this.state={
			usename:""
		}
	
		this.handleChange=this.handleChange.bind(this);
	}
	render(){
		return(
          <div className="box">
               <div className="top1">
               	  	<input type="text" placeholder="已验证手机/邮箱" value={this.state.usename} onChange={this.handleChange}/>
               	  	<input type="password" placeholder="密码"/>
               </div>  
               <p className="p1"><button onClick={()=>{this.goLogin()}}>登录</button></p>
               <p className="p2">还没有账号</p>
               <p className="p3"><button>注册</button></p>
          </div>
			)
	}
	goLogin(){
		if(!this.state.usename){
			alert("请输入用户名");
			return;
		}
		hashHistory.push("/");
	}
	handleChange(e){
		this.setState({
			usename:e.target.value
		})
	}
}
export default Login;