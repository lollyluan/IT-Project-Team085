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

    return (
        <div>
            <Header/>

            <Container style={bodyStyle}>
                <Row md={1}>
                <Col md={7}>
                    <Row><Image src={`data:image/jpeg;base64,${imageLst.image}`}/></Row>
                    <br/>
                    {/* <Row md = {3}>
                        <Col md={4}> <Image style={imageStyle} src={catd1}/> </Col>
                        <Col md={4}> <Image style={imageStyle} src={catd2}/> </Col>
                        <Col md={4}> <Image style={imageStyle} src={catd3}/> </Col>
                    </Row> */}
                    
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