import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Input,Button,Row} from 'reactstrap';
import {postPet} from '../api/pet';

//const PostPet =() =>{
//const [detail, setDetail] = useState('');
//const [category, setCategory] = useState('--');
//const [country, setCountry] = useState('--');
//const [city, setCity] = useState('--');
//const [ID, setId] = useState('--- --- ---');
//const [age, setAge] = useState('');
//const [nickname,setNickname] = useState('---');
//const [sex, setSex] = useState('--');
//const [color, setColor] = useState('--');
//const [immunization,setImmunization] = useState('--');

function PostPet(){
  const[data,setData] = useState({
        category: "---",
        nickname: "---",
        detail: "---",
        color: "---",
        sex: "---",
        age: "---",
        immunization: "---",
        city: "---",
        country: "---"
  })

    function submit (e){
      e.preventDefault();
      postPet(url,{
        category: data.category,
        nickname: data.nickname,
        detail: data.detail,
        color: data.color,
        sex: data.sex,
        age: data.age,
        immunization: data.immunization,
        city: data.city,
        country: data.country
      })
      .then(res =>{
        console.log(res.data)
      })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.value] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

    return(
        <Form className="Post" onSubmit={(e) => submit(e)}>   
        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <div className='s1'>
          <span for="Category" sm='1'>Category:</span>
          </div>
          <Input  type="select" value={category} onChange={(e) => handle(e.target.value)} >
          <option value="Cats">CAT</option>
          <option value="Dogs">DOG</option>
          </Input>
      
        </FormGroup>
        </Col>


        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Name" sm='1'>Name:</span>   
          <Input type="text"value={nickname} onChange={(e) => handle(e.target.value)} placeholder="Pet’s Name"/>  
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="ID" sm='1'>Pet's ID</span>
          <Input  type="text" value={ID} required onChange={(e) => handle(e.target.value)} placeholder="--- --- ---" />
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Country" sm='1'>Country:</span>
          <Input type="select" value={country} onChange={(e) => handle(e.target.value)}>
          <option value="Australia">Australia</option>
          </Input>

        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="City" sm={1}>City:</span>
          <Input type="select" value={city} onChange={(e) => handle(e.target.value)}>
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Perth">Perth</option>
          <option value="Adelaide">Adelaide</option>
          </Input>
  
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="SEX" sm={1}>SEX:</span> 
          <Input type="select" value={sex} onChange={(e) => handle(e.target.value)} >
          <option value="Boy">MALE</option>
          <option value="Gril">FEMALE</option>
          </Input>

        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Age" sm={1}>Age:</span>
          <Input type="text" required value={age} onChange={(e) => handle(e.target.value)} placeholder="month/year" />
        </FormGroup>
        </Col>
      
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Color" sm={1}>Color:</span>
          <Input type="select" value={color} onChange={(e) => handle(e.target.value)}>
          <option value="Orange">RED</option>
          <option value="Black">BLUE</option>
          <option value="White">GREEN</option>
          <option value="Brown">YELLOW</option>
          <option value="Double Color">ORANGE</option>
          <option value="Triple Color">PURPLE</option>
          </Input>
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Desex" sm={1}>Desex:</span>
          <Input type="select" value={immunization} onChange={(e) => handle(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </Input>
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg={12}>
        <FormGroup row className='row-cols-lg-auto g-3 align-items-center'>
          <span for="exampleText" sm={1}>Descirption:</span>
          <Input className='textInput' type="textarea" required value={detail} onChange={(e) => setDetail(e.target.value)}/>
        </FormGroup>
        </Col>
        </Row>


        <Row className='NoPadding'>
        <Col lg={12}>
        <FormGroup row className='row-cols-lg-auto g-3 align-items-center'>
         <span className='s2' for="exampleFile" sm={2}>Photos:</span>
         <div className='AddPhoto'>
          <img src="icons/Add.svg" className='align-items-center Update'></img>
          <Button size="sm" outline color="success">Update Photos</Button>{' '}
        </div>
        </FormGroup>
        </Col>
        </Row>
        <Button type="submit" onClick={submit} className="addPostTest">Post</Button>
      
        </Form>


    );
    }


export default PostPet;
