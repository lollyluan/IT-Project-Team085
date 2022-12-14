import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PetCard from './petCard/petCard';
import {getPets} from '../api/pet'
import { useEffect , useState} from 'react';

function PetList(props){

  const [petLst, setPetLst] = useState([]);

  const changeValue = async()=>{
    const list = await(getPets( props.page, props.query))
    setPetLst(list)
  }

  useEffect(() => {
    changeValue()
  }, [props]);
  
 
  var pet
  return (
    <Row xs={1} md={5} className="petlist">
    {
      [...Array(petLst.length).keys()].map(function(i){
  
        return (
          <Col>
          <PetCard name = {petLst[i].nickname} image = {petLst[i].imageCollectionDTO.imageList} age = {petLst[i].age} id = {petLst[i].id}></PetCard>
          </Col>
          )
      })
    }      
    </Row>
  )
  
};

export default PetList;