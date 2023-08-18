import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../features/userDetailSlice'

function Navbar() {
  const allUsers=useSelector((state)=>state.app.users)
  const dispatch=useDispatch()
  const [searchData,setsearchData]=useState("")
  useEffect(()=>{
        dispatch(searchUser(searchData))
  },[searchData])
  return (
	<div>
	  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h4 className="navbar-brand">RTK</h4>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Create Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/read">All Post({allUsers.length})</Link>
        </li>
      </ul>
      
        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setsearchData(e.target.value)}/>
       
      
    </div>
  </div>
</nav>
	</div>
  )
}

export default Navbar
