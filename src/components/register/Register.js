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
            email: '',
            validationString: [],

            error: false,
            fnError: false,
            lnError: false,
            streetError: false,
            cityError: false,
            zipError: false,
            emailError: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.validateData()
        if(this.state.error) return
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

    validateData = () => {
        if(this.state.firstName === ''){
            this.setState({
                error: true,
                fnError: true
            })
        }
        if(this.state.lastName === ''){
            this.setState({
                error: true,
                lnError: true
            })
        }
        if(this.state.street === ''){
            this.setState({
                error: true,
                streetError: true
            })
        }
        if(this.state.city === ''){
            this.setState({
                error: true,
                cityError: true
            })
        }
        if(this.state.state === '' || this.state.state.length > 1){
            this.setState({
                error: true,
                stateError: true
            })
        }
        if(this.state.zip === '' || Number.isInteger(parseInt(this.state.zip))){
            this.setState({
                error: true,
                zipError: true
            })
        }
        if(this.state.email === ''){
            this.setState({
                error: true,
                emailError: true
            })
        }
    }

    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                <header>
                    <div><button className='Header-Btn'><img src={back}></img></button></div>
                    <div className='header-title'><div className='circle-container'><AccountCircleIcon id='AccountColor'/><h1>Account Info</h1></div></div>
                    <div className='header-right'></div>
                </header>

                        {/* need some text  */}

                <div className="carForm-container">
                    <form>
                        {this.state.error ? 
                            <div className="error-box">Some of the information is incorrect in the form</div> 
                            : null
                        }
                        <input type='text' className={this.state.fnError ? "redError" : "form-input"} placeholder='First name' onChange={this.handleChange} name='firstName' />
                        <input type='text' className={this.state.lnError ? "redError" : "form-input"} placeholder='Last name' onChange={this.handleChange} name='lastName' />
                        <input type='text' className={this.state.streetError ? "redError" : "form-input"} placeholder='Street' onChange={this.handleChange} name='street' />
                        <input type='text' className={this.state.cityError ? "redError" : "form-input"} placeholder='City' onChange={this.handleChange} name='city' />
                        <div>
                        <input type='text' className={this.state.stateError ? "redError" : "form-input"} placeholder='State' onChange={this.handleChange} name='state' className='small-input'/>
                        <input type='text' className={this.state.zipError ? "redError" : "form-input"} placeholder='Zip code' onChange={this.handleChange} name='zip'className='small-input'/>
                        </div>
                        <input type='email' className={this.state.emailError ? "redError" : "form-input"} placeholder='Email' onChange={this.handleChange} name='email' />

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