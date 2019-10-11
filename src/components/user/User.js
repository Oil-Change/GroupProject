import React, { Component } from 'react'

import {connect} from 'react-redux'

import {updateAppointment} from '../../redux/reducer'

class User extends Component {

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/appointment')
    }
    // this.props.match.params
    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                <header>
                    <div><button className='Header-Btn' onClick={this.back}><img alt='none' src={back}></img></button></div>
                    <div className='header-title'><div className='circle-container'><h1>User Information</h1></div></div>
                    <div className='header-right'></div>
                </header>

                <ul>
                    User Information
                    <li>Phone Number: {this.props.appointment.phone_number} </li>
                    <li>First Name: {this.props.appointment.first_name} </li>
                    <li>Last Name: {this.props.appointment.last_name} </li>
                    <li>Street: {this.props.appointment.street} </li>
                    <li>City: {this.props.appointment.city} </li>
                    <li>State: {this.props.appointment.state} </li>
                    <li>Zip: {this.props.appointment.zip} </li>
                    <li>Email: {this.props.appointment.email} </li>
                </ul>
                <ul>
                    Car Information
                    <li>License Plate: {this.props.appointment.license_plate} </li>
                    <li>Make: {this.props.appointment.make} </li>
                    <li>Model: {this.props.appointment.model} </li>
                    <li>Year: {this.props.appointment.year} </li>
                    <li>Trim: {this.props.appointment.trim} </li>
                    <li>Mileage: {this.props.appointment.mileage} </li>
                    <li>Color: {this.props.appointment.color} </li>

                </ul>

                <button>Pick Up</button>
                <button>Drop Off</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {updateAppointment})(User)
