import Head from '@/components/head';
import React from 'react';
import './index.css';
import axios from 'axios';
import {connect} from 'react-redux';
class Login extends React.Component{
    login=()=>{
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        if(username.trim().length<1||password.trim().length<1) {return}
        axios.get('/api/login',{params:{
            username,
            password
        }}).then(res=>{
            if(res.data.code===1){
                const userInfo=res.data.msg;
                console.log(res.data)
                this.props.addLoginUser({type:'ADD_LOGINUSER',login:userInfo})
                alert('登录成功')
                this.props.history.push('/shopList')
            }else{
                console.log(res.data)
            }
        })
    }
    render(){
        return (
                <div className="app">
                    <Head bgcolor={'#31C27C'} title={'登录页'}/>
                    <div className="body">
                        <ul className="loginList">
                            <li>
                                <input type="text" defaultValue="zhangsan" ref="username" placeholder="用户名" />
                            </li>
                            <li>
                                <input type="password" defaultValue="zhangsan123" ref="password" placeholder="密码" />
                            </li>
                            <li>
                                <button className="login" onClick={this.login}>登录</button>
                            </li>
                            <li>
                                <a href="/register">没账号？赶紧注册一个吧</a>
                            </li>
                            <li>
                            <a href="/qqmusic">空闲时间听会音乐</a>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state.loginReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addLoginUser:(action)=>{
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)