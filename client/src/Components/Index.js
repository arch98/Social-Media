import React,{Component} from 'react';
import {Col,Row,Container,Jumbotron} from 'react-bootstrap';
import Signup from './Signup.js';
import Login from './Login.js';
import '../App.css';


class Index extends Component{
  
  render(){
    return(
      <div className = "Index">
        <Jumbotron>
        <h1 id="tit">Welcome to Social Mate!</h1>
        </Jumbotron>
        <Container>
         <Row>
           <Col>
             <h5 id="title1">Sign Up!</h5>
             <Signup/>
            </Col>
            <Col><h5 id="title1">Login!</h5><Login/></Col>
         </Row>
      </Container>
      
      </div>
    )
  }
}

export default Index;
