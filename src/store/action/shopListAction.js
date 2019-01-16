import axios from 'axios' 

const getData = ()=>{
    return  axios.get('/getShopList')
}
const getShopListData = ()=>{
   return function(dispatch){
        return getData().then(res=>{
            return dispatch( {
                type:'GET_SHOPLIST',
                shopList:[...res.data.msg]
            })
        })
   }
}
export default getShopListData