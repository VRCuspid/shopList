const defaultState={
    list:[]
}
export default (state=defaultState,action)=>{
    if(action.type==='UPDATE'){
       console.log(action)
        return {...state,list:action.list}
    }
    return state
}