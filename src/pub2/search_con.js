import React,{Component} from "react";
import "./search_con.css";
import "../font/iconfont.css";


class Searcha extends Component{
	constructor(){
		super();
		this.state={
			val:""
		}
		this.handleChange=this.handleChange.bind(this);
	}
	render(){
		return(
            <div className="base">
                <header>拉勾网</header>
                 <div className="base_con">
                   <ul>
					<li>
                     北京
					</li> 
					<li><input type="text" placeholder="搜索职位和公司"  value={this.state.val} onChange={this.handleChange}/></li>
					<li><span className="iconfont icon-sousuo"></span></li>
                   </ul> 
                 </div>
            </div> 
			)
	}
	handleChange(e){
		this.setState({
			val:e.target.value
		})
	}
}

export default Searcha;