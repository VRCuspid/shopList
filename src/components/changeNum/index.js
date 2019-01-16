import React from 'react' 
import style from  './index.module.css'

class ChangeNum extends React.Component{
    constructor(){
        super()
        this.state={
            num:0,
            show:false
        }
    }
    minus=()=>{
        let { num } = this.state;
        num--;
        this.setState(num<1?{
            num:num,
            show:false
        }:{
            num
        })
        const { numChanged } = this.props;
        numChanged(num)
    }
    plus=()=>{
        let { num } = this.state;
        num++;
        this.setState({
            num:num,
            show:true
        })
        const { numChanged } = this.props;
        numChanged(num)
    }
    render(){

        const { show } = this.state;
        const isShow=show?'inline-block':'none'
        
        return (
            <div>
                <span style={{display:isShow}} onClick={this.minus} className={ style.minus }  >-</span>
                <span style={{display:isShow}} className={ style.num }>{this.state.num}</span>
                <span onClick={this.plus} className={ style.plus } >+</span>
            </div>
        )
    }
}

export default ChangeNum