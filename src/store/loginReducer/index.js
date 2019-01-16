const defaultState={
    login:{}
}
export default (state=defaultState,action)=>{
    if(action.type==='ADD_LOGINUSER'){
        console.log(23)
        return {login:action.login}
    }
    return state;
}