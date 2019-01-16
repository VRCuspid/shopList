import React from 'react'
import {NavLink} from 'react-router-dom'
const ShowGoodsLists = (props)=>{  // 函数组建封装
    const {goodsList} = props;
    return (
        goodsList.map((item)=>{
            return <li key={item.id}>
                <NavLink to={{pathname:'/detail',state:{id:item.id}}}>
                <div className="goodsImg"><img src={item.imgUrl} alt={item.productName} /></div>
                </NavLink>
                <div className="goodsInfo">
                    <h3 className="goodsInfoTitle">{item.productName}</h3>
                    <ol className="goodsInfoList">
                        <li>
                            产地:{item.from}
                        </li>
                        <li>
                            价格:{item.productPrice}
                            <button className="goodsAdd" onClick={()=>{
                                props.addGoodsList(item)
                            }}>+</button>
                        </li>
                    </ol>
                </div>
                
            </li>
        })
    )
}
export default ShowGoodsLists