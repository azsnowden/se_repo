import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Comic from './components/Comic'
import Search from './components/Search'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar}/>
        <Route exact path ="/" component= {Comic}/>
        <Route path ="/search" component = {Search}/>
      </Router>
      
    </div>
  );
}

export default App;
