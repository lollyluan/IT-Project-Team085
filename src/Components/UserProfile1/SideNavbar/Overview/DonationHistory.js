import React from "react"


export default function DonationHistory () {


  return (
    <div className="donationHistory">


      <div className="donationDetail">

        <div className="donation">
          <div className="donationTitle">Donation Amount:</div>
          <div className="donationPrice">$30</div>
        </div>

        <div className="donationDate">10:10 10/10/2022</div>

      </div>


      <div className="donationDetail">

        <div className="donation">
          <div className="donationTitle">Donation Amount:</div>
          <div className="donationPrice">$100</div>
        </div>

        <div className="donationDate">11:11 11/11/2022</div>

      </div>


      <div className="donationDetail">

        <div className="donation">
          <div className="donationTitle">Donation Amount:</div>
          <div className="donationPrice">$150</div>
        </div>

        <div className="donationDate">11:11 11/11/2022</div>

      </div>
    </div>
  )
}