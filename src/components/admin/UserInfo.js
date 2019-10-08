import React, { Component } from 'react'

export default class UserInfo extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.users.firstName}{this.props.users.lastName}</h3>
                <p>{this.props.cars.year}{this.props.cars.make}{this.props.cars.model}{this.props.cars.color}</p>

                <button>Message</button>
                <button>Pick Up</button>
                <button>Drop Off</button>
            </div>
        )
    }
}