import React from 'react';
import Badge from 'react-bootstrap/Badge';
import {getPet} from '../api/pet';

function Tags(props) {
    return(
        <div>
            <Badge bg="success">{props.color}</Badge>{' '}
            <Badge bg="success">{props.sex}</Badge>{' '}
            <Badge bg="success">{props.age} months</Badge>{' '}
            <Badge bg="success">{props.character}</Badge>{' '}
            <Badge bg="success">Immunization: {props.immunization}</Badge>
        </div>
    );
}
 
export default Tags;