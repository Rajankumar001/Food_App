import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import Home from '../components/Home/Home.js'
import {getAllFood} from '../Action/Action.js';
import Loader from '../components/Loader.js';
import Footerpage from  '../components/Footer/Footerpage.js';
import './Homescreen.css'
import Filters from '../components/Filters/Filters.js';
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
    <div className='main-home-page'> 
      <div className='banner-home-page'>
    <img src='/images/freepik-hand-drawn-healthy.png' alt='banner'></img>
     </div>
     <div className='displaying-item'>
      {
        loading?(
        <Loader/>
        ):
        err ?(
          <h1>error is fetching...</h1>
        ):(
          <Row >
            <Filters/>
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
      </div>
      <Footerpage/>
    </div>
      
    </>
  )
}

export default Homescreen;
