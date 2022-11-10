import React from "react"
import Footer from "../../Components/footer"
import Header from "../../Components/header"
import { useState } from "react"
import donationImage from "../../images/donation-project1.jpg"
import './donation.css'

function Donation () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    return (
        <div className="donation">

            <h2>Infectious Diseases of a Kitten</h2>

            <div className="article">
                <img src={donationImage} alt="" />
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
            </div>
            <h2>Donation Details</h2>
            <form className="donationForm">
                <div>
                    <label>First Name:</label>

                    <input
                        type="text"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required />
                </div>

                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required />
                </div>

                <div>
                    <label>Email Address:</label>
                    <input
                        type="text"
                        placeholder='Example@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>

                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required />
                </div>

                <div>
                    <label>Donation Amount:</label>
                    <input
                        type="text"
                        placeholder="Enter an Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="">
                    <button>Proceed</button>
                </div>

            </form>
        </div>
    )

}
export default Donation