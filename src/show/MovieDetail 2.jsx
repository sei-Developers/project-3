// import React, { Component } from 'react';
// import {withRouter}from 'react-router-dom'
// // import { Grid, Image } from 'semantic-ui-react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios'
// import'../show/video.css'
// import { movie, character, video } from '../api/api'
// import ModalVideo from 'react-modal-video'
// const key = process.env.REACT_APP_KEY


// class MovieDetail extends Component {
//     constructor(){
//         super()
//     this.state = { 
//         video:[],
//         movie:{},
//         character:[],
//         showTrailer:false
//      }
//      this.openModal = this.openModal.bind(this)
  
// }


//      openModal=()=> {
//         this.setState({showTrailer: true})
//       }
//     //  apiCallMovie(){
//     //     axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${key}`)
//     //     .then(res=>{
//     //         const movie =res.data
//     //         this.setState({movie:movie})
//     //     })
//     //     // console.log("kjbnkbkj")
 
//     //  }

//     //  apiCallCharacter(){
//     //     axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=${key}`)
//     //     .then(res=>{
//     //         const character =res.data.cast
//     //         console.log("character",character)
//     //         this.setState({character:character})
//     //     })
//     //     // console.log("kjbnkbkj")
 
//     //  }
//      //
//      componentDidMount(){
     
//     // .then(res=>{
//     // const movieVideo =res.data.results
//     // this.apiCallMovie()
//     // this.apiCallCharacter()
//     // //create a copy of movie lists in the state 
//     // let copyVideo=[...this.state.video]
//     // let {showTrailer} =this.state
//     // //asign the list to the list name ex: popular:popularList 
//     // copyVideo=movieVideo[0]
//     // // console.log(this.props)
//     // //set vlaue for the movielists object
//     // this.setState({video:copyVideo})
//     //  })
//     const id = this.props.match.params.id
//     movie(id, key)
//     .then(
//         res => {
//             console.log(res)
//             character(id, key)
//             .then(
//                 res2 => {
//                     console.log(res2)
//                     video(id, key)
//                     .then(
//                         res3 => {
//                             console.log(res3)
//                         }
//                     )
//                     .catch(
//                         err => console.log(err)
//                     )
//                 }
//             )
//             .catch(
//                 err => console.log(err)
//             )
//         }
//     )
//     .catch(
//         err => console.log(err)
//     )
     
//     }

//     render() { 
//         console.log("render")
//         const moviePopular =this.props.movies.popular.find(movie=> movie.id == this.props.match.params.id)
//         const movieLatest =this.props.movies.latest.find(movie=> movie.id == this.props.match.params.id)
//         let keyVideo= this.state.video ? this.state.video.key:""

        
//         return ( 
//             <div style={{backgroundImage:"url(https://image.tmdb.org/t/p/w500"+this.state.movie.backdrop_path+")",backgroundSize:"cover"}} >
               
            
//                 {/* function(a,b) {
//                     if(a) {
//                         return (https://image.tmdb.org/t/p/w500${a}.{poster_path})
//                     } else {
//                         return (https://image.tmdb.org/t/p/w500${b}.{poster_path})
//                     }
//                 } */}

               




//                  <div style={{padding:"100px"}}>
//                  <div className="card mb-6 mx-5 " style={{opacity:"0.8"}}>
//                     <div className="row no-gutters">
//                         <div className="col-md-4 hovereffect">
//                              <img className="card-img hovereffect"
//                                 src={ `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} />
                               
//                                 {/* latest  */}
                           
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body"> 
//                                 <div className="col-md-12  d-flex justify-content-between">
//                                     <h1 className="card-title pb-1">{this.state.movie.title}</h1> 
//                                     <span className="material-icons " style={{fontSize:"40px"}} onClick={this.openModal}>play_circle_outline</span> 
//                                 </div>
                                
//                                 <small className="text-muted " style={{fontSize:"15px"}}>Release :<span >{this.state.movie.release_date}</span></small>
//                                 <h5 className="card-text mt-4">{this.state.movie.overview}</h5>
//                                 <small class="text-muted ">
//                                     <i class="material-icons " style={{fontSize:"25px"}}>
//                                          stars
//                                     </i>{ this.state.movie.vote_average}
//                                     <i></i>
                                    
//                                 </small>
                                 
//                              </div>
                               
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 <div >
//                 <ModalVideo channel='youtube' isOpen={this.state.showTrailer} videoId={ keyVideo } onClose={() => this.setState({showTrailer: false})} />
   
//                 </div>

//         </div >   
           
//          );
//     }
// }
 
// export default withRouter(MovieDetail);

