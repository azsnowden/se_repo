import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component{

    render(){
       return(
           <div classname="box">
               <Link to="/">Latest</Link>
               <Link to="/search">Search</Link>
           </div>
       )

        
    }

}

export default NavBar;