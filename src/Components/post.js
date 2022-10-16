import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Input,Button,Row} from 'reactstrap';
import {postPet} from '../api/pet';

const PostPet =() =>{

  const [Descirption, setDescirption] = useState('');
  const [Category, setCategory] = useState('CAT');
  const [Country, setCountry] = useState('Australia');
  const [City, setCity] = useState('Sydney');
  const [ID, setId] = useState('');
  const [Age, setAge] = useState('');
  const [Name,setName] = useState('');
  const [Gender, setGender] = useState('MALE');
  const [Color, setColor] = useState('RED');
  const [Immunization,setImmunization] = useState('Yes');
  const [isPending,setIsPending] = useState(false);


    //TODO connect backend
    const handleSubmit = (e)=> {
      e.preventDefault();
      console.log(`${Category},${Name},${Country},${City},${Age},${Gender},${Color},${Immunization}`);
      if(isPending == 'true') {
          
          postPet(Category,Name,Country,City,Age,Gender,Color,Immunization)

      }else {
          alert('Still Adding');
      }
      
  }


   
    return(
        <Form className="Post" onSubmit={handleSubmit}>   
        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <div className='s1'>
          <span for="Category" sm='1'>Category:</span>
          </div>
          <Input  type="select" value={Category} onChange={(e) => setCategory(e.target.value)} >
          <option value="Cats">CAT</option>
          <option value="Dogs">DOG</option>
          </Input>
      
        </FormGroup>
        </Col>


        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Name" sm='1'>Name:</span>   
          <Input type="text"value={Name} onChange={(e) => setName(e.target.value)} placeholder="Pet’s Name"/>  
        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="ID" sm='1'>Pet's ID</span>
          <Input  type="text" value={ID} required onChange={(e) => setId(e.target.value)} placeholder="--- --- ---" />
        </FormGroup>
        </Col>
        </Row>

        <Row className='NoPadding'>
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Country" sm='1'>Country:</span>
          <Input type="select" value={Country} onChange={(e) => setCountry(e.target.value)}>
          <option value="Australia">Australia</option>
          </Input>

        </FormGroup>
        </Col>

        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="City" sm={1}>City:</span>
          <Input type="select" value={City} onChange={(e) => setCity(e.target.value)}>
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
          <Input type="select" value={Gender} onChange={(e) => setGender(e.target.value)} >
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
          <Input type="text" required value={Age} onChange={(e) => setAge(e.target.value)} placeholder="month/year" />
        </FormGroup>
        </Col>
      
        <Col lg='4'>
        <FormGroup row className="row-cols-lg-auto g-3 align-items-center">
          <span className='s1' for="Color" sm={1}>Color:</span>
          <Input type="select" value={Color} onChange={(e) => setColor(e.target.value)}>
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
          <Input type="select" value={Immunization} onChange={(e) => setImmunization(e.target.value)}>
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
          <Input className='textInput' type="textarea" required value={Descirption} onChange={(e) => setDescirption(e.target.value)}/>
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
        { !isPending &&<Button type="submit" value="Submit" className="addPostTest">Post</Button>}
        { isPending &&<Button disabled className="addPostTest">Adding...</Button>}
        </Form>


    );
}


export default PostPet;
