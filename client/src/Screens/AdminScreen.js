import React, { useEffect } from 'react'
import {Route,Routes, useNavigate} from 'react-router-dom'
import {Container,Row,Col,ButtonGroup,Button} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import AddnewItem from '../components/Admin/AddnewItem';
import Orderlist from '../components/Admin/Orderlist';
import Itemlist from '../components/Admin/Itemlist';
import Userlist from '../components/Admin/Userlist';
const AdminScreen = () => {
  const userState=useSelector((state)=>state.LoginReducer);
  const {currentUser}=userState;
  console.log("Admin value:-",currentUser.currentUser.isAdmin)
  useEffect(()=>{
    if(localStorage.getItem('currentUser')===null ||!currentUser.currentUser.isAdmin){
      window.location.href='/'
    }
  })
    const navigate=useNavigate()
  return (
    <>
     <Container>
        <Row>
        <Col md={4}>
        <ButtonGroup vertical style={{minHeight:"500px"}}>
      <Button onClick={()=>{navigate("/Admin/AddnewItem")}}>Addnew</Button>
      <Button onClick={()=>{navigate("/Admin/Orderlist")}}>Orederlist</Button>
      <Button onClick={()=>{navigate("/Admin/Itemlist")}}>Itemlist</Button>
      <Button onClick={()=>{navigate("/Admin/Userlist")}}>Userlist</Button>
    </ButtonGroup>
        </Col>
        <Col md={8}>
        
    <Routes>
               <Route path='/AddnewItem' element={<AddnewItem />} />
              <Route path='/Orderlist' element={<Orderlist />} />
              <Route path='/Itemlist' element={<Itemlist />} />
              <Route path='/Userlist' element={<Userlist />} />
      </Routes>
        </Col>
        </Row>
        </Container> 
    </>
  )
}

export default AdminScreen
