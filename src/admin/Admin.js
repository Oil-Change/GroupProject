import React, { Component } from 'react'
import axios from 'axios'
import UserInfo from '../userInfo/UserInfo'

export default class Admin extends Component {
    constructor(){
        super()

        this.state = {
            appointment: []
        }
    }

    componentDidMount(){
        this.getAppointments
    }

    getAppointments = () => {
        axios.get('/api/appointment/today')
            .then(res => {
                this.setState({
                    appointment: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render() {
        const mappedAppointments = this.state.appointment.map((appointment, i) => {
            return (
                <UserInfo key={i} appointment={appointment}/>
            )
        })
        return (
            <div>
                <header>Dashboard</header>

                {mappedAppointments}
            </div>
        )
    }
}
