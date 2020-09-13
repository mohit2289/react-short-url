import React from 'react';
import './App.css';
import ShortLink from './components/ShortLink'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Stats from './components/Stats'

function App() {
  return (
    <div className="App">
      {/* <Router>       
      <Route path = "/" exact ><ShortLink /> </Route>     
         <Route  path = "/stats" exact>
            <Stats />
         </Route>    
     </Router> */}

       <Router>
       <Route exact path = "/" component = {ShortLink} />        
       <Route exact path = "/stats" component = {Stats} /> 
     </Router>
    </div>
  );
}

export default App;
