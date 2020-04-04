import React, { Component } from 'react'
import {Form,Button}from 'react-bootstrap'
import Swal from 'sweetalert2'
import Axios from 'axios'
import link from '../link'
import token from '../functions/token'
import Login from './Login'


export default class Register extends Component {
  state={ 
    status:'regester'
  }
    onChange =(e)=>{ 

        this.setState({ 
            [e.target.name]: e.target.value
        })

    }
    onSubmit = ()=> { 
        if(this.state.password && this.state.password2 && this.state.name && this.state.username ){ 

       
        if(this.state.password === this.state.password2){ 
            Axios.post(link+'auth/register', { 

              username: this.state.username,
              password: this.state.password,
              name : this.state.name
              
            }).then(data => { 
              //save to localstorage
              token.save(data.data)
              // alert 
              Swal.fire(
                'Done!',
                'You are registered now :))',
                'success'
              )
              //take them to another page 
              this.props.next('first')
              // peace
            }
            )
            .catch(err => console.log(err))
        }else{ 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'make sure you have the same password',
                footer: 'b8r wallah'
              })
        }
    }else{ 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please fill all the fields',
            footer: 'b8r wallah'
          })
    }
    }
    render() {
        return (
            <div className="holder">

{this.state.status == 'regester'? 
                <Form onSubmit={this.onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>create a username</Form.Label>
    <Form.Control onChange={this.onChange} name="username" type="username" placeholder="username" />
    <Form.Text className="text-muted">
    just put whatever you like here
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Full name</Form.Label>
    <Form.Control onChange={this.onChange} name="name" type="name" placeholder="esmk" />
    <Form.Text className="text-muted">
    for example: b8arah um8rn :)
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={this.onChange} name="password" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Repeat Password</Form.Label>
    <Form.Control onChange={this.onChange} name="password2" type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" onClick={this.onSubmit} >
    Submit
  </Button>

  <Button variant="outline-secondary" style={{margin:'10px auto', display:'block'}} onClick={()=>this.setState({
    status: 'login'
  })} >
    Or Login here
  </Button>
</Form>

 : <Login next={ this.props.next}/> }


            </div>
        )
    }
}
