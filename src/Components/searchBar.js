import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import { BsFilter } from 'react-icons/bs';

function SearchBar() {
  return (
    <>
      <InputGroup className="search-bar" variant="outline-success">
        <Button variant="outline-success">< BsSearch/></Button>
        <Button variant="outline-success">< BsFilter/></Button>
        <Form.Control aria-label="type"/>
      </InputGroup>
    </>
  );
}

export default SearchBar;