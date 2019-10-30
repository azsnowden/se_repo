import React, {Component} from 'react';
import '../components/NavBar.css'
import {Link} from 'react-router-dom';

class NavBar extends Component{

    render(){
       return(
           <div classname="navbox">
               <Link to="/" class="latest">
                   Latest
                </Link>
               <Link to="/search" class ="search">
                   Search
                </Link>
           </div>
       )

        
    }

}

export default NavBar;