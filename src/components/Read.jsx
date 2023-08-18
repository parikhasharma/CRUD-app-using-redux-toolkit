import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../features/userDetailSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';

function Read() {
	const dispatch = useDispatch();
	const [showPopup, setshowPopup] = useState(false);
	const [id, setId] = useState(0);
	const [radioData,setRadioData]=useState("")
	const data = useSelector(state => state.app);
	useEffect(() => {
		dispatch(showUser());
	}, []);

	if (data.loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div>
			{showPopup && <CustomModal id={id} showPopup={showPopup} setshowPopup={setshowPopup} />}
			<h2>All Users</h2>
			<div class="mb-3">
			<input
					type="radio"
					class="form-check-input"
					name="all"
					checked={radioData===""}
					onChange={(e)=>setRadioData(e.target.value)}
				/>
				<label class="form-check-label">All</label>
				<input
					type="radio"
					class="form-check-input"
					name="gender"
					value="Male"
					checked={radioData==="Male"}
					onChange={(e)=>setRadioData(e.target.value)}
				/>
				<label class="form-check-label">Male</label>
			
				<input
					type="radio"
					class="form-check-input"
					name="gender"
					value="Female"
					checked={radioData==="Female"}
					onChange={(e)=>setRadioData(e.target.value)}
				/>
				<label class="form-check-label">Female</label>
			</div>
			{data?.users &&
				data?.users
					?.filter(ele => {
						if (data?.searchData?.length === 0) {
							return ele;
						} else {
							return ele.name.toLowerCase().includes(data?.searchData?.toLowerCase());
						}
					}).filter(ele=>{
							if(radioData==="Male"){
								return ele.gender===radioData;
							}else if(radioData==="Female"){
								return ele.gender===radioData;
							}else{
								return ele
							}
					})
					.map(key => {
						return (
							<div className="card w-50 my-2 mx-auto" key={key.id}>
								<div className="card-body">
									<h5 className="card-title">{key.name}</h5>
									<h6 className="card-subtitle mb-2">{key.email}</h6>
									<p className="card-text">{key.gender}</p>
									<button class="card-link" onClick={() => [setId(key.id), setshowPopup(true)]}>
										View
									</button>
									<Link to={`/edit/${key.id}`} class="card-link">
										Edit
									</Link>
									<Link onClick={() => dispatch(deleteUser(key.id))} class="card-link">
										Delete
									</Link>
								</div>
							</div>
						);
					})}
		</div>
	);
}

export default Read;
