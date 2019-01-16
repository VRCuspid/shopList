import Head from '@/components/head'
import React from 'react'

export default class Register extends React.Component{
    render(){
        return (
                <div className="app">
                    <Head bgcolor={'#31C27C'} title={"注册页"}/>
                    <div className="body">
                        Register
                    </div>
                </div>
        )
    }
}