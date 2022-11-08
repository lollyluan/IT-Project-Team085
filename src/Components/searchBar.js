import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import { BsFilter } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';


function SearchBar(props) {

  const query = {
    color: "",
    sex: "",
    immunization: ""
  }
  
  const getValue = e =>{
    // const newQuery = {...query}
    // newQuery[e.target.attr] = e.target.value
    let attr = e.target.id
    let value = e.target.type

    query[attr] = value
    console.log(attr)
    console.log(value)
    {props.changeValue(query)}
  }

  return (
    <>
      <InputGroup className="search-bar" variant="outline-success">
        <Button variant="outline-success">< BsSearch/></Button>
        <DropdownButton variant="outline-success" title="Filter">

          <DropdownButton variant="outline-success" title="Color">
              <Dropdown.Item id="color" onClick={getValue} type="RED">Red</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="BLUE">Blue</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="GREEN">Green</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="YELLO">Yellow</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="ORINGE">Orange</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="PURPLE">Purple</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="WHITE">White</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="BLACK">Black</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="GREY">Grey</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="OTHER">Other</Dropdown.Item>
              <Dropdown.Item id="color" onClick={getValue} type="UNDEFINED">Undefined</Dropdown.Item>          
          </DropdownButton>
            
          <DropdownButton variant="outline-success" title="Sex">
              <Dropdown.Item id="sex" onClick={getValue} type="MALE">Male</Dropdown.Item>
              <Dropdown.Item id="sex" onClick={getValue} type="FEMAILE">Female</Dropdown.Item>
              <Dropdown.Item id="sex" onClick={getValue} type="UNDEFINED">Undefined</Dropdown.Item>
          </DropdownButton>
          
          <DropdownButton variant="outline-success" title="Immunization">
              <Dropdown.Item id="immunization" onClick={getValue} type="YES">Yes</Dropdown.Item>
              <Dropdown.Item id="immunization" onClick={getValue} type="NO">No</Dropdown.Item>
          </DropdownButton>
          
        </DropdownButton>
        <Form.Control aria-label="type"/>
      </InputGroup>
    </>
  );
}

export default SearchBar;