import React,{Component} from "react";
import "./job.css";
import Joblist from "../pub/joblist";



class Job extends Component{
	 
     constructor(){
     	super();

     	

        this.state={
           list:   [
                   {
                        
                        "positionId": 3272309,
                        "positionName": "市场督导",
                        "city": "上海",
                        "createTime": "今天 15:12",
                        "salary": "7k-9k",
                        "companyId": 198420,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/1E/44/CgpFT1kQFhiAY-63AA5H911ffs0601.png",
                        "companyName": "Hi电",
                        "companyFullName": "上海数朋网络科技有限公司"
                    },
                    {
                        "positionId": 3274160,
                        "positionName": "资深UI设计师",
                        "city": "杭州",
                        "createTime": "今天 15:05",
                        "salary": "10k-16k",
                        "companyId": 150502,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/5F/A2/Cgp3O1f3BJyAcvoXAAAS7rYd9mU698.png",
                        "companyName": "东箭企业",
                        "companyFullName": "完整家居（浙江）有限公司"
                    },
                    {
                       
                        "positionId": 3274166,
                        "positionName": "资深UE设计师（用户体验、用户研究）",
                        "city": "杭州",
                        "createTime": "今天 15:05",
                        "salary": "10k-16k",
                        "companyId": 1505021,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/5F/A2/Cgp3O1f3BJyAcvoXAAAS7rYd9mU698.png",
                        "companyName": "东箭企业",
                        "companyFullName": "完整家居（浙江）有限公司"
                    },
                    {
                        
                        "positionId": 3258317,
                        "positionName": "高级Java开发工程师（测试工具开发）",
                        "city": "广州",
                        "createTime": "今天 14:57",
                        "salary": "15k-25k",
                        "companyId": 4760,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/00/0B/Cgo8PFTUWBqAZcCUAAB5VCB8kCc475.jpg",
                        "companyName": "唯品会",
                        "companyFullName": "唯品会（中国）有限公司"
                    },
                    {
                       
                        "positionId": 3273162,
                        "positionName": "融资顾问FA",
                        "city": "北京",
                        "createTime": "今天 14:56",
                        "salary": "10k-20k",
                        "companyId": 76555,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/2E/12/CgYXBlV8L6WATCi_AAANb6VnYrc900.jpg?cc=0.06900829053483903",
                        "companyName": "猎云网",
                        "companyFullName": "北京猎云万罗科技有限公司"
                    },
                    {
                      
                        "positionId": 3258582,
                        "positionName": "行政前台",
                        "city": "深圳",
                        "createTime": "今天 14:55",
                        "salary": "3k-4k",
                        "companyId": 30637,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/3D/5C/CgYXBlW4ReqAUC-wAAAf2NfJH9Y991.png",
                        "companyName": "同天下",
                        "companyFullName": "深圳同天下科技有限公司"
                    },
                    {
                        
                        "positionId": 3274176,
                        "positionName": "高级java开发工程师",
                        "city": "北京",
                        "createTime": "今天 14:55",
                        "salary": "18k-30k",
                        "companyId": 12189,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/44/AC/Cgo8PFXWyMeAeCDBAAFKZyCfg0s140.JPG",
                        "companyName": "天弘基金",
                        "companyFullName": "天弘基金管理有限公司"
                    },
                    {
                        
                        "positionId": 3274014,
                        "positionName": "NLP工程师",
                        "city": "武汉",
                        "createTime": "今天 14:52",
                        "salary": "15k-30k",
                        "companyId": 198518,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/20/4E/CgpFT1kTzbGAQYtoAAAKpRcBu_s528.jpg",
                        "companyName": "灵韵科技",
                        "companyFullName": "上海灵韵实业有限公司"
                    },
                    {
                       
                        "positionId": 3274711,
                        "positionName": "应届生岗位-平面设计（游戏）",
                        "city": "深圳",
                        "createTime": "今天 14:51",
                        "salary": "4k-6k",
                        "companyId": 153039,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/66/4C/CgqKkVgJzdeAUZW_AAATnExqynw565.jpg",
                        "companyName": "鲸旗游戏",
                        "companyFullName": "深圳市鲸旗天下网络科技有限公司"
                    },
                    {
                       
                        "positionId": 3273886,
                        "positionName": "JAVA游戏服务器开发工程师",
                        "city": "成都",
                        "createTime": "今天 14:50",
                        "salary": "10k-20k",
                        "companyId": 151642,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/62/9F/CgqKkVf_BFKASXocAAAPGq-dhZA282.jpg",
                        "companyName": "伟航创达",
                        "companyFullName": "成都伟航创达科技有限责任公司"
                    },
                    {
                       
                        "positionId": 3258770,
                        "positionName": "新媒体&amp;活动运营官员",
                        "city": "上海",
                        "createTime": "今天 14:50",
                        "salary": "4k-7k",
                        "companyId": 1755761,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/B5/8E/CgqKkVi-eauAOpfxAAAuDYIxQnU077.jpg",
                        "companyName": "黑苹果青年",
                        "companyFullName": "上海零点青年公益创业发展中心"
                    },
                    {
                      
                        "positionId": 3258745,
                        "positionName": "筹资&amp;项目评估官员",
                        "city": "上海",
                        "createTime": "今天 14:50",
                        "salary": "4k-6k",
                        "companyId": 175576,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/B5/8E/CgqKkVi-eauAOpfxAAAuDYIxQnU077.jpg",
                        "companyName": "黑苹果青年",
                        "companyFullName": "上海零点青年公益创业发展中心"
                    },
                    {
                       
                        "positionId": 3260293,
                        "positionName": "手游联运专员",
                        "city": "广州",
                        "createTime": "今天 14:49",
                        "salary": "5k-10k",
                        "companyId": 29750,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/00/42/Cgo8PFTUXM-ADbYaAABkFvdxFTs993.png",
                        "companyName": "天拓游戏",
                        "companyFullName": "广东星辉天拓互动娱乐有限公司"
                    },
                    {
                        
                        "positionId": 3274096,
                        "positionName": "用户运营支持工程师",
                        "city": "北京",
                        "createTime": "今天 14:49",
                        "salary": "6k-12k",
                        "companyId": 33282,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/00/09/Cgo8PFTUWBGALraJAAAeTBKK4IU791.png",
                        "companyName": "好未来",
                        "companyFullName": "北京世纪好未来教育科技有限公司"
                    },
                    {
                        
                        "positionId": 3259284,
                        "positionName": "产品经理（五个方向）",
                        "city": "北京",
                        "createTime": "今天 14:49",
                        "salary": "20k-40k",
                        "companyId": 33281,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/00/09/Cgo8PFTUWBGALraJAAAeTBKK4IU791.png",
                        "companyName": "好未来",
                        "companyFullName": "北京世纪好未来教育科技有限公司"
                    }
                ]
        }
     
        this.getMore=this.getMore.bind(this);
     }
     conponentWillMount(){
        
     }
	render(){
		return(
            <div className="base"> 
               <header>拉勾网</header>
               <Joblist list={this.state.list}></Joblist>
               <div className="more" onClick={this.getMore}>加载更多</div>
            </div>  
			)
	}
	getMore(){
        var list1=this.state.list;
        var res=[{
                       
                        "positionId": 3260293,
                        "positionName": "手游联运专员",
                        "city": "广州",
                        "createTime": "今天 14:49",
                        "salary": "5k-10k",
                        "companyId": 297501,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/00/42/Cgo8PFTUXM-ADbYaAABkFvdxFTs993.png",
                        "companyName": "天拓游戏",
                        "companyFullName": "广东星辉天拓互动娱乐有限公司"
                    }],       
            Joblist=[...list1,...res];        
          this.setState({
            list:Joblist
          })     
   
	}
}

export default Job;