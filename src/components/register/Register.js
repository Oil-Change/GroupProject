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
        axios.put('/api/user', body)
        .then(response => {
            this.props.updateUser(response.data)
            //push to store
            this.props.history.push('/#')
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    render() {
        return (
            <div>
                <header>Registration</header>
                <div className="carForm-container">
                    <form>
                        <input type='text' placeholder='First Name' onChange={this.handleChange} name='firstName'/>
                        <input type='text'  placeholder='Last Name' onChange={this.handleChange} name='lastName'/>
                        <input type='text'  placeholder='Street' onChange={this.handleChange} name='street'/>
                        <input type='text'  placeholder='City' onChange={this.handleChange} name='city'/>
                        <input type='text'  placeholder='State' onChange={this.handleChange} name='state'/>
                        <input type='text'  placeholder='Zip Code' onChange={this.handleChange} name='zip'/>
                        <input type='email'  placeholder='Email' onChange={this.handleChange} name='email'/>

                        <button onClick={this.submit}>Next</button>
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