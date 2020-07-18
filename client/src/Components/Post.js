import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import '../Styles/Post.css';
import Status from './Status.js';

class Post extends Component{
    constructor(props){
        super(props);

        this.final = [];       
        this.state ={
            msg:" "
        }

        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }


    handleChange(event){
        var t = event.target.value;
        this.setState({
            msg:t
        })
    }

    send(){
        console.log("HI!");
        this.final.push(this.state.msg);
        this.setState({
            msg:""
        });
    }


    render(){
        return(
            <div className ="Post">
            <div className ="Pos">
                <textarea type ="text" placeholder ="Write your Status!" id="input" value={this.state.msg} onChange ={this.handleChange}/>
                <Button id="send" onClick = {this.send}>Send Post!</Button>
            </div>
              {this.final.map((m)=>(<Status key={Date.now()+1} data = {m}/>))}
            </div>
        )
    }
}

export default Post;