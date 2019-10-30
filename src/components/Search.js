import React, {Component} from 'react';
import '../components/Search.css'
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
        console.log("user clickedthe submit button")
        const comicNumber = document.querySelector('#searchNumber').value;
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
                const comicTitle = this.state.comicData.alt
                const comicAlt = this.state.comicData.title
                console.log(comicIMG)
                

                if(comicIMG != null)
                {
                    return(
                    <div className="container">
        
                        <div className="row">
                            <form onSubmit={this.handleSubmit}>
                                <div class="searchBox">
                                <input id="searchNumber" class="searchInput" type="text" placeholder="Enter a comic number" />
                                </div>
                                <div class="searchSubmit">
                                <input type="submit" class="searchSubmit" value="Search!" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <img id= "comic_img" class="searchImage" title={comicTitle} alt={comicAlt} src ={comicIMG}></img>
                        </div>
        
                        
                    </div>
                )
                }
            else{
                return(<div className="container">
        
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div class="searchBox">
                    <input id="searchNumber" class="searchInput" type="text" placeholder="Enter a comic number" />
                    </div>
                    <div class="searchSubmit">
                    <input type="submit" class="searchSubmit" value="Search!" />
                    </div>
                </form>
            </div>
            <div>
                <h1>Search for a Comic!</h1>
                <h3>Enter a number between 1 and 2220</h3>
            </div>
                
            
        </div>)
                }
            }
        }
    



export default Search;
