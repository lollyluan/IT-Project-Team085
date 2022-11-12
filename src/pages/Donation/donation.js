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
        <div className="donationPage">
            <div className="donationTitle">
                <h2>Infectious Diseases of a Kitten</h2>
            </div>

            <div className="donationArticle">
                <img src={donationImage} alt="" />
                <div className="article">
                    Feline immunodeficiency virus (FIV) decreases the function of the immune system and causes AIDS in cats. The virus is spread through the saliva of an infected cat, primarily by biting. Cats that roam outdoors, male cats, and older cats are more likely to become infected. This condition is diagnosed using a blood test. Your veterinarian may suggest performing this test when a new cat is acquired.Shortly after becoming infected, cats may have a fever and enlarged lymph nodes. Soon, these signs will disappear. The cat may appear healthy, with no further signs of infection for months or years. There is no cure. Treatment often involves supportive care and treatment for secondary infections. Once a cat is diagnosed with FIV, they will have it for life.

                </div>
            </div>

            <div className="donationFormArea">
                <div className="donationFormTitle">
                    <h2>Donation Details</h2></div>
                <form className="donationForm">
                    <div>
                        <label>First Name:</label>

                        <input
                            type="text"
                            placeholder='Thank'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label>Last Name:</label>

                        <input
                            type="text"
                            placeholder='You'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label>Email Address:</label>

                        <input
                            type="text"
                            placeholder='For'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label>Phone:</label>

                        <input
                            type="text"
                            placeholder='Donation'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label>Donation Amount:</label>

                        <input
                            type="text"
                            placeholder="ヾ(^▽^*)))"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} />
                    </div>

                    <div>
                        <button className="profileBtm">Proceed</button>
                    </div>
                </form>

            </div>
        </div>
    )

}
export default Donation