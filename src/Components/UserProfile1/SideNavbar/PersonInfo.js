import { PictureAsPdf } from '@mui/icons-material';
import { name } from 'file-loader';
import React, { useEffect } from 'react'
import { useState } from "react"
import {updateProfile, getUserProfile} from '../../../api/user';


function UserInfor () {
  useEffect(() => {
    getUserProfile()
      .then(data => setData(data))
      .catch(err => alert('Something went wrong!'))

  },[data]);
  
  const [data, setData] = useState({
    address: '',
    dob: '',
    firstname: '',
    lastname: '',
    bio: '',
    identification: '',
    city: '',
    country: ''
  });

  function submit(e) {
    e.preventDefault();  
    updateProfile(data).then(newdata => setData(newdata));
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  return (
    <form className='userInfor' onSubmit={submit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          placeholder= "John"
          className='shortBox'
          value={data.firstname}
          id="firstname"
          onChange={handle}
          required />
        <label>Last Name:</label>
        <input
          type="text"
          placeholder='Smith'
          className='shortBox'
          id="lastname"
          value={data.lastname}
          onChange={handle}
          required />
      </div>
      <div>
        <label>Birthday:</label>
        <input
          type="text"
          placeholder='11/05/1997'
          className='shortBox'
          value={data.dob}
          id="dob"
          onChange={handle} />
        <label>ID:</label>
        <input
          type="text"
          value={data.identification}
          placeholder='ID Number'
          id="identification"
          className='middleBox'
          onChange={handle} />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          placeholder='Country'
          className='middleBox'
          value={data.country}
          id="country"
          onChange={handle} />
        <label>City:</label>
        <input
          type="text"
          placeholder='City'
          className='middleBox'
          value={data.city}
          id="city"
          onChange={handle} />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          placeholder='123, Happy Street'
          className='longBox'
          value={data.address}
          id="address"
          onChange={handle} />
      </div>
      <div className='bio'>
        <label>Bio:</label>
        <textarea
          placeholder='Introduce yourself~'
          className='longBox'
          value={data.bio}
          id = "bio"
          onChange={handle}>
        </textarea>
      </div>
      <div className='profileBtn'>
        <input className='profileBtm' type="submit" />
      </div>
    </form>
  )
}

export default UserInfor