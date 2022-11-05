import React from 'react';
import Header from '../Components/header';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cat1 from '../images/cat1.png';
import catd1 from '../images/cat1-details1.jpg';
import catd2 from '../images/cat1_details2.jpg';
import catd3 from '../images/cat1_details3.jpg';
import Tags from '../Components/Tags';
import {BsFillGeoAltFill} from "react-icons/bs";
import {getPet} from '../api/pet';
import { useEffect, useState} from 'react';
import{useParams} from 'react-router-dom';
import ApplicationPopup from '../Components/applicationPopup';
import { PropaneSharp } from '@mui/icons-material';


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
    const petId = useParams();
    useEffect(()=>{
      const func = async()=>{
 
        const petInfo = await(getPet(petId.petId))
        setPet(petInfo)
    }
    func()
    }, []);

    return (
        <div>
            <Header/>

            <Container style={bodyStyle}>
                <Row md={1}>
                <Col md={7}>
                    <Row><Image src={cat1}/></Row>
                    <br/>
                    <Row md = {3}>
                        <Col md={4}> <Image style={imageStyle} src={catd1}/> </Col>
                        <Col md={4}> <Image style={imageStyle} src={catd2}/> </Col>
                        <Col md={4}> <Image style={imageStyle} src={catd3}/> </Col>
                    </Row>
                    
                </Col>
                <Col md={5}>
                    <Card  style={infoStyle}>
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                            <Card.Text style={textStyle}>
                                Mose is now about a year old, a typical orange patterned male cat 
                                with a very nice and friendly personality, and has been wandering 
                                outside for a while, so he may need a little more generous space 
                                to keep. He has been de-sexed and is healthy in all aspects, 
                                but his tail was once a bit internally damaged, but has recovered 
                                and does not affect his normal life. Hope to find a loving family 
                                and get along well with other cats.
                            </Card.Text>
                            <div style={tagStyle}>
                                <Tags color = {pet.color} sex = {pet.sex} age = {pet.age} 
                                character = {pet.character} immunization = {pet.immunization}></Tags>
                            </div> 
                            <div style={tagStyle}>
                                <BsFillGeoAltFill/> Melbourne,VIC
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