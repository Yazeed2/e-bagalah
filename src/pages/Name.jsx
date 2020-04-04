import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class Name extends Component {
    onSubmit=()=>{
        this.props.add(this.state.name)
    }
    onChange = (e)=>{
        this.setState({
          [e.target.name] : e.target.value
        })

    }
    render() {
        return (
            <div className="hodler">

                <Form style={{textAlign:'', padding:'10%' ,marginTop:'22vh'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={this.onChange} name='name' size="md" type="name" placeholder="esmk pls :))" style={{width:'100%', margin:'10px auto'}}/>
    <Form.Text className="text-muted">

        3shaan alflooooos ¯\_(ツ)_/¯ </Form.Text>
  </Form.Group>



  <Button variant="primary" onClick={this.onSubmit} type="submit" onSubmit={this.onSubmit}>
    Submit
  </Button>
</Form>

            </div>
        )
    }
}
