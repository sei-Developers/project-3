
import React, { Component } from 'react';
import {withRouter}from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import'../show/video.css'
import { movie, character, video } from '../api/api'
import ModalVideo from 'react-modal-video'
const key = process.env.REACT_APP_KEY


class MovieDetail extends Component {
    constructor(){
        super()
    this.state = { 
        video:[],
        movie:{},
        character1:{},
        character2:{},
        character3:{},
        showTrailer:false
     }
     this.openModal = this.openModal.bind(this)
  
}


     openModal=()=> {
        this.setState({showTrailer: true})
      }
    
     componentDidMount(){
     
   
    const id = this.props.match.params.id
    movie(id, key)
    .then(
        res => {
            console.log(res)
            character(id, key)
            .then(
                res2 => {
                    console.log(res2.data.cast[0])
                    video(id, key)
                    .then(
                        res3 => {
                            console.log(res3)
                            // 
                            this.setState({
                                movie:res.data,
                                character1:res2.data.cast[0],
                                character2:res2.data.cast[1],
                                character3:res2.data.cast[2],
                                video:res3.data.results[0]

                            })
                        }
                    )
                    .catch(
                        err => console.log(err)
                    )
                }
            )
            .catch(
                err => console.log(err)
            )
        }
    )
    .catch(
        err => console.log(err)
    )
     
    }

    render() { 
        console.log("render")
        let keyVideo= this.state.video ? this.state.video.key:""
        return ( 
            <div style={{backgroundImage:"url(https://image.tmdb.org/t/p/w500"+this.state.movie.backdrop_path+")",backgroundSize:"cover"}} >
               
                 <div style={{padding:"4%"}}>
                 <div className="card mb-6 mx-5 " style={{opacity:"0.8"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4 hovereffect">
                             <img className="card-img hovereffect"
                                src={ `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} />

                        </div>
                        <div className="col-md-8">
                            <div className="card-body"> 
                                <div className="col-md-12  d-flex justify-content-between">
                                    <h1 className="card-title pb-1">{this.state.movie.title}</h1> 
                                    <span className="material-icons " style={{fontSize:"40px"}} onClick={this.openModal}>play_circle_outline</span> 
                                </div>
                                
                                <small className="text-muted " style={{fontSize:"15px"}}>Release :<span >{this.state.movie.release_date}</span></small>
                                <h5 className="card-text mt-4">{this.state.movie.overview}</h5>
                                <small class="text-muted ">
                                    <i class="material-icons " style={{ color:"gold" ,fontSize:"35px"}}>
                                         star   
                                    </i>{this.state.movie.vote_average}<br/>
                                   
                                    <i>cast :</i><br></br> {this.state.character1 ?
                                    <div className="card-deck col-md-9 mt-4 ">
                                        <div className="card  bg-dark text-white ">
                                            {this.state.character1.profile_path ? <img   className="card-img-top" src={ `https://image.tmdb.org/t/p/w500${this.state.character1.profile_path}`}></img>:<img className="card-img-top" height="250" src={ `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}/>}
                                            <div className="card-body" height="30%">
                                            <h5 className="card-title ">{this.state.character1.name}</h5>
                                            </div>
                                        </div>
                                        <div className="card bg-secondary text-white ">
                                        {this.state.character2.profile_path ? <img   className="card-img-top" src={ `https://image.tmdb.org/t/p/w500${this.state.character2.profile_path}`}></img>:<img className="card-img-top" height="250" src={ `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}/>}
                                            <div className="card-body" height="30%">
                                            <h5 className="card-title">{this.state.character2.name}</h5>
                                            </div>
                                        </div>
                                        <div className="card bg-secondary text-white ">
                                        {this.state.character3.profile_path ? <img  className="card-img-top" src={ `https://image.tmdb.org/t/p/w500${this.state.character3.profile_path}`}></img>:<img className="card-img-top" height="250" src={ `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}/>}
                                            <div className="card-body " height="30%">
                                            <h5 className="card-title">{this.state.character3.name}</h5>
                                            </div>
                                        </div>
                                        </div>
                                        :""}
                                </small>

                                 
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

