import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PetCard from './petCard/petCard';
import 'core-js/stable/promise';
import { useEffect , useState} from 'react';
import axios from 'axios';
import { getPets } from '../api/pet';

var AWS = require('aws-sdk');
// Set the Region 

const AWS_S3_ACCESS_KEY= process.env.REACT_APP_AWS_S3_ACCESS_KEY
const AWS_S3_SECRET_KEY= process.env.REACT_APP_AWS_S3_SECRET_KEY
const AWS_S3_BUCKET_NAME= process.env.REACT_APP_AWS_S3_BUCKET_NAME
const AWS_REGION = process.env.REACT_APP_AWS_REGION
const BASE_URL = process.env.REACT_APP_BASE_URL
function PetList(props){
  const [petList, setPetList] = useState([]);
  const [cover, setCover] = useState(0);
  const [imageList, setImageList] = useState([])
  AWS.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_S3_ACCESS_KEY,
    secretAccessKey: AWS_S3_SECRET_KEY
  });
  const s3 = new AWS.S3()


  const getImagePremise =(data)=>{
    return Array.from(data).map(d =>{
      const params = { Bucket: AWS_S3_BUCKET_NAME, Key: d.cover};
      return new Promise(async (resolve, reject) => {
        await s3.getObject(params, (err, data) => {
          if (err) {
            console.log(err)
            reject(err);
          } else {
            resolve(data.Body.toString('base64'));
        }
        });
      });
    })
  }

  useEffect(() => {
    
    const fetch = async()=>{
      const list = await(getPets( props.page, props.query))
      await Promise.all(getImagePremise(list)).then((imageData) => {
        setImageList(imageData);
      })
      setPetList(list)
    };
    fetch();
  }, []);

  return (
    <Row xs={1} md={5} className="petlist">
    {
    
      [...Array(petList.length).keys()].map(function(i){
        return (
          <Col>
          <PetCard name = {petList[i].name} image = {imageList[i]} age = {petList[i].age} id = {petList[i].id}></PetCard>
          </Col>
          )
      }) 
    }     
    </Row>
  )
  
};

export default PetList;