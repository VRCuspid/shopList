import Head from '@/components/head'
import React from 'react'
import {connect} from 'react-redux'

class Index extends React.Component{
    render(){
        console.log(this.props.login)
        return (
                <div className="app">
                    <Head bgcolor={'#31C27C'} title={"首页"}/>
                    <div className="body">
                        这是首页
                    </div>
                </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state.loginReducer
}
export default  connect(mapStateToProps)(Index)