import React from 'react'
import { useState } from "react"



function UserInfor () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [bio, setBio] = useState('')

  return (
    <form className='userInfor'>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          placeholder='John'
          className='shortBox'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required />
        <label>Last Name:</label>
        <input
          type="text"
          placeholder='Smith'
          className='shortBox'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required />
      </div>
      <div>
        <label>Birthday:</label>
        <input
          type="text"
          placeholder='11/05/1997'
          className='shortBox'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)} />
        <label>ID:</label>
        <input
          type="text"
          value={id}
          placeholder='ID Number'
          className='middleBox'
          onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          placeholder='Email'
          className='middleBox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <label>Phone:</label>
        <input
          type="text"
          placeholder='Phone Number'
          className='middleBox'
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          placeholder='Country'
          className='middleBox'
          value={country}
          onChange={(e) => setCountry(e.target.value)} />
        <label>City:</label>
        <input
          type="text"
          placeholder='City'
          className='middleBox'
          value={city}
          onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          placeholder='123, Happy Street'
          className='longBox'
          value={address}
          onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className='bio'>
        <label>Bio:</label>
        <textarea
          placeholder='Introduce yourself~'
          className='longBox'
          value={bio}
          onChange={(e) => setBio(e.target.value)}>
        </textarea>
      </div>
      <div className='profileBtn'>
        <button className='profileBtm' >Submit</button>
      </div>
    </form>


  )
}

export default UserInfor