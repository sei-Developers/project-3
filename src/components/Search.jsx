import axios from 'axios'
import React from 'react'
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
const key = process.env.REACT_APP_KEY
class search extends React.Component{
    state={
        searchValue:'',
        searchResult:[],
        isLoading:false
        
    }

    componentDidMount=()=>{
        
      
        
        
    }


    getNewList=(searchValue)=>{
       
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchValue}`)
        .then(res=>{let movieList =res.data.results
            //create a copy of movie lists in the state 
         
          movieList=movieList.slice(0, 5);
            //asign the list to the list name ex: popular:popularList 
            
            //set vlaue for the movielists object
            this.setState({searchResult:movieList})
        
          })
    }
    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, searchValue:value })
        this.getNewList(value)
    }
    handleResultSelect = (e, { result }) =>{ 
        console.log(result.id)
        this.setState({ searchValue: result.title })}


    render(){
        return (<form >
            <div>
            <input type="radio" name="gender" value="male"/> Male
            <input type="radio" name="gender" value="female"/> Female
            <input type="radio" name="gender" value="other"/> Other
            </div>
            <Search
            
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={this.state.searchResult}
            value={this.state.searchValue}
            {...this.props}
          />
           
    






        </form>)
    }
}
export default search 