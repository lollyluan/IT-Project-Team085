import React from "react";
import Footer from "../../Components/footer";
import Header from "../../Components/header";
import { useState } from "react";

function Donation() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    return (
        <form>
            <div>
                <label>First Name:</label>
                    <input
                        type="text"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required />
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
                        required  />
            </div>
            <div>
                <label>Donation Amount:</label>
                <input 
                    type="text"
                    placeholder="Enter an Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <div>
                    <label>Payment Methods:</label>
                    <input 
                        type="radio"
                        name = "payment method" />
                        <label>Debit or Credit Card</label>
                    <input 
                        type="radio"
                        name = "payment method" />
                    <label>Bank Transfer</label>
                    <input 
                        type="radio"
                        name = "payment method" />
                    <label>Paypal</label>
                </div>
                <div>
                    <input 
                        type="tel" 
                        inputmode="numeric" 
                        pattern="[0-9\s]{16,16}" 
                        maxlength="16" placeholder="xxxx xxxx xxxx xxxx"
                        required />
                </div>
                <div>
                    <input 
                        type="text"
                        placeholder="mm/yy"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        required  />
                    <input 
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required />
                </div>
            </div>
            <div>
                <button>Proceed</button>
            </div>
        </form>
    )

}
export default Donation;