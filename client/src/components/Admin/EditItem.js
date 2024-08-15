import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { Editfood, updatedfood} from '../../Action/Action';
const EditItem = () => {
  const [name, setName] = useState('');
  const [small, setSmall] = useState('');
  const [medium, setMedium] = useState('');
  const [large, setLarge] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const { Food, loading } = useSelector((state) => state.editFoodReducers);

  useEffect(() => {
    if (Food && Food._id === id) {
      setName(Food.name);
      setImage(Food.image);
      setDescription(Food.description);
      setCategory(Food.category);
    } else if (!loading) {
      dispatch(Editfood(id));
    }
  }, [Food,id,dispatch,loading]);
  const submitForm = (e) => {
    e.preventDefault();
    const editedfood = {
      _id: id,  
      name,
      image,
      description,
      category,
      prices: [small, medium, large],
    };
    dispatch(updatedfood(editedfood));
  };

  return (
    <div>
      {!loading && (
        <div className='container'>
          <h1>Edit Food Item</h1>
          <Form onSubmit={submitForm}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridSmall">
                  <Form.Label>0.5kg || half</Form.Label>
                  <Form.Control
                    type="text"
                    value={small}
                    onChange={(e) => setSmall(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMedium">
                  <Form.Label>1kg</Form.Label>
                  <Form.Control
                    type="text"
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLarge">
                  <Form.Label>2kg || full</Form.Label>
                  <Form.Control
                    type="text"
                    value={large}
                    onChange={(e) => setLarge(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label>Image</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="image url" 
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default EditItem;
