import React from 'react'
import {connect} from 'react-redux'
import Head from '@/components/head'
class ShopCar extends React.Component{
    constructor(){
        super()
        this.state={ 
            total:0,
            sum:0
        }
    }
    minusItem=(index)=>{ // 商品数量-1
        const item=this.props.goodsList[index];
        item.count--;
        if(item.count<1){
            return item.count=1
        }
        this.props.changeNumber(this.props.goodsList)
        this.computed()
    }
    plusItem=(index)=>{ // 商品数量+1
        const item=this.props.goodsList[index];
        item.count++;
        this.props.changeNumber(this.props.goodsList)
        this.computed()
    }
    componentDidMount(){ // 初始化计算价格和商品个数
        this.computed()
    }
    computed=()=>{  // 计算价格商品价格函数
        const {goodsList} = this.props;
        let tit=0;
        let sum=0;
        goodsList.forEach((item,i)=>{
            if(item.isCheck){
                tit+=item.count;
                sum+=item.count*item.productPrice;
            }
        })
        this.setState({ // 设置状态
            total:tit,
            sum:sum
        })
    }
    render(){
    const {goodsList} = this.props;
    return <div className="app">
            <Head bgcolor={'#31C27C'} title={'商品列表'}/>
            <div className="chooseBox">
                <input type="checkbox" id="chooseAll" onClick={(e)=>{
                    goodsList.forEach(item=>{
                        item.isCheck=e.target.checked;
                    })
                    this.props.checkBoxChange(goodsList)
                    this.computed()
                }} /> 
                <label htmlFor="chooseAll">全选/全不选</label>
            </div>
            <ul className="goods">
                {
                    goodsList.map((item,index)=>{
                        return <li key={item.id}>
                            <div className="goodsImg">
                                <input type="checkbox" checked={item.isCheck?true:false} onChange={
                                    (e)=>{
                                        goodsList[index].isCheck=e.target.checked;
                                        this.props.checkBoxChange(goodsList)
                                        this.computed()
                                    }
                                } />
                                <img src={item.imgUrl} alt={item.productName} />
                            </div>
                            <div className="goodsInfo">
                                <h3 className="goodsInfoTitle">{item.productName}</h3>
                                <ol className="goodsInfoList">
                                    <li>
                                        产地:{item.from}
                                    </li>
                                    <li>
                                        <div className="computed">
                                            <span className="minus" onClick={
                                                ()=>{this.minusItem(index)}
                                            }>-</span>
                                            <span>{item.count}</span>
                                            <span className="plus" onClick={()=>{
                                                this.plusItem(index)
                                            }}>+</span>
                                        </div>
                                        价格:<span style={{color:'#f90',margin:'0 10px'}}>{item.productPrice}</span>元
                                    </li>
                                </ol>
                            </div>
                        </li>
                    })
                }
            </ul>
            <div className="countBox">
                <div>总件数:{this.state.total}</div>
                <div>总金额:{this.state.sum}</div>
            </div>
        </div>
    }
}
const mapStateToProps=(state)=>{
    return state.goodsReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changeNumber:(action)=>{
            dispatch({type:'CHANGENUM',goodsList:action}) // 数量改变的 dispatch
        },
        checkBoxChange:(action)=>{
           dispatch({type:'CHECK_CHANGE',goodsList:action}) // checkbox 选中状态改变的 dispatch
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopCar)