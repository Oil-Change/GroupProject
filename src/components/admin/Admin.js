import React, { Component } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'

export default class Admin extends Component {
    constructor() {
        super()

        this.state = {
            appointments: []
        }
    }

    componentDidMount() {
        this.getAppointments()
    }

    getAppointments = () => {
        axios.get('/api/appointment/today')
            .then(res => {
                this.setState({
                    appointments: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const mappedAppointments = this.state.appointments.map((appointment, i) => {
            return (
                <UserInfo key={i} appointment={appointment} />
            )
        })

        console.log('appointments', this.state.appointments)
        console.log('mappedAppoitments', mappedAppointments)
        return (
            <div>
                <header>
                    <button>Back</button>
                    <h1>Dashboard</h1>
                </header>

                {mappedAppointments}
            </div>
        )
    }
}
