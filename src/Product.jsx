import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Product(props) {
    const {id, category, title, price, description, image, rating} = props

  return (
    <div className='shoplist'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{price}</ListGroup.Item>
            <ListGroup.Item>{category}</ListGroup.Item>
            <ListGroup.Item>{rating.rate}</ListGroup.Item>
            <ListGroup.Item>{rating.count}</ListGroup.Item>
        </ListGroup>
        </Card>
    </div>
  )
}

export default Product