import React from 'react'

import { BsFillGeoAltFill } from "react-icons/bs"
import ApplicationPopup from '../Components/applicationPopup'
import Tags from '../Components/Tags'
import cat1 from "../images/cat1_details3.jpg"

import "./petInforStyle.css"


function PetInfor2 () {

  const temp = "test"
  return (
    <div className="petInfor">

      <div className="lgImg">
        <img src={cat1} alt="" className='picture1' />
      </div>

      <div className="smImg1">
        <img src={cat1} alt="" className='pictureSmall' />
      </div>

      <div className="smImg2">
        <img src={cat1} alt="" className='pictureSmall' />
      </div>

      <div className="smImg3">
        <img src={cat1} alt="" className='pictureSmall' />
      </div>

      <div className="petContent">
        <h1>Moss</h1>
        <h3>Mose is now about a year old, a typical orange patterned male cat with a very nice and friendly personality, and has been wandering outside for a while, so he may need a little more generous space to keep. He has been de-sexed and is healthy in all aspects, but his tail was once a bit internally damaged, but has recovered and does not affect his normal life. Hope to find a loving family and get along well with other cats.</h3>
        <div className='tags'>
          <Tags color={temp} sex={temp} age={temp}
            character={temp} immunization={temp}></Tags>
        </div>
        <div className='location'>
          <BsFillGeoAltFill /> {temp},{temp}
        </div>
        <ApplicationPopup id={temp} />

      </div>

    </div>
  )
}
export default PetInfor2