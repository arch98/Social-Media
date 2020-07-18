import React,{Component} from 'react';
import {Button,Form} from 'react-bootstrap';
import '../Styles/Signup.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            result:false,
            user:"",
            pass:"",
            id : ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    
    }

    handleChange(event){
        var id = event.target.id;
         
        if(id === "user1"){
            this.setState({
                user:event.target.value
            });
        }else if(id === "pass1"){
              this.setState({
                  pass:event.target.value
              });
        }
    }
    
    send(){
         
        const payload ={
            Username : this.state.user,
            Password : this.state.pass,
        }

        this.setState({
            id:this.state.user
        });

        this.setState({
            user:"",
            pass:""
        });

        axios({
            url:"http://localhost:9000/users",
            method:"POST",
            data:payload
        }).then((response)=>{
            console.log(response.data);
            if(response.data === "err"){
                this.setState({
                    result:false
                });
            }else{
                this.setState({
                    result:true
                });
            }
        }).catch(()=>{
            console.log("Error!");
        });
      
        
    }


    render(){
       
        return(
          
            <div className = "Box">
            {this.state.result === true ? <Redirect to ={'/acc/'+this.state.id}/>:null}
               <Form>
                <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control   onChange = {this.handleChange} id="user1" value ={this.state.user}/>
                </Form.Group>
                 <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control  onChange = {this.handleChange} id="pass1" value ={this.state.pass}/>
                    </Form.Group>
                    <Button variant="primary" onClick = {this.send}>
                       Submit
                     </Button>
                  </Form>
                  </div>
        )
    }
}

export default Login;