import GoodList from '@/components/goodList'
import Rank from '@/components/rank'
import Search from '@/components/search'
const routers=[
    {
        path:'/',
        component:GoodList,
        exact:true
    },
    {
        path:'/rank',
        component:Rank
    },
    {
        path:'/search',
        component:Search
    }
]
export default routers