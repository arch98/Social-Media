import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Components/Index.js';
import Well from './Components/Well.js';

class App extends Component{
  
  render(){
    return(
     <Router>
        <Route exact path ="/" component = {Index}/>
        <Route path ="/acc" component = {Well}/>
     </Router>
    )
  }
}

export default App;
