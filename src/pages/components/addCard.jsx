import React from 'react'
import {Form} from 'react-bootstrap'
export default function addCard(props) {
    return (
        <Form.Group controlId="formBasicEmail"style={{border:'solid #f0f0f0 2px', padding: '10px', borderRadius:'10PX'}}>
        <Form.Label>what is it?</Form.Label>
        <Form.Control onChange={props.order} name={props.i} size="md" type="name" placeholder="product Name " style={{width:'100%', margin:'10px auto'}}/>
    
    
       
        <Form.Label >Quantity</Form.Label>
    
        <Form.Control type="number" onChange={props.amount}  name={props.i} size='sm' placeholder="999" style={{width:'30%', margin:'0 auto'}}/>
           
        </Form.Group>
    )
}
