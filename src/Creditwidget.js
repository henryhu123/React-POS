import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';
import {AiOutlineClose}from 'react-icons/ai';

class Creditwidget extends React.Component{
    constructor(props){
        super(props);
        this.state=({credit:"",
                    });
    }

    handleChange(e){
        this.setState({credit:e.target.value});
    }

    render(){

        let icon;

        if(this.state.credit==""){
            icon = <label>no credit input</label>
        }
        else{
            icon = this.props.total>this.state.credit?<AiOutlineClose style={{color:'red'}}/>:<AiOutlineCheck style={{color:'green'}}/>
        }

        return(
            <div>
                <label>Please enter credit:
                    <input type='number' onChange={(e)=>this.handleChange(e)}></input>
                </label>
                <div style={{textAlign:'center'}}>{icon}</div>
            </div>
        )
    }
}

export default Creditwidget ;