const defaultState={
    choosenList:[],
    shopList:[]
}
export default (state=defaultState,action)=>{
    if(action.type==='ADD_EACHITEM'){
        return {
            choosenList: [...action.list],
            shopList: state.shopList
        }
    }
    if(action.type==='GET_SHOPLIST'){
        return {
            shopList: [...action.shopList],
            choosenList: state.choosenList
        }
    }
    return state
}