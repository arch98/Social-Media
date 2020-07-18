import React,{Component} from 'react';
import '../Styles/Interface.css';
import Post from './Post.js';

class Interface extends Component{
    render(){
        return(
        <div className ="Interface">
           <Post/>
        </div>
        )
    }
}

export default Interface;