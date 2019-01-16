import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
const ShowCardList=(props)=>{
    const list=props.list;
    return(
        <li >
            <div className="itemImg">
                <img alt="" src={`http://y.gtimg.cn/music/photo_new/T002R90x90M000${list.data.albummid}.jpg?max_age=2592000`} />
            </div>
            <div className="itemInfo">
                {list.data.songname}
                {list.data.singer.map(function(item,i){
                    return <div key={item.id}>{item.name}</div>
                })}
            </div>
        </li>
    )
}
 class GoodList extends React.Component{
    render(){
        const {list}=this.props;
        return (
            <div>
                goodList
                <hr/>
                <ul className="Item">
                    {
                        list.map((item)=>{
                            return <ShowCardList list={item} key={item.data.songmid}></ShowCardList>
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        const url='/getSongList'
        const {updata}=this.props;
        axios.get(url).then((res)=>{
            const action={
                type:'UPDATE',
                list:res.data.data.songlist
            }
            updata(action)
        })
    }
}

const mapStateToProps = (state) => {
    return state.goodListReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updata:(action)=>{
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GoodList)