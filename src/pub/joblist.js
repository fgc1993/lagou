import React,{Component} from "react";
import PropTypes from 'prop-types';
import Jobitem from "./jobitem";

class Joblist extends Component{
	
	render(){
	
		var list1=this.props.list.map(function(ele){
            return <Jobitem list2={ele} key={ele.companyId}></Jobitem>           
		})
		return(
		 <ul>
           {list1}
		 </ul>
		)
	}
}
Joblist.propTypes ={
	list:PropTypes.array
}
export default Joblist;