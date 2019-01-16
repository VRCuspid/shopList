import { createStore,combineReducers,applyMiddleware } from 'redux'
import loginReducer from './loginReducer'
import goodsReducer from './goodsReducer'
import goodListReducer from './goodListReducer'
import chooseGoodsReducer from './chooseGoodsReducer'
import shopListReducer from './shopListReducer'
import thunk from 'redux-thunk'

const reducer=combineReducers({
    loginReducer,
    goodsReducer,
    goodListReducer,
    chooseGoodsReducer,
    shopListReducer
})
const store=createStore(reducer,applyMiddleware(thunk))

export default store