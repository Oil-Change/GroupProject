import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/reducer'

class Register extends Component {
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
        const body = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            street:this.state.street,
            city:this.state.city,
            state:this.state.state,
            zip:this.state.zip,
            email:this.state.email

        }
        axios.put('/api/register', body)
        .then(response => {
            this.props.updateUser(response.data)
            this.props.history.push('/#')
        })
        .catch(error => {
            console.log(error)
        })
        //push to store
        
    }
    render() {
        return (
            <div>
                <header>Registration</header>
                <div>
                <form>
                <input type='text' placeholder='First Name' onChange={this.handleChange} name='firstName'></input>

                <input type='text'  placeholder='Last Name' onChange={this.handleChange} name='lastName'></input>

                <input type='text'  placeholder='Street' onChange={this.handleChange} name='street'></input>

                <input type='text'  placeholder='City' onChange={this.handleChange} name='city'></input>

                <input type='text'  placeholder='State' onChange={this.handleChange} name='state'></input>

                <input type='text'  placeholder='Zip Code' onChange={this.handleChange} name='zip'></input>

                <input type='email'  placeholder='Email' onChange={this.handleChange} name='email'></input>

                <button onClick={this.submit}>Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {updateUser})(Register)