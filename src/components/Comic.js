import React, {Component} from 'react';
import '../components/Comic.css'

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
                const comicTitle = this.state.comicData.alt
                const comicAlt = this.state.comicData.title
                console.log(comicIMG)
                return(
                    <div>
                     <img id ="comic_img" class="latestImage" comicTitle= {comicTitle} alt={comicAlt} src={comicIMG}></img>
                    </div>
                )
    }

}

export default Comic;