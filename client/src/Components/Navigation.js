import React,{Component} from 'react';
import {Navbar,Form, Nav,Button,FormControl} from 'react-bootstrap';
import '../Styles/Navigation.css';
import 'font-awesome/css/font-awesome.min.css';
import {Redirect} from 'react-router-dom';

class Navigation extends Component{
    constructor(props){
        super(props);

        this.state ={
            logout:false
        }
        this.send = this.send.bind(this);
    }

    send(){
        this.setState({
            logout:true
        });
    }



    render(){
        return(
            <div className ="Navigation">
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand href="#" id="title"><h3>Social Note</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className = "but">
                        <Nav.Link href="#" id="move"><h4>Home</h4></Nav.Link>
                        <Nav.Link href="#" id="move"><h4>Account</h4></Nav.Link>
                        <Nav.Link href="#" id="move"><h4>Trending</h4></Nav.Link>
                        <Nav.Link href="#" id="move"><h4>Chat</h4></Nav.Link>
                    </Nav>
                
            </Navbar.Collapse>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="in" />
                  <Button id="btn" ><i className="fa fa-search-plus" aria-hidden="true"></i></Button>
                 </Form>
                <Button onClick = {this.send}>Logout</Button>
            </Navbar>
            {this.state.logout === true? <Redirect to = {"/"} /> : null}
            </div>
        )
    }
}

export default Navigation;