import React, { useState, useEffect } from "react"
import { getDonation } from "../../../../api/donation";

export default function DonationHistory () {

  const [donationList, setDonationList] = useState([]);
  const changeValue = async ()=>{
    const list = await getDonation();
    setDonationList(list);
  }
  useEffect(() => {
    changeValue();
  }, []);

  return (
    <div className="donationHistory">
      {
        donationList.map(data => {
          const date = new Date(data.timestamp);
          const donationDate = date.getDate() +"/"+ (date.getMonth()+1) + "/" + date.getFullYear();
          return (
          <div className="donationDetail">

            <div className="donation">
              <div className="donationTitle">Donation Amount:</div>
              <div className="donationPrice">{data.amount}</div>
            </div>

            <div className="donationDate">{donationDate}</div>
          </div>
          )
      })
      }
    </div>
  )
}