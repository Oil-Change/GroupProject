import React, { Component } from 'react'
import axios from 'axios'

export default class UserInfo extends Component {
    constructor() {
        super()
    }

    message = () => {

    }

    pickUp = () => {
        // /api/appointment/pick_up/:id
    }

    dropOff = () => {
        // /api/appointment/drop_off/:id
    }

    render() {
        return (
            <div>
                <h3>{this.props.appointment.first_name} {this.props.appointment.last_name}</h3>
                <p>{this.props.appointment.year} {this.props.appointment.make} {this.props.appointment.model} {this.props.appointment.color}</p>

                <button onClick={this.message}>Message</button>
                <button onClick={this.pickUp}>Pick Up</button>
                <button onClick={this.dropOff}>Drop Off</button>
            </div>
        )
    }
} 