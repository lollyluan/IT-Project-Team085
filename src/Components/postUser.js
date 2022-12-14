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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required />
                <label>Last Name:</label>
                <input
                    type="text"
                    placeholder='Smith'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required />
            </div>
            <div>
                <label>Birthday:</label>
                <input
                    type="text"
                    value={birthday}
                    placeholder='11/05/1997'
                    onChange={(e) => setBirthday(e.target.value)} />
                <label>ID:</label>
                <input
                    type="text"
                    value={id}
                    placeholder='ID Number'
                    onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
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
                    value={country}
                    onChange={(e) => setCountry(e.target.value)} />
                <label>City:</label>
                <input
                    type="text"
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    placeholder='Street'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Bio:</label>
                <textarea
                    placeholder='Introduce yourself~'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}>
                </textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default PostUser;