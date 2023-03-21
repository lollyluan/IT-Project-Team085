import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Input,Button,Row} from 'reactstrap';
import {postPet} from '../api/pet';
var fs = require('fs')

var axios = require('axios');


function PostPet() {
  const [data, setData] = useState({
    category: 'CAT',
    nickname: '',
    detail: '',
    color: 'RED',
    sex: 'MALE',
    age: '',
    character: '',
    immunization: 'YES',
    city: 'Sydney',
    country: 'Australia',
    images: []

  });

const [uploadedFiles, setUploadedFiles] = useState([])
const fileDataArr = []

function submit(e) {
    e.preventDefault();
    
    if(data.images == []){
      alert("Please submit image")
    }
    else{
      postPet(data); 
    }
    
  }

  const uploadImage = e => {
    const fileData = e.target.files;
    for (let i = 0; i < fileData.length; i++) {
      const file = fileData[i]
      fileDataArr.push(file);
    }
    console.log(fileDataArr)
    const newdata = { ...data };
    newdata["images"] = fileDataArr;
    setData(newdata);
  };




  

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <Form className="Post">
      <Row className="NoPadding">
        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <div className="s1">
              <span for="category" sm="1">
                Category:
              </span>
            </div>
            <Input
              type="select"
              value={data.category}
              id="category"
              onChange={handle}
            >
              <option value="CAT">CAT</option>
              <option value="DOG">DOG</option>
            </Input>
          </FormGroup>
        </Col>

        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <div className="s1">
              <span for="Name" sm="1">
                Name:
              </span>
            </div>
            <Input
              type="text"
              value={data.nickname}
              id="nickname"
              placeholder="Pet’s Name"
              onChange={handle}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="NoPadding">
        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span className="s1" for="country" sm="1">
              Country:
            </span>
            <Input
              type="select"
              value={data.country}
              id="country"
              onChange={handle}
            >
              <option value="Australia">Australia</option>
            </Input>
          </FormGroup>
        </Col>

        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span className="s1" for="City" sm={1}>
              City:
            </span>
            <Input type="select" value={data.city} id="city" onChange={handle}>
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Perth">Perth</option>
              <option value="Adelaide">Adelaide</option>
            </Input>
          </FormGroup>
        </Col>

        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span className="s1" for="SEX" sm={1}>
              SEX:
            </span>
            <Input type="select" value={data.sex} id="sex" onChange={handle}>
              <option value="MALE">MALE</option>
              <option value="FEMAILE">FEMALE</option>
              <option value="UNDEFINED">UNDEFINED</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row className="NoPadding">
        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span className="s1" for="Age" sm={1} placeholder="0">
              Age:
            </span>
            <Input
              type="text"
              required
              value={data.age}
              id="age"
              placeholder="month/year"
              onChange={handle}
            />
          </FormGroup>
        </Col>

        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span className="s1" for="Color" sm={1}>
              Color:
            </span>
            <Input
              type="select"
              value={data.color}
              id="color"
              onChange={handle}
            >
              <option value="RED">RED</option>
              <option value="BLUE">BLUE</option>
              <option value="GREEN">GREEN</option>
              <option value="YELLO">YELLOW</option>
              <option value="ORINGE">ORANGE</option>
              <option value="PURPLE">PURPLE</option>
              <option value="WHITE">WHITE</option>
              <option value="BLACK">BLACK</option>
              <option value="GREY">GREY</option>
              <option value="OTHER">OTHER</option>
              <option value="UNDEFINED">UNDEFINED</option>
            </Input>
          </FormGroup>
        </Col>

        <Col lg="4">
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span className="s1" for="Desex" sm={1}>
              Desex:
            </span>
            <Input
              type="select"
              value={data.immunization}
              id="immunization"
              onChange={handle}
            >
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="PENDING">PENDING</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row className="NoPadding">
        <Col lg={12}>
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span for="exampleText" sm={1}>
              Descirption:
            </span>
            <Input
              className="textInput"
              type="textarea"
              required
              value={data.detail}
              id="detail"
              onChange={handle}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="NoPadding">
        <Col lg={12}>
          <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
            <span className="s2" for="exampleFile" sm={2}>
              Photos:
            </span>
              <Input
                name="file"
                type="file"
                multiple="multiple"
                onChange={uploadImage}
              />
 
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={submit} className="addPostTest">
        Post
      </Button>
    </Form>
  );
}

export default PostPet;
