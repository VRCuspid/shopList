//店铺数据仓库
const defaultState={
    shopList:[]
}
export default (state=defaultState,action)=>{
    if(action.type==='GET_SHOPLIST'){
        return {shopList:[...action.shopList]}
    }
    return state
}