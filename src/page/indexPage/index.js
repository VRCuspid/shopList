import Head from '@/components/head'
import React from 'react'
import './index.css'
import RouterView from '@/router'
import routers from '@/router/routerMap'
import {BrowserRouter as Router,NavLink} from 'react-router-dom'

const ChangeRouter=()=>{
    return (
            <ul className="changeRouterUl">
                <li>
                    <NavLink exact to='/'  activeClassName="navLinkActive" >推荐</NavLink>
                </li>
                <li>
                    <NavLink to='/rank' activeClassName="navLinkActive" >排行</NavLink>
                </li>
                <li>
                    <NavLink to='/search' activeClassName="navLinkActive">搜索</NavLink>
                </li>
            </ul>        
    )
}

export default class Index extends React.Component{
    render(){
        return (
            <Router>
                <div className="apsp">
                    <Head bgcolor={'#31C27C'}/>
                    <ChangeRouter/>
                    <div className="body">
                        <RouterView routers={routers} />
                    </div>
                </div>
            </Router>
        )
    }
}