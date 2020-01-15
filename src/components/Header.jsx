
import React from 'react'
import Search from './Search' 
import {Link ,withRouter}from 'react-router-dom'
function Header (){
    return (<div className ="Header alsubaie"> 
    <div className='myLogo'> <Link to ="/" >
    <h1 style={{color:"white"}}><span className="material-icons mx-5"  style={{fontSize:'100px',color:"white"}}>
        <img alt="movie" src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" 
            width="270" height="150"/></span> </h1>
    </Link>
    </div>
    
    <Search />
        
    </div>)
}
export default withRouter(Header)



