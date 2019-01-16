import React from 'react'
import Head from '@/components/head'
import './index.css'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import ShowEachItem from '@/components/showEachItem'
import getShopListData from '@/store/action/shopListAction'

const LeftList=(props)=>{
    const { typeList } = props;
    return (
        typeList.map((item,i)=>{
            return <li key={i} onClick={()=>{props.clickScroll(i)}} > {item.type}</li>
        })
    )
}

const RightList = (props)=>{
    const { itemList } = props;
    return (
        itemList.map(function(item,i){
            return <li key={i} className={'case-'+i}>
            <p className="listTitle">{item.type}</p>
            {
                item.list.map(function(eachItem,ind){
                    return <ShowEachItem key={ind} eachItem={eachItem}/>
                })
            }
        </li>
        })
    )
}



class ShopList extends React.Component{
    constructor(){
        super()
        this.state={
            shopList:[{type:[],list:[]}],
            bscroll:null,
        }
    }
    componentDidMount(){
        const bscroll=new BScroll('.rightList',{
            probeType:2,
            click:true
        });
        this.setState({
            bscroll
        })
        this.props.getShopList()
    }
    clickScroll=(ind)=>{
        const { bscroll } = this.state;
        bscroll.scrollToElement('.case-'+ind,500)
    }
    render(){
        const { shopList }=this.props;
        const { choosenList } =this.props;
        const len = choosenList.map(function(item){
            return item.count
        }).reduce(function(item,i){
            return item*1+i*1
        },0);
        let price = choosenList.map(function(item,i){
            return item.price*item.count;
        }).reduce((item,i)=>{
            return item*1+i*1
        },0)
        return (
            <div className="app">
                <Head bgcolor="#31C27C" title="商品列表" />
                <div className="shopTitle">
                    <div className="imgContainer">
                        <img src="https://p0.meituan.net/waimaipoi/abcb99d12a1e59fd3e640253664e7fd29018.jpg" alt="" />
                    </div>
                    <div className="shopInfo">
                        <p>麦当劳旗舰店</p>
                        <p className="littleFont">The century-old shop began in <i style={{fontStyle:'inherit'}}>1936</i></p>
                    </div>
                </div>
                <div className="body devideList">
                    <ul className="leftList">
                        <li onClick={()=>{
                            this.clickScroll(0)
                        }}>全部商品</li>
                        <LeftList typeList={ shopList } clickScroll={ this.clickScroll } />
                    </ul>
                    <div className="rightList">
                        <ul >
                            <RightList itemList={ shopList }/>
                        </ul>
                    </div>
                </div>
                <h3 className="countList">
                    <p>
                        <i>已选{len}件商品</i>
                        <i>￥{price}.00</i>
                    </p>
                    <span>去结算</span>                
                </h3>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state.chooseGoodsReducer
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getShopList:()=>{
            dispatch(getShopListData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopList)