import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCar } from '../../redux/reducer'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TextField from '@material-ui/core/TextField';

class CarInformation extends Component {
    constructor() {
        super()
        this.state = {
            make: '',
            model: '',
            trim: '',
            year: 0,
            color: '',
            licensePlate: '',
            mileage: 0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        let phoneNumber = this.props.user.phone_number
        console.log(phoneNumber)

        const body = {
            make: this.state.make,
            model: this.state.model,
            trim: this.state.trim,
            year: this.state.year,
            color: this.state.color,
            licensePlate: this.state.licensePlate,
            mileage: this.state.mileage

        }
        console.log('Body: ', body);
        axios.post(`/api/car/${phoneNumber}`, body)
            .then(response => {
                this.props.updateCar(response.data)
                this.props.history.push('/appointment')
            })
            .catch(error => {
                console.log(error)
            })
        //push to store
    }

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/register')
    }

    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                <div className="header-container">
                    <header>
                        <div className='header-spacer'>
                            <button className='header-btn' onClick={this.back}>
                                <img alt='none' src={back}/>
                            </button>
                        </div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <DriveEtaIcon id='icon-color'/>
                                    <h1>Vehicle Info</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div className="form-container">
                    <form id="car-form">
                        <div className="form-section full-name">
                            <h2>Car Information</h2>

                            <TextField
                                id="outlined-text-input standard-full-width"
                                label="Make"
                                type="text"
                                fullWidth
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="make"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-text-input"
                                label="Model"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="model"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-text-input"
                                label="Trim (optional)"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="trim"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-text-input"
                                label="Year"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="year"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-text-input"
                                label="Color"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="color"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-text-input"
                                label="License"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="license"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-text-input"
                                label="Mileage"
                                type="text"
                                id='mui-input'
                                style = {{width: '100%'}}
                                name="mileage"
                                onChange={this.handleChange}
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

export default connect(mapStateToProps, {updateCar})(CarInformation)