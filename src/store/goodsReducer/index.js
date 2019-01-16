const defaultState={
    goodsList:[{
        productName:'苹果🍎',
        productPrice:8,
        id:1,
        from:'黑龙江',
        imgUrl:'https://goss.veer.com/creative/vcg/veer/1200/veer-127322426.jpg',
        isCheck:false,
        count:1
    }]
}
export default (state=defaultState,action)=>{
    if(action.type==='PUSH_ITEM'){
        console.log(action.goodsList)
        return {...state,goodsList:[...action.goodsList]}
    }
    if(action.type==='CHANGENUM'){
        console.log(action.goodsList)
        return {...state,goodsList:[...action.goodsList]}
    }
    if(action.type==='CHECK_CHANGE'){
        return {...state,goodsList:[...action.goodsList]}
    }
    return state
}