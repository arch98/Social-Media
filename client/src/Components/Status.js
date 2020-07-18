import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import '../Styles/Status.css';

class Status extends Component{
       
       render(){
           return(
           <div className = "recv">
             <h5>Mary Jane updated her status!</h5>
               <p>{this.props.data}</p>
                <Button id="btn"><i className="fa fa-thumbs-up" aria-hidden="true"></i></Button>
                <Button id="btn"><i className="fa fa-heart" aria-hidden="true"></i></Button>
                <Button id="btn"><i className="fa fa-share-alt" aria-hidden="true"></i></Button>
             </div>
           )
       }
}

export default Status;