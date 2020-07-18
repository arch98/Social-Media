import React,{Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import '../Styles/Head.css';

class Head extends Component{
    render(){
        return(
            <Jumbotron>
               <img alt="hehe" src = {require("./pictures/maryjane.jpg")} id="photo"/>
               <h1 id="name">Mary Jane</h1>
               <h5 id="name">Share awesome stories with your friends and grow!</h5>
            </Jumbotron>
        )
    }
}

export default Head;