import React from 'react'
import style from './index.module.css'
export default class Head extends React.Component{
    static defaultProps={
        title:'这是标题',
        bgcolor:'#45C6F3'
    }
    render(){
        return (
            <div className={style.head} style={{background:this.props.bgcolor}}>
                {this.props.title}
            </div>
        )
    }
}