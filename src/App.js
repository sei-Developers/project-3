import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from 'react-router-dom'
// require('dotenv').config()
import axios from 'axios'
import Movies from './components/Movies';
//you should include your key before run
const key = process.env.REACT_APP_KEY

class App extends React.Component {

  state={
    movieLists:{
      latest: [],
      popular:[]
    },
    errors:{ latest: '',
      popular:''}
  }
//make call to the path 
 apiCall =(path,name)=>{
  axios.get(path)
  .then(res=>{
    const movieList =res.data.results
    //create a copy of movie lists in the state 
    const copyMovieList={...this.state.movieLists}
    //asign the list to the list name ex: popular:popularList 
    copyMovieList[name]=movieList
    //set vlaue for the movielists object
    this.setState({movieLists:copyMovieList})

  })
  //log the error if it been found 
  .catch(error=>{  const copyError={...this.state.errors}
    //asign the list to the list name ex: popular:popularList 
    copyError[name]=error
    //set vlaue for the movielists object
    this.setState({errors:copyError})})
 }
  componentDidMount(){
    
    //path for the latest movies 
    const latestPath=`https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=release_date.desc&release_date.lte=2020-01-01&with_original_language=en`;
    //path for popular movies 
    const popularPath=`https://api.themoviedb.org/3/discover/movie?api_key=${key}`; 
    this.apiCall(latestPath,'latest')
    this.apiCall(popularPath,'popular')  
  }
  render(){
    console.log(key)
   
  return (
    <div className="App">
    <Movies listName='Latest' movies={this.state.movieLists.latest}/><hr/>
    <Movies listName='Popular'movies={this.state.movieLists.popular}/>




  
  
    </div>
  );}
}

export default App;
