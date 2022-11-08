import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img from '../images/cat1.png';
import Button from "react-bootstrap/Button";
import PetInfo from '../pages/petInformation';
import PetCard from './petCard/petCard';
import {getPets} from '../api/pet'
import { useEffect , useState} from 'react';

function PetList(props){

  const [petLst, setPetLst] = useState([]);
  const [newquery, setNewQuery] = useState(props.query);
  console.log(newquery, props);


  useEffect(() => {
    setNewQuery(props.query);
    console.log("call this plzzzzz")
    func()
  }, [props]);
  // this.query = {
  //   query: props.query
  // }
  // useImperativeHandle(ref, ()=>{
  //     return{
  //       query: props.query
  //     };
  // });

  // componentWillReceiveProps(newProps){
  //   this.setState({query: newProps.query});
  // }

  // const [refresh, setRefresh] = useState(false);

  // useEffect(() => {
  //   refresh && setTimeout(() => setRefresh(false))
  // }, [refresh])

  // const query = props.query;
  // if(query !== props.query){
  //   setRefresh(true);
  // }

  const func = async()=>{
    console.log("Petlist get:")
    console.log(props.query)
    const list = await(getPets( props.page, newquery))
    setPetLst(list)
  }
  // func()
  // useEffect(()=>{
  //   const func = async()=>{
  //     console.log("Petlist get:")
  //     console.log(props.query)
  //     const list = await(getPets( props.page, newquery))
  //     setPetLst(list)
  //   }
  //   func()
  // },[])
 

  var pet
  return (
    <Row xs={1} md={5} className="petlist">
    {
      [...Array(petLst.length).keys()].map(function(i){
  
        return (
          <Col>
          <PetCard name = {petLst[i].nickname} image = {img} age = {petLst[i].age} id = {petLst[i].id}></PetCard>
          </Col>
          )
      })
    }      
    </Row>
  )
  
};

export default PetList;