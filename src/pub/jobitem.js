import React,{Component} from "react";
import "./jobitem.css";

class Jobitem extends Component{
	
	render(){
		let {list2}=this.props;
		return(
			
                 <li className="con">
                    <div className="left">
                       <dl>
                          <dt><img src={list2.companyLogo} alt="tupian"/></dt>
                          <dd>
                            <h2>{list2.companyName}</h2>
                            <p className="txt1">{list2.positionName}[{list2.city}]</p>
                            <p className="txt2">{list2.createTime}</p>
                          </dd>
                       </dl>
                    </div>
                    <div className="right">{list2.salary}</div> 
                 </li>          
			)
	}
}
export default Jobitem;