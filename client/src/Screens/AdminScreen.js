import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import AddnewItem from '../components/Admin/AddnewItem';
import Orderlist from '../components/Admin/Orderlist';
import Itemlist from '../components/Admin/Itemlist';
import Userlist from '../components/Admin/Userlist';
// import EditItem from '../components/Admin/EditItem';

const AdminScreen = () => {
 
  const navigate = useNavigate();


  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: '500px' }}>
              <Button onClick={() => navigate('/Admin/AddnewItem')}>Add New Item</Button>
              <Button onClick={() => navigate('/Admin/Orderlist')}>Order List</Button>
              <Button onClick={() => navigate('/Admin/Itemlist')}>Item List</Button>
              <Button onClick={() => navigate('/Admin/Userlist')}>User List</Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/AddnewItem" element={<AddnewItem />} />
              <Route path="/Orderlist" element={<Orderlist />} />
              <Route path="/Itemlist" element={<Itemlist />} />
              <Route path="/Userlist" element={<Userlist />} />
              
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
