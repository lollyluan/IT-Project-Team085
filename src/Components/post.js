import React,{useState, useEffect} from 'react';
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
        category: "CAT",
        nickname: "",
        detail: "",
        color: "RED",
        sex: "MALE",
        age: "",
        immunization: "Yes",
        city: "Sydney",
        country: ""
  })

  /*useEffect((async (data)=>{
    await postPet(data);
  })(data), [])*/
  function submit(e){
    e.preventDefault();
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    postPet(newdata)
    console.log(newdata)
  }
  

  async function handle(e){
      const newdata = {...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
     // console.log(data)
  }

    
  

    return(
        <Form className="Post" onSubmit={() => submit()}>   
        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <div className='s1'>
          <span for="Category" sm='1'>Category:</span>
          </div>
          <Input  type="select" value={data.category} id = "category" onChange={handle} >
          <option value="Cats">CAT</option>
          <option value="Dogs">DOG</option>
          </Input>
      
        </FormGroup>
        </Col>


        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Name" sm='1'>Name:</span>   
          <Input type="text"value={data.nickname}  id = "nickname" onChange={handle} placeholder="Pet’s Name"/>  
        </FormGroup>
        </Col>


        </Row>

        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Country" sm='1'>Country:</span>
          <Input type="select" value={data.country}  id = "country" onChange={handle}>
          <option value="Australia">Australia</option>
          </Input>

        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="City" sm={1}>City:</span>
          <Input type="select" value={data.city} id = "city" onChange={handle}>
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
          <Input type="select" value={data.sex} id = "sex" onChange={handle} >
          <option value="Boy">MALE</option>
          <option value="Gril">FEMALE</option>
          </Input>

        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Age" sm={1} placeholder="0">Age:</span>
          <Input type="text" required value={data.age} id = "age" onChange={handle} placeholder="month/year" />
        </FormGroup>
        </Col>
      
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Color" sm={1}>Color:</span>
          <Input type="select" value={data.color} id = "color" onChange={handle}>
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
          <Input type="select" value={data.immunization} id = "immunization" onChange={handle}>
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
          <Input className='textInput' type="textarea" required value={data.detail} id = "detail" onChange={handle}/>
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
        <Button  onClick={submit} className="addPostTest">Post</Button>
      
        </Form>


    );
    }


export default PostPet;
