
import React from 'react'
import Search from './Search' 
import {Link ,withRouter}from 'react-router-dom'
function Header (){
    return (<div className ="Header alsubaie"> 
    <div className='myLogo'> <Link to ="/" >
    <h1><span className="material-icons"  style={{fontSize:'100px'}}>local_movies</span>MovieList</h1>
    </Link>
    </div>
    
    <Search />
        
    </div>)
}
export default withRouter(Header)



