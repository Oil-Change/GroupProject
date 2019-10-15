import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/reducer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import TextField from '@material-ui/core/TextField';


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
        //are there errors?
        this.validateData()
        if(this.state.error) return

        console.log("phone_number:",this.props.phone_number)

        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            email: this.state.email,
            phone_number: this.props.phone_number
        }

        // this.props.updateUser(body)

        axios.put(`/api/user`, body)
            .then(response => {
                console.log(response)
                this.props.updateUser(response.data)
                console.dir(this.props.user)
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
        if(this.state.state === '' || this.state.state.length > 2){
            this.setState({
                error: true,
                stateError: true
            })
        }
        if(this.state.zip === '' || !Number.isInteger(parseInt(this.state.zip))){
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

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/login')
    }

    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                <div className="header-container">
                    <header>
                        <div className="header-spacer">
                            <button className='header-btn' onClick={this.back}>
                                <img alt='none' src={back}/>
                            </button>
                        </div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <AccountCircleIcon id='icon-color'/>
                                    <h1>Account</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div className="form-container">
                    <form id="register-form">
                        {this.state.error ? 
                            <div className="error-box">Some of the information is incorrect in the form</div> 
                            : null
                        }
                        <div className="form-section full-name">
                            <h2>Full Name</h2>

                            <TextField
                                id="outlined-text-input standard-full-width"
                                label="First name"
                                type="text"
                                fullWidth
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="firstName"
                                onChange={this.handleChange}
                                autoComplete="first name"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-text-input"
                                label="Last name"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="lastName"
                                onChange={this.handleChange}
                                autoComplete="last name"
                                margin="normal"
                                variant="outlined"
                            />
                        </div>

                        <div className="form-section address-info">
                            <h2>Address Information</h2>
                        
                            <TextField
                                id="outlined-text-input"
                                label="Street"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="street"
                                onChange={this.handleChange}
                                autoComplete="address"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-text-input"
                                label="City"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="city"
                                onChange={this.handleChange}
                                autoComplete="city"
                                margin="normal"
                                variant="outlined"
                            />

                            <div className="small-inputs">
                                <TextField
                                    id="outlined-text-input"
                                    label="State"
                                    type="text"
                                    id='mui-input'
                                    style = {{width: '45%'}}
                                    name="state"
                                    onChange={this.handleChange}
                                    autoComplete="state"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <TextField
                                    id="outlined-text-input"
                                    label="Zip"
                                    type="text"
                                    id='mui-input'
                                    style = {{width: '45%'}}
                                    name="zip"
                                    onChange={this.handleChange}
                                    autoComplete="zip"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                        </div>
                        <div className="form-section contact-info">
                            <h2>Contact</h2>

                            <TextField
                                style = {{width: '100%'}}
                                inputStyle ={{width: '100%'}}
                                id="outlined-text-input"
                                label="Email"
                                type="text"
                                id='mui-input'
                                name="email"
                                onChange={this.handleChange}
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                        <div className="next-btn-container">
                            <button onClick={this.submit}>Next</button>
                        </div>
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