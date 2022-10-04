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
import { useEffect , useState} from 'react';
function PetList(props) {
  const query= {'color': null}
  const [petLst, setPetLst] = useState([]);
  useEffect(()=>{
    const func = async()=>{
      const list = await(getPets(1, query))
      setPetLst(list)
    }
    func()
  })
 
 
  var pet
  return (
    <Row xs={1} md={5} className="petlist">
    {
      [...Array(petLst.length).keys()].map(function(i){
        console.log(petLst[i].nickname)
        return (
          <Col>
          <PetCard name = {petLst[i].nickname} image = {img} age = {petLst[i].age}></PetCard>
          </Col>
          )
      })
        
        
    }
    
      
    </Row>
  )
  
};

export default PetList;