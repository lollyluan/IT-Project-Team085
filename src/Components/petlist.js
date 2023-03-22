import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PetCard from './petCard/petCard';
//import {getPets} from '../api/pet'
import 'core-js/stable/promise';
import { useEffect , useState} from 'react';
import axios from 'axios';



function PetList(props){
  const [petList, setPetList] = useState([]);
  const [cover, setCover] = useState(0);
  async function  getPets(pageNo, query) {
    
    const BASE_URL = process.env.REACT_APP_BASE_URL
    var url = BASE_URL + '/pets/'+"?page="+pageNo;
    
    var myHeaders = new Headers();
    myHeaders.append("Origin", "localhost:3000/");
  
    var attr
    for(attr in query){
      if(query[attr] !== "" && query[attr] !== null){
        url = url + ("&"+attr + "=" + query[attr])
     }
    }
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    return await axios(url, requestOptions)
    .then(res =>{
        if(res.status == 200) {
            
            return res.data
        }
        else {
            return Promise.reject();
        }
    })
    .then( data=>
      {
        
        Array.from(data).forEach(d=>{
          const premise = Promise.resolve(d.cover);
          premise.then(setCover);
          const subscription = premise.then(result => {
            setCover(result);
          });

          // Clean up the subscription when the component unmounts
          return () => {
            subscription.cancel();
          };
        })
        return data
      })
    .then(data => {
        return data;
    })
    
    .catch(error => console.log('error', error));
  }

  
  const changeValue = async()=>{
      const list = await(getPets( props.page, props.query))
      setPetList(list)
  }

  useEffect(() => {
    changeValue()
    
  }, [props]);

  return (
    <Row xs={1} md={5} className="petlist">
    {
    
      [...Array(petList.length).keys()].map(function(i){
        return (
          <Col>
          <PetCard name = {petList[i].name} image = {cover} age = {petList[i].age} id = {petList[i]}></PetCard>
          </Col>
          )
      }) 
    }     
    </Row>
  )
  
};

export default PetList;