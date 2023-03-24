import React from 'react';
import Header from '../Components/header';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Tags from '../Components/Tags';
import {BsFillGeoAltFill} from "react-icons/bs";
import {getPet} from '../api/pet';
import { useEffect, useState} from 'react';
import{useParams} from 'react-router-dom';
import ApplicationPopup from '../Components/applicationPopup';
import {getImage} from '../api/image';
var AWS = require('aws-sdk');
// Set the Region 

const AWS_S3_ACCESS_KEY= process.env.REACT_APP_AWS_S3_ACCESS_KEY
const AWS_S3_SECRET_KEY= process.env.REACT_APP_AWS_S3_SECRET_KEY
const AWS_S3_BUCKET_NAME= process.env.REACT_APP_AWS_S3_BUCKET_NAME
const AWS_REGION = process.env.REACT_APP_AWS_REGION
const BASE_URL = process.env.REACT_APP_BASE_URL

function PetInfo(){
    
    const bodyStyle={
        textAlign:"center",
        marginTop:"30px"
    };
    
    const imageStyle={
        width:"100%",
        objectFit:"cover",
        height:"90px",
        objectPosition:"0 100%"
    };

    const textStyle={
        marginLeft:"20px",
        marginRight:"20px",
        fontSize:"12px"
    };

    const infoStyle={
        //height:"480px",
        VerticalAlignCenter:"center"
    };

    const tagStyle={
        marginTop:"20px",
        marginBottom:"20px"
    };
    AWS.config.update({
        region: AWS_REGION,
        accessKeyId: AWS_S3_ACCESS_KEY,
        secretAccessKey: AWS_S3_SECRET_KEY
      });
    const s3 = new AWS.S3()

  
    const [pet, setPet] = useState([]);
    const [imageLst, setImageLst] = useState([]);
    const petId = useParams();
    const getImagePremise =(data)=>{
        return Array.from(data).map(d =>{
          const params = { Bucket: AWS_S3_BUCKET_NAME, Key: d};
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
    
      useEffect(()=>{
        const func = async()=>{
   
          const petInfo = await(getPet(petId.petId))
          setPet(petInfo)
          await Promise.all(getImagePremise(petInfo.images)).then((imageData) => {
              setImageLst(imageData);
          })
      }
      func()
      }, []);
    return (
        <div>
            <Header/>

            <Container style={bodyStyle}>
                <Row md={1}>
                <Col md={7}>
                    <Row><Image src={`data:image/jpeg;base64,${imageLst[0]}`}/></Row>
                
                    <br/>
                    <Row md = {imageLst.length-1}>
                    {
                        
                        [...Array.from(imageLst.splice(1, imageLst.length+1))].map(function(image) {
                           
                            return (<Col md={4}> <Image style={imageStyle} src={`data:image/jpeg;base64,${image}`}/> </Col>)
                                     
                        })
                    
                    }
                    </Row>
                    
                    
                </Col>
                <Col md={5}>
                    <Card  style={infoStyle}>
                            <Card.Body>
                                <Card.Title>{pet.nickname}</Card.Title>
                            <Card.Text style={textStyle}>
                                {pet.detail}
                            </Card.Text>
                            <div style={tagStyle}>
                                <Tags color = {pet.color} sex = {pet.sex} age = {pet.age} 
                                character = {pet.character} immunization = {pet.immunization}></Tags>
                            </div> 
                            <div style={tagStyle}>
                                <BsFillGeoAltFill/> {pet.city},{pet.country}
                            </div>                         
                            <ApplicationPopup id = {pet.id}/>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>

            </Container>

        </div>

        
    );
}
export default PetInfo;