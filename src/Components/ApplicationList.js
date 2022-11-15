import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Application from '../Components/Application';
import {getAdoptionApplication}  from '../api/pet_adoption';
import { useEffect , useState} from 'react';

function ApplicationList(props){

  const [ApplicationLst,setApplicationLst] = useState([]);

  const changeValue = async()=>{
    const list = await(getAdoptionApplication())
    setApplicationLst(list)
  }

  useEffect(() => {
    changeValue()
  }, [props]);
  
 
  return (
    <Row xs={1}>
    {
      [...Array(ApplicationLst.length).keys()].map(function(i){ 
        return(
          <Col>
          <Application petId = {ApplicationLst[i].petId} FisrtName = {ApplicationLst[i].firstname} LastName = {ApplicationLst[i].lastname} userId = {ApplicationLst[i].userId} city = {ApplicationLst[i].city}  email = {ApplicationLst[i].email} reason = {ApplicationLst[i].reason} ></Application>
          </Col>
          )
      })
    }      
    </Row>
  )
  
};

export default ApplicationList;