import React, { Component } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import axios from 'axios'
import AddCard from './components/addCard'
import link from '../link'
var done = ''
export default class Order extends Component {
    state={
        children:[],
        orders:[{order: '', amount:'1', name:this.props.name}],
        numChildren:1,
        done:[]
    }
    componentDidMount(){
        if(!this.props.name){
            this.props.next(
            'first'
            )
        }
    }

    order=(e)=>{
        var tring = e.target.name

        this.state.orders[tring].order = e.target.value
        console.log(this.state);

    }
    amount=(e)=>{
        var tring = e.target.name

        this.state.orders[tring].amount = e.target.value
        console.log(this.state);

    }
   
    add = ()=>{
        this.setState({
            numChildren: this.state.numChildren + 1,
          })
          this.state.orders.push(
            {order: '', amount:'1', name:this.props.name}
          )
        console.log(this.state.numChildren);
        
        
    }




    onSubmit=()=>{ 
        var ok = []
        
  

           axios.post(link+'server/',this.state.orders)

           .then(done => {
                alert('done')
        })
            .catch(err => console.log(err))
    
    //    if(ok.length == this.state.orders.length){
    //     this.setState({
    //         done:true
    //     })
    //     console.log('you')
    //    }
 
    
    
    }






    render() {
         const children = [];


        for (var i = 0; i < this.state.numChildren; i += 1) {
          children.push(<AddCard amount={this.amount} order={this.order} i={i}/> );
        };   
    
        return (

            <div >
               
                <h5 style={{margin:'0 10%'}} className="primary">Orders</h5>

          <Form style={{textAlign:'', padding:'10%'}}>
               {children}
 <Button variant="primary" onClick={this.add} style={{width: '100%', marginBottom:'20px'}}>
    + 
  </Button>
  <Button variant="primary" onClick={this.onSubmit}>
    Submit
  </Button>
</Form>
            </div>
        )
    }
}
