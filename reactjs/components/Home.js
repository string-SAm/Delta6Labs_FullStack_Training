import React from 'react'
import {Link} from 'react-router-dom'
 
const Home = () => {
  return (
    <div>
        <h1>Welcome to home Page</h1>
        <ul>
            <li><Link to='/user/1'> User 1</Link></li>
            <li><Link to='/user/2'> User 2</Link></li>
 
            <li><Link to='/user/3'> User 3</Link></li>
        </ul>
        
 
    </div>
  )
}
 
export default Home;

{/* <ul>
            <li><Link to='/post/1'> Post 1</Link></li>
            <li><Link to='/post/2'> Post 2</Link></li>
 
            <li><Link to='/post/3'> Post 3</Link></li>
        </ul> */}