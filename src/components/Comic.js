import React, {Component} from 'react';

class Comic extends Component{

    
        constructor(){
            super();
            console.log("Constructor ran")
            this.state = {comicData: []}
        }
    
            componentDidMount(){
            const latestComic = "https://xkcd.now.sh/?comic=latest";
            console.log('Component Mounted')
            fetch(latestComic).then((response)=>{
                return response.json();
            }).then((comicJSON)=>{
                console.log(comicJSON)
                this.setState({
                    comicData: comicJSON
                }
                )
                
                
            })
            
            }
            render(){
                // const comicIMG = this.state.comicData.results.img[0]
                const comicIMG = this.state.comicData.img
                console.log(comicIMG)
                return(
                    <div classname="comic">
                     <img id ="comic_img" alt="shutupreact" src={comicIMG}></img>
                    </div>
                )
    }

}

export default Comic;