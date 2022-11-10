import React from 'react';
import { useState } from "react";
import {updateProfile, getUserProfile} from '../api/user';

function PostUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');

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
       
        updateProfile(data);
      }
      function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
      }
      return (
        <form>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    placeholder='John'
                    id="firstname"
                    onChange={handle}
                    required />
                <label>Last Name:</label>
                <input
                    type="text"
                    placeholder='Smith'
                    id="lastname"
                    onChange={handle}
                    required />
            </div>
            <div>
                <label>Birthday:</label>
                <input
                    type="text"
                    id="dob"
                    placeholder='11/05/1997'
                    onChange={handle} />
                <label>ID:</label>
                <input
                    type="text"
                    id="identification"
                    placeholder='ID Number'
                    onChange={handle} />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Phone:</label>
                <input
                    type="text"
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Country:</label>
                <input
                    type="text"
                    placeholder='Country'
                    id="country"
                    onChange={handle} />
                <label>City:</label>
                <input
                    type="text"
                    placeholder='City'
                    id="city"
                    onChange={handle} />
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    placeholder='Street'
                    id="address"
                    onChange={handle} />
            </div>
            <div>
                <label>Bio:</label>
                <textarea
                    placeholder='Introduce yourself~'
                    id="bio"
                    onChange={handle}>
                </textarea>
            </div>
            <button onClick={submit}>Submit</button>
        </form>
    )
}

export default PostUser;