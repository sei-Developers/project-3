import React, { Component } from 'react';
import {withRouter}from 'react-router-dom'
// import { Grid, Image } from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import'../show/video.css'

import ModalVideo from 'react-modal-video'
const key = process.env.REACT_APP_KEY


class MovieDetail extends Component {
    constructor(){
        super()
    this.state = { 
        video:[],
        movie:{},
        showTrailer:false
     }
     this.openModal = this.openModal.bind(this)
  
}


     openModal=()=> {
        this.setState({showTrailer: true})
      }
     apiCall(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${key}`)
        .then(res=>{
            const movie =res.data
            this.setState({movie:movie})
        })
        console.log("kjbnkbkj")
 
     }
     componentDidMount(){
     axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=${key}`)
  .then(res=>{
    const movieVideo =res.data.results
    
    //create a copy of movie lists in the state 
    let copyVideo=[...this.state.video]
    let {showTrailer} =this.state
    //asign the list to the list name ex: popular:popularList 
    copyVideo=movieVideo[0]
    console.log(this.props)
    //set vlaue for the movielists object
    this.setState({video:copyVideo})
  })
  this.apiCall()
}

    render() { 

        const moviePopular =this.props.movies.popular.find(movie=> movie.id == this.props.match.params.id)
        const movieLatest =this.props.movies.latest.find(movie=> movie.id == this.props.match.params.id)
        let keyVideo= this.state.video ? this.state.video.key:""

        console.log(this.props)
        return ( 
            <div style={{backgroundImage:"url(https://image.tmdb.org/t/p/w500"+this.state.movie.backdrop_path+")",backgroundSize:"cover"}} >
               
            
                {/* function(a,b) {
                    if(a) {
                        return (https://image.tmdb.org/t/p/w500${a}.{poster_path})
                    } else {
                        return (https://image.tmdb.org/t/p/w500${b}.{poster_path})
                    }
                } */}

               




                 <div style={{padding:"100px"}}>
                 <div className="card mb-6 mx-5 " style={{opacity:"0.8"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4 hovereffect">
                             <img className="card-img hovereffect"
                                src={ `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} />
                               
                                {/* latest  */}
                           
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{this.state.movie.title}</h1>
                                <h5 className="card-text">{moviePopular ? moviePopular.overview:''}</h5>
                                <small class="text-muted">
                                    <i class="material-icons">
                                         stars
                                    </i>{ this.state.movie.vote_average}
                                </small>
                             </div>
                                <div className="col-md-8">
                                 <p><span className="material-icons" style={{fontSize:"40px"}} onClick={this.openModal}>play_circle_outline</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div >
                <ModalVideo channel='youtube' isOpen={this.state.showTrailer} videoId={ keyVideo } onClose={() => this.setState({showTrailer: false})} />
   
                </div>

        </div >   
           
         );
    }
}
 
export default withRouter(MovieDetail);

