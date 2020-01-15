import axios from 'axios'
import React from 'react'
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { Link, withRouter,Redirect } from "react-router-dom";

const key = process.env.REACT_APP_KEY
class search extends React.Component{
    state={
        searchValue:'',
        searchResult:[],
        isLoading:false,
        redir:false,
        id:0
        
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
        // <Link to= {"/movies/"+result.id}/>
       e.preventDefault()
        this.setState({ searchValue: result.title ,redir:true,id:result.id})

      // let history=useHistory();
      // history.push(`/movies/${result.id}`)

      }


    render(){

      if(this.state.redir){
        this.setState({redir:false})
        return <Redirect push to={`/movies/${this.state.id}`}/>
      }
        return (<form >
          
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
export default withRouter(search )