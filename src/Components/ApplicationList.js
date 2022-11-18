import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Application from '../Components/Application';
import {getAdoptionApplication}  from '../api/pet_adoption';
import { useEffect , useState} from 'react';

function ApplicationList(){

  const [applicationLst,setApplicationLst] = useState([]);

  useEffect(() => {
    const func = async()=>{
      const lst = await(getAdoptionApplication());
      console.log(lst)
      setApplicationLst(lst)
    }
    func()
  }, []);
  
 
  return (
    <Row md={1}>
    {
      [...Array(applicationLst.length).keys()].map(function(i){ 
        return(
          <Col>
          <Application petId = {applicationLst[i].petId} userId = {applicationLst[i].userId} reason = {applicationLst[i].reason} ></Application>
          </Col>
          )
      })
    }      
    </Row>
  )
  
};

export default ApplicationList;