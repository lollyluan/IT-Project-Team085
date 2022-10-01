import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img from '../images/cat1.png';
import Button from "react-bootstrap/Button";
import PetInfo from '../pages/petInformation';
import PetCard from './petCard/petCard';
import {getPets} from '../api/pet'
async function PetList(props) {
  const query= {'color': null}
  const petList = await getPets(1, query)
  console.log("pet list")
  console.log(petList)
  var pet
  return (
    <Row xs={1} md={5} className="petlist">
    {
      [...Array(petList.length).keys()].map(function(i){
        console.log(petList[i].nickname)
        return (
          <Col>
          <PetCard name = {petList[i].nickname} image = {img} age = {petList[i].age}></PetCard>
          </Col>
          )
      })
        
        
    }
    
      
    </Row>
  )
  
};

export default PetList;