import Login from '@/page/loginPage'
import Register from '@/page/registerPage'
import Home from '@/page/indexPage'
import goodsList from '@/page/goods'
import ShopCar from '@/page/shopcar/index'
import Detail from '@/page/detail/index'
import QQMusic from '@/page/goodList/index'
import ShopList from '@/page/shopList/index'
const routers=[
    {
        path:'/login',
        component:Login,
        exact:true
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/home',
        component:Home
    },{
        path:'/goodsList',
        component:goodsList  // 商品列表页 
    },{
        path:'/shopcar',
        component:ShopCar
    },{
        path:'/detail', // 详情页 
        component:Detail
    },{
        path:'/qqmusic',
        component:QQMusic
    },{
        path:'/shopList', // 店铺页
        component:ShopList
    }
]
export default routers