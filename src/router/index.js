import React from 'react' 
import {Switch,Route} from 'react-router-dom'
export default class RouterView extends React.Component {
    render(){
        return (
            <Switch>
                {this.props.routers.map((item,i)=>{
                    return <Route path={item.path} exact={item.exact?true:false} key={i} render={(match)=>{
                        return <item.component {...match} routers={item.routers} /> 
                    }} />
                })}
            </Switch>
        )
    }
}