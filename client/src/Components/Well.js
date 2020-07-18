import React,{Component} from 'react';
import Navigation from './Navigation.js';
import Head from './Head.js';
import Interface from './Interface.js';



class Well extends Component{

  render(){
    return (
    <div>
        <Navigation />
         <Head/>
         <Interface/>
    </div>
  );
  }
}

export default Well;
