import React from 'react'
import ChangeNum from '@/components/changeNum'
import { connect } from 'react-redux'
class ShowEachItem extends React.Component{
    numChanged=(num)=>{
        if(!num) return;
        const action={
            type:'ADD_EACHITEM',
            list:{...this.props.eachItem,count:num}
        }
        this.props.addGoods(action,[...this.props.choosenList])
    }
    render(){
        const { eachItem } = this.props;
        return (
            <div>
                <dl className="listItem">
                    <dt className="img80">
                        <img src="https://p0.meituan.net/waimaipoi/abcb99d12a1e59fd3e640253664e7fd29018.jpg" alt="" />
                    </dt>
                    <dd>
                        <p className="itemTitle">{ eachItem.foodName }</p>
                        <p className="itemInfoAbout">可选不辣 微辣 加辣</p>
                        <div className="itemPrice"><span>￥{ eachItem.price }.00</span><ChangeNum numChanged={this.numChanged} /></div>
                    </dd>
                </dl>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state.chooseGoodsReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addGoods:(action,list)=>{
            const arr = list.filter(function(item){
                return item.foodName===action.list.foodName;
            })
            if(arr.length < 1){
                list.push(action.list)
            }else{
                list.forEach((item,index)=>{

                    if(item.foodName===action.list.foodName){
                        list[index]={...action.list}
                    }
                })
            }
            dispatch({...action,list:[...list]})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowEachItem) 