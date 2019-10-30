import React, {Component} from 'react';
import axios from 'axios'

class Search extends Component{

    
        constructor(){
            super();
            console.log("Constructor ran")
            this.state = {comicData: []}
            this.handleSubmit = this.handleSubmit.bind(this)
        }
    
    handleSubmit(e){
        e.preventDefault();
        console.log("user clicked something good")
        const comicNumber = document.querySelector('#search-term').value;
        console.log(comicNumber)
        const searchUrl = `https://xkcd.now.sh/?comic=${comicNumber}`;
        const movieData = axios.get(searchUrl);
        movieData.then((resp)=>{
            console.log(resp.data);
            this.setState({
                comicData: resp.data
            })
        })
    }

            render(){
                console.log("COmponent Rndered");
                console.log(this.state.comicData);
                const comicIMG = this.state.comicData.img
                console.log(comicIMG)
    
                return(
                    <div className="container">
        
                        <div className="row">
                            <form onSubmit={this.handleSubmit}>
                                <input id="search-term" type="text" placeholder="Enter a comic number" />
                                <input type="submit" className="btn" value="Search!" />
                            </form>
                        </div>
                        <div className = "comic">
                            <img id = "comic_img" alt="" src ={comicIMG}></img>
                        </div>
        
                        
                    </div>
                )
            }
        }




export default Search;