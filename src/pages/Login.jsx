import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import Axios from 'axios'
import link from '../link'
import token from '../functions/token'


export default class Login extends Component {
    state={

    }
    onChange = (event)=>{ 
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    onSubmit = ()=>{
        //check the inputs 
        if(this.state.username && this.state.password){ 
            Axios.post(link+'auth/login', {
                username: this.state.username,
                password:this.state.password
            })
            .then( data =>
                {
                    token.save(data.data)
                    Swal.fire(
                        'Done!',
                        'You have successfully logedin :)',
                        'success'
                      )
                      this.props.next('first')
                }
            )
                .catch(err =>{
                    if(err.message == "Request failed with status code 403"){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Username or password is wrong XD',
                       
                          })
                 
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'an error has ecorder IDK check with me',
                       
                          })
                    }
                })
        }else{ 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please fill all the fields',
                footer: 'b8r wallah'
              })
        }
        //send and see the autput 
    }

    render() {
        return (
            <div>
                   <Form onSubmit={this.onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label> username</Form.Label>
    <Form.Control onChange={this.onChange} name="username" type="username" placeholder="username" />
    
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={this.onChange} name="password" type="password" placeholder="Password" />
  </Form.Group>
  
  
  <Button variant="primary" onClick={this.onSubmit} >
    Login
  </Button>
</Form>
            </div>
        )
    }
}
