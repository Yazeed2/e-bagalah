import React, { Component } from 'react'
import List from './pages/List'
import Order from './pages/Order'
import Name from './pages/Name'
import {Navbar, Button,Alert}  from 'react-bootstrap'
import token from './functions/token'
import Register from './pages/Register'
import './css/main.scss'

export default class App extends Component {
  componentDidMount(){ 
    let user = localStorage.token
    if(user){ 
      let pass = token.decode(user)
      if(pass){ 
        this.setState({
          status: 'order'
        })
      }else{ 
        this.setState({ 
          status: 'login'
        })
      }
    }else( 
      this.setState({
        status : 'login'
      })
    )
  }
  state={ 
    status: 'first'
  }
  next = (header)=>{
    this.setState({
      status: header
    })
  }
  addName = (body)=>{
    this.setState({
      name:body
    })
    if(body == "yazeed2"){
      this.setState({
        status: 'list'
      })
    }else{ 
      this.setState({
        status: 'order'
      })
    }
  }
  done= ()=>{
    this.setState({done:true})
  }
  nope=()=>{
    this.setState({nope:true})

  }
  render() {
    return (
      <div>

  <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="#home">

   E-ba8alah
    </Navbar.Brand>
  </Navbar>
  {this.state.done? <Alert  variant='success'>
        Done ^_^
      </Alert> :''}
      {this.state.nope? <Alert  variant='danger'>
        Done ^_^
      </Alert> :''}
  <Button variant="outline-info" style={{margin:'10%'}} onClick={()=>this.setState({status:'first'})}>{'<-'}</Button>

{this.state.status === 'login'? <Register next={this.next} />: ''}
{this.state.status === "first"? <Name add={this.addName}  next={this.next}/> : ''}
{this.state.status === "order"? <Order nope={this.state.nop} done={this.done} name={this.state.name} next={this.next}/> : ''}
{this.state.status === "list"? <List next={this.next}/> : ''}

      </div>
    )
  }
}

