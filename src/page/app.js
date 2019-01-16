import React from 'react'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import RouterView from '@/router'
import routers from '@/router/routerMap'
export default class Login extends React.Component{
    render(){
        return (
            <Router>
                <div style={{width:'100%',height:'100%',display:'flex'}}>
                <Route path="/" exact render={()=>{
                   return <Redirect to='/login'/>
                }} />
                <RouterView routers={routers} />
                </div>
            </Router>
        )
    }
}