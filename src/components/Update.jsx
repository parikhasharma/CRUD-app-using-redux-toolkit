import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userDetailSlice';

function Update() {
  const navigate=useNavigate()
  const dispatch=useDispatch();
	 const {id}=useParams();
	const [updateData,setUpdateData]=useState()
	const {users,loading}=useSelector((state)=>state.app)
   
	useEffect(()=>{
		if(id){
			const singleUser=users.filter((ele)=>ele.id===id)
			setUpdateData(singleUser[0])
		}
	},[])
  const newData=(e)=>{
    setUpdateData({...updateData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateUser(updateData))
    navigate("/read")
  }
 
  return (
	<div>
		<form className='w-50 mx-auto my-56' onSubmit={handleSubmit} ><br/>
    <h2>Edit the form.</h2><br/>
    <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" name="name" class="form-control" value={updateData && updateData.name} onChange={newData} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email"  value={updateData && updateData.email} onChange={newData} />
  </div>
  <div class="mb-3">
    <label class="form-label">Age</label>
    <input type="text" class="form-control" name="age" value={updateData && updateData.age}  onChange={newData} />
  </div>
  <div class="mb-3 ">
    <input type="radio" class="form-check-input" name="gender" value="Male" checked={updateData && updateData.gender==='Male'} onChange={newData}  />
    <label class="form-check-label">Male</label>
  </div>
  <div class="mb-3 ">
    <input type="radio" class="form-check-input" name="gender" value="Female" checked={updateData && updateData.gender==='Female'} onChange={newData}  />
    <label class="form-check-label">Female</label>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
	  
	</div>
  )
}

export default Update
