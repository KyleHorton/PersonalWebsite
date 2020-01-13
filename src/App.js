import React from 'react';
import './App.css';
import Main from "./Main"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Work from "./Work"
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {


  return(
    <Router>
      <Navbar />
      <div className="App">
        <Route path="/" exact component={Main}/>
        <Route path="/work" exact component={Work}/>
    </div>
    <Footer />    
    </Router>
  );
}

export default App;
