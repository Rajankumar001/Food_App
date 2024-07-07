import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import Home from '../components/Home/Home.js'
import {getAllFood} from '../Action/Action.js';
const Homescreen = () => {
  const dispatch=useDispatch();
  const foodstate=useSelector((state)=>state.getFoodReducers);
  const {loading,Food,err} =foodstate;
  console.log(foodstate);
  useEffect(()=>{
    dispatch(getAllFood())
  },[dispatch]);
  return (
    <>
    <Container>
      {
        loading?(
          <h1>loading.....</h1>
        ):
        err ?(
          <h1>error is fetching...</h1>
        ):(
          <Row>
            {
             Food.map((sweets)=>{
              return (
                <Col md={4} >
                <Home sweets={sweets}/>
                </Col>
                
              ) })
            }
        </Row>
        )
      }

    </Container>
      
    </>
  )
}

export default Homescreen;
