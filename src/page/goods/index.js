import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ShowGoodsLists from './showGoodsLists'
import Head from '@/components/head'
class Goods extends React.Component{
    constructor(){
        super();
        this.state={
            goodsList:[]
        }
    }
    render(){
        const {goodsList}=this.state
        return (
            <div className="app">
                <Head bgcolor={'#31C27C'} title={'商品列表'}/>
                <ul className="goods">
                    {
                        <ShowGoodsLists goodsList={goodsList} addGoodsList={this.addGoodsList} /> //函数组建
                    }
                    <div onClick={()=>{
                        this.props.history.push('/shopcar') // 点击购物车跳转到购物车页
                    }} className="toShopCar iconfont icon-gouwuche"></div>
                </ul>
           </div>
        )
    }
    addGoodsList=(item)=>{
       this.props.pushItem(item,this.props.goodsList) // 点击添加到购物车
    }
    componentDidMount(){
        axios.get('/getGoodsLists').then(res=>{ // 获 取 数 据
            this.setState({
                goodsList:res.data.msg
            })
        })
    }
}
const mapStateToProps=(state)=>{  
    return state.goodsReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        pushItem:(action,goodsList)=>{ // 添加到 store 中
            const flagItem=goodsList.filter((item)=>{  // 过滤数据
                return item.id===action.id
            });
            if(flagItem.length<1){
                goodsList.push({...action,count:1,isCheck:false}) // (#`O′) 未添加过的数据直接push
            }else{
                goodsList.forEach((item,index)=>{
                    if(item.id===action.id){
                        goodsList[index]={...item,count:++item.count}  // 添加过的数据 count 属性++
                    }
                })
            }
            dispatch({type:'PUSH_ITEM',goodsList}) // 上传到 store 仓库中
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Goods) 