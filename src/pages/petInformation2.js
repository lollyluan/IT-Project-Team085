import React from 'react'
import Header from '../Components/header';
import { BsFillGeoAltFill } from "react-icons/bs"
import ApplicationPopup from '../Components/applicationPopup'
import Tags from '../Components/Tags'
import cat1 from "../images/cat1_details3.jpg"
import { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getPet} from '../api/pet';

import "./petInforStyle.css"


function PetInfor2 () {

  const [pet, setPet] = useState([]);
    const [imageLst, setImageLst] = useState([]);
    const petId = useParams();
    useEffect(()=>{
      const func = async()=>{
 
        const petInfo = await(getPet(petId.petId))
        setPet(petInfo)
        setImageLst(petInfo.imageCollectionDTO.imageList[0])
    }
    func()
    }, []);

  const temp = "test"
  return (
    <div className="petInfor">

      <div className="lgImg">
        <img src={`data:image/jpeg;base64,${imageLst.image}`} alt="" className='picture1' />
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
        <h1>{pet.nickname}</h1>
        <h3>{pet.detail}</h3>
        <div className='tags'>
          <Tags color={pet.color} sex={pet.sex} age={pet.age}
            character={pet.character} immunization={pet.immunization}></Tags>
        </div>
        <div className='location'>
          <BsFillGeoAltFill /> {pet.city},{pet.country}
        </div>
        <ApplicationPopup id = {pet.id} />

      </div>

    </div>
  )
}
export default PetInfor2