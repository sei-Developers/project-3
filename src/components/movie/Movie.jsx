import React, { Component } from 'react';
// import MovieTrailer from "../trailer/MovieTrailer"
import { Link ,withRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Movie extends Component {

    state = {  }

    render() { 
        
        return ( 
            
            <div >
                <Link to={`/movies/${this.props.movie.id}`} >
                <img  width="200" height="250"
                 src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} />
                 </Link>    
            </div>
         );
    }
}
 
export default withRouter(Movie);