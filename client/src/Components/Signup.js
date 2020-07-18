import React,{Component} from 'react';
import {Button,Form} from 'react-bootstrap';
import '../Styles/Signup.css';
import axios from 'axios';

class Signup extends Component{
    constructor(props){
        super(props);

        this.state ={
            id:" ",
            name:"",
            pass:""
        }

        this.handleChange =  this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }

    handleChange(event){
        var id = event.target.id;
         
        if(id === "name"){
            this.setState({
                name:event.target.value
            });
        }else if(id === "user"){
            this.setState({
                id:event.target.value
            });
        }else if(id === "pass"){
            this.setState({
                pass:event.target.value
            });
        }
    }

    send(){

         const payload = {
             Name : this.state.name,
             Username : this.state.id,
             Password :this.state.pass
         };
        
         this.setState({
             name:"",
             id:"",
             pass:""
         });

          axios({
              url:"http://localhost:9000",
              method:"POST",
              data:payload
          }).then((response)=>{
              console.log("Done!");
          }).catch(()=>{
              console.log("Error!");
          });
    }

    render(){
        return(
            <div className = "Box">
               <Form>
               <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name"  onChange = {this.handleChange} id="name" value ={this.state.name}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="user"  onChange = {this.handleChange} id="user" value ={this.state.id}/>
                </Form.Group>
                 <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control   onChange = {this.handleChange} id="pass" value ={this.state.pass} />
                    </Form.Group>
                    <Button variant="primary" onClick ={this.send}>
                       Submit
                     </Button>
                  </Form>
            </div>
        )
    }
}

export default Signup;