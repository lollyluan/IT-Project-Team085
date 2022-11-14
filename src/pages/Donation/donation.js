import React from "react"
import Footer from "../../Components/footer"
import Header from "../../Components/header"
import { useState } from "react"
import donationImage from "../../images/donation-project1.jpg"
import './donation.css'
import { postDonation, getDonation } from "../../api/donation"

function Donation () {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [amount, setAmount] = useState('')

    function submit(e) {
        e.preventDefault();
        postDonation(data);
    }

    function handle(e) {
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }

    const [data, setData] = useState({
        // firstName: '',
        // lastName: '',
        // email: '',
        // phone: '',
        // amount: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneCountryCode: '+61',
        phoneNumber: 0,
        donationAmount: 20,
        payment: "DEBIT_CREDIT",
        cardNumber: 0,
        expiryMonth: 0,
        expiryYear: 0,
        cvv: 0
    });

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
                <form className="donationForm" onSubmit={submit}>
                    <div>
                        <label>First Name:</label>

                        <input
                            type="text"
                            placeholder='Thank'
                            value={data.firstName}
                            id = 'firstName'
                            onChange={handle}
                            required />
                    </div>

                    <div>
                        <label>Last Name:</label>

                        <input
                            type="text"
                            placeholder='You'
                            value={data.lastName}
                            id = 'lastName'
                            onChange={handle}
                            required />
                    </div>

                    <div>
                        <label>Email Address:</label>

                        <input
                            type="text"
                            placeholder='For'
                            value={data.email}
                            id = 'email'
                            onChange={handle}
                            required />
                    </div>

                    <div>
                        <label>Phone:</label>

                        <input
                            type="text"
                            placeholder='Donation'
                            value={data.phoneNumber}
                            id = 'phoneNumber'
                            onChange={handle}
                            required />
                    </div>

                    <div>
                        <label>Donation Amount:</label>

                        <input
                            type="text"
                            placeholder="ヾ(^▽^*)))"
                            value={data.donationAmount}
                            id = 'donationAmount'
                            onChange={handle} 
                            required/>
                    </div>

                    <div>
                        <input className="profileBtm" type='submit' />
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Donation