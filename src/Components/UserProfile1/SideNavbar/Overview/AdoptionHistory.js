import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {getDetailedAdoption} from "../../../../api/pet_adoption";
import {getPet} from "../../../../api/pet";
const BASE_URL = process.env.REACT_APP_HOME

export default function ShowMyPet () {
  const [adoptionList, setAdoptionList] = useState([]);
  const changeValue = async ()=>{
    const list = await getDetailedAdoption();
    setAdoptionList(list);
  }
  useEffect(() => {
    changeValue();
  }, []);
  return (
    <div className="donationHistory">
      {
        adoptionList.map(data => {
          const date = new Date(data.timestamp);
          const adoptionDate = date.getDate() +"/"+ (date.getMonth()+1) + "/" + date.getFullYear();
          var url = BASE_URL + "/petInfo/" + data.petId;
          return (
          <div className="donationDetail">

            <div className="donation">
              <div className="donationTitle">Pet ID:</div>
              <a href = {url}>
                <div className="donationPrice">{data.petId}</div>
              </a>
              </div>

            
            <div className="donation">
              <div className="donationTitle">Status:</div>
              <div className="donationPrice">{data.applicationStatus}</div>
            </div>

            <div className="donationDate">{adoptionDate}</div>
          </div>
          )
      })
      }
      <div className="donationDetail">
        <Link to="/petlist">
        Learn More
        </Link>
      </div>
    </div>
  )
}