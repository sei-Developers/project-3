
import React from 'react'
import Search from './Search' 
function Header (){
    return (<div class ="Header"> 
    <div class='myLogo'>
    <h1><span class="material-icons"  style={{fontSize:'100px'}}>local_movies</span>MovieList</h1></div>
    <Search />
        
    </div>)
}
export default Header
