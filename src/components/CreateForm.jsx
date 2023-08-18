import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {createUser} from '../features/userDetailSlice'
import { useNavigate } from 'react-router-dom'

function Form() {
  const [users,setusers]=useState({})
  const navigate=useNavigate()

  const dispatch=useDispatch()

  const getUserData=(e)=>{
    setusers({...users , [e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(users)
      dispatch(createUser(users))
      navigate("/read")
  }

  return (
	<div>
		<form className='w-50 mx-auto my-56' onSubmit={handleSubmit}><br/>
    <h2>Please Fill out the form given below.</h2><br/>
    <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" name="name" class="form-control" onChange={getUserData}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" onChange={getUserData} aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label class="form-label">Age</label>
    <input type="text" class="form-control" name="age" onChange={getUserData}/>
  </div>
  <div class="mb-3 ">
    <input type="radio" class="form-check-input" name="gender" value="Male" onChange={getUserData} />
    <label class="form-check-label"  >Male</label>
  </div>
  <div class="mb-3 ">
    <input type="radio" class="form-check-input" name="gender" value="Female" onChange={getUserData}/>
    <label class="form-check-label"  >Female</label>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
	  
	</div>
  )
}

export default Form
