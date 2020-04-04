import React, { Component } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import link from '../link'
export default class List extends Component {
    state={
        orders:[]
    }
    componentDidMount(){
        axios.get(link + 'server/orders/')
        .then(data => {this.setState({
            orders: data.data
        })
    console.log(data.data);
    
    })
        .catch(err=>console.log(err))
    }
    done=(id)=>{
        axios.delete(link+'server/'+id)
        .then(data => console.log(data))
        .catch(err=>console.log(err))

   
        let ord = this.state.orders.filter(data => data._id !=id)
        this.setState({
            orders:ord
        })
        console.log(
          ord
            );
    }
    render() {
        return (
            <div >
                {this.state.orders.map(data=><>
                <div style={{width:'80%', margin:'10px auto', border:'solid #f0f0f0 2px', borderRadius:'10px',padding:'20px'}}>
<span style={{color:'blue'}}>{data.amount}X</span> <span style={{fontSize:'25px'}}> {data.order} </span> <br/>
<span style={{color:'gray',fontSize:'12px'}}>
order by: {data.name}
</span>
<br/> <Button variant="danger" onClick={()=>this.done(data._id)}>X</Button>
                </div>
                </>)}
                {this.state.orders.length?'': <h1 style={{textAlign:'center',color:'rgba(255,0,0,0.7)'}}>nothing ¯\_(ツ)_/¯ </h1>}
            </div>
        )
    }
}
