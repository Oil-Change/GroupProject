import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Register extends Component {
    constructor(){
        super()
        this.state={
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        axios.put('/api/register')// need to get api URL
        //push to store
        
    }
    render() {
        return (
            <div>
                <form>
                <input type='text' placeholder='First Name' onChange={this.handleChange} name='firstName'></input>

                <input type='text'  placeholder='Last Name' onChange={this.handleChange} name='lastName'></input>

                <input type='text'  placeholder='Street' onChange={this.handleChange} name='street'></input>

                <input type='text'  placeholder='City' onChange={this.handleChange} name='city'></input>

                <input type='text'  placeholder='State' onChange={this.handleChange} name='state'></input>

                <input type='text'  placeholder='Zip Code' onChange={this.handleChange} name='zip'></input>

                <input type='email'  placeholder='Email' onChange={this.handleChange} name='email'></input>

                <Link>
                <button>Submit</button> 
                </Link>
                {/* Link on button to route of next component */}
                </form>
            </div>
        )
    }
}
