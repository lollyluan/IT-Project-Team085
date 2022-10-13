import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import { BsFilter } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';


function SearchBar() {
  return (
    <>
      <InputGroup className="search-bar" variant="outline-success">
        <Button variant="outline-success">< BsSearch/></Button>
        <DropdownButton>
          <Dropdown.Item>Category</Dropdown.Item>
          <Dropdown.Item>Color</Dropdown.Item>
          <Dropdown.Item>Sex</Dropdown.Item>
          <Dropdown.Item>Immunization</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="type"/>
      </InputGroup>
    </>
  );
}

export default SearchBar;