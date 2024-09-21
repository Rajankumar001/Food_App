import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {Form,Button} from 'react-bootstrap';
import {FilterSearch} from '../../Action/Action.js'
import './Filters.css';

const Filters = () => {
    const dispatch=useDispatch()
    const [searchkey ,setSearchkey]=useState("");
    const [category ,setCategory]=useState("all");

  return (
    <>
    <div  className='filter_container'>
    <div className='filter_search_box ' >
    <Form.Control type="text" placeholder="search food in small"  className='input_box text_area' value={searchkey} onChange={e=>setSearchkey(e.target.value)}/>
    </div>
    <div className='filter_search_box'> 
    <Form.Select aria-label="Default select example"  className='input_box' value={category} onChange={e=>setCategory(e.target.value)}>
      <option >All</option>
      <option >sweets</option>
      <option >snacks</option>
    </Form.Select>
    </div>
    <div className='filter_button'>
    <Button onClick={()=>dispatch(FilterSearch(searchkey,category))} >Search</Button>
    </div>
    </div>
    </>
  )
}

export default Filters
