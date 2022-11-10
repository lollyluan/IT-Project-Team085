import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Input,Button,Row} from 'reactstrap';
import {postPet} from '../api/pet';



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

  });

  const fileDataArr = [];

  function submit(e) {
    e.preventDefault();
    const params = { ...data, images: fileDataArr };
    console.log(
      params
    );
    postPet(params);
  }

  const uploadImage = e => {
    const fileData = e.target.files;
    for (let i = 0; i < fileData.length; i++) {
      changeImg(fileData[i]);
    }
  };

  const changeImg = file => {
    const reader = new FileReader();
    const baseImg = {};
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseImg['image'] = reader.result.split(',')[1];
    };
    fileDataArr.push(baseImg);
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
              <span for="Category" sm="1">
                Category:
              </span>
            </div>
            <Input
              type="select"
              value={data.category}
              id="category"
              onChange={handle}
            >
              <option value="Cats">CAT</option>
              <option value="Dogs">DOG</option>
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
            <span className="s1" for="Country" sm="1">
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
              <option value="Boy">MALE</option>
              <option value="Gril">FEMALE</option>
              <option value="Gril">UNDEFINED</option>
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
              <option value="Orange">RED</option>
              <option value="Black">BLUE</option>
              <option value="White">GREEN</option>
              <option value="Brown">YELLOW</option>
              <option value="Double Color">ORANGE</option>
              <option value="Triple Color">PURPLE</option>
              <option value="Triple Color">WHITE</option>
              <option value="Triple Color">BLACK</option>
              <option value="Triple Color">GREY</option>
              <option value="Triple Color">OTHER</option>
              <option value="Triple Color">UNDEFINED</option>
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
              <option value="Yes">YES</option>
              <option value="No">NO</option>
              <option value="No">PENDING</option>
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
