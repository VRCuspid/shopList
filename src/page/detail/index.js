import React from 'react'
import Head from '@/components/head'
import axios from 'axios'
class Detail extends React.Component{
    constructor(){
        super()
        this.state={
            detailData:{}
        }
    }
    componentDidMount(){
        const id=Number(this.props.location.state.id);
        axios.get('/getDetailData?id='+id).then(res=>{
            this.setState({
                detailData:res.data.msg
            })
        })
    }
    render(){
        console.log(this.props)
        const { detailData } =this.state;
        console.log(detailData)
        return (
            <div className="app">
                <Head bgcolor={'#31C27C'} title={"详情页"}/>
                <div className="detailInfo">
                    <div className="detailImg">
                        <img src={detailData.imgUrl} alt=""/>
                    </div>
                    <ul className="detailAbout">
                        <li>
                            <span style={{display:'flex',alignItems:'center'}}>{detailData.productName}</span>
                            <div className="detailCare">
                                <span className="iconfont icon-shoucang cf00"></span>
                                <span className="font">关注</span>
                            </div>
                        </li>
                        <li>
                            <span>
                               <i style={{fontSize:'12px'}} className="cf00">￥</i>
                               <em className="cf00" style={{fontWeight:'bold'}}>{detailData.productPrice}</em>
                               <i className="cf00" style={{fontSize:'12px'}}>.00 </i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Detail