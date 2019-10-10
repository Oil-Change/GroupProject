import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/reducer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

class Register extends Component {
    constructor() {
        super()
        this.state = {
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

    submit = (e) => {
        e.preventDefault()
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            email: this.state.email
        }
        axios.put(`/api/user`, body)
            .then(response => {
                console.log(response.data)
                this.props.updateUser(response.data)
                //push to store
                this.props.history.push('/car')
            })
            .catch(error => {
                console.log(error)
            })

    }

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/login')
    }

    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                <header>
                    <div><button className='Header-Btn' onClick={this.back}><img alt='none' src={back}></img></button></div>
                    <div className='header-title'><div className='circle-container'><AccountCircleIcon id='AccountColor'/><h1>Account Info</h1></div></div>
                    <div className='header-right'></div>
                </header>

                        {/* need some text  */}

                <div className="carForm-container">
                    <form>
                        <input type='text' placeholder='First name' onChange={this.handleChange} name='firstName' />
                        <input type='text' placeholder='Last name' onChange={this.handleChange} name='lastName' />
                        <input type='text' placeholder='Street' onChange={this.handleChange} name='street' />
                        <input type='text' placeholder='City' onChange={this.handleChange} name='city' />
                        <div>
                        <input type='text' placeholder='State' onChange={this.handleChange} name='state' className='small-input'/>
                        <input type='text' placeholder='Zip code' onChange={this.handleChange} name='zip'className='small-input'/>
                        </div>
                        <input type='email' placeholder='Email' onChange={this.handleChange} name='email' />

                        <button onClick={this.submit}>Next</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { updateUser })(Register)