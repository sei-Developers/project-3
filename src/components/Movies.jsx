import React from 'react';
import Route from 'react-router-dom'
// require('dotenv').config()
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Movie from "./movie/Movie";

class Movies extends React.Component {
render(){
const movies = this.props.movies.filter( movie => movie.poster_path) // to check correct photo
return(
<div>
<h3>List Of {this.props.listName} </h3> 

<Carousel
  swipeable={false}
  draggable={false}

  showDots={false}

  showDots={false} // disable 

  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={0}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {movies.map(movie =>{
            
            return(
            < div>
            {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // show all poster of movies 
            width="200" height="250"/>  */}
             <Movie movie={movie}/>
  <span class="list__movie-vote-average">{movie.vote_average}</span>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // show all poster of movies 
            width="200" height="250"/> 
             
            </div>
            )}
            )}
    </Carousel>
    <nav>
        
    </nav>

    </div>
)

}
}


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1020 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };



export default Movies;