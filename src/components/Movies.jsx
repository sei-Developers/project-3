import React from 'react';
import Route from 'react-router-dom'
// require('dotenv').config()
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Movies extends React.Component {

render(){

return(
    <div>
<h4>List Of {this.props.listName}</h4>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={0}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
        {this.props.movies.map(movie =>{

            return(
               < div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt="Not Found" ref={img=> this.img = img} onError={()=> this.img.src="https://image.tmdb.org/t/p/w500/Aqr1jDwGb1IfAB6Lh1fNx7AbEZE.jpg"}


                  width="200" height="250"/> 
                {/* <MovieShow movie={movie}/> */}
               </div>

            )}
        )}
    </Carousel>

    </div>
)

}
}


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
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