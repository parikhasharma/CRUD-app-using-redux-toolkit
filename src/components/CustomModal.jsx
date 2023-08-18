import React from 'react'
import './CustomModal.css'
import { useSelector } from 'react-redux'

function CustomModal({id,showPopup,setshowPopup}) {
	const allUsers=useSelector((state)=>state.app.users)
	const singleUser=allUsers.filter((ele)=>ele.id===id);
  return (
	   <div className="modalBackground">
      <div className="modalContainer">
		<h1>{singleUser[0].name}</h1>
		<h1>{singleUser[0].email}</h1>
		<h1>{singleUser[0].gender}</h1>
		<h1>{singleUser[0].age}</h1>
		<button onClick={()=>setshowPopup(false)}>Close</button>
	  </div>
	</div>
  )
}

export default CustomModal
