import React, { Component } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

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
                // console.log(res.data)
                this.setState({
                    appointments: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    back = (e) => {
        e.preventDefault()
        this.props.history.push('/login')
    }

    render() { 
        
        const mappedAppointments = this.state.appointments.map((userAppointment, i) => {
            console.log(userAppointment)
            return (
                <UserInfo key={i} userAppointment={userAppointment} /> 
            )
        })

        console.log('appointments', this.state.appointments)
        console.log('mappedAppoitments', mappedAppointments)
        return (
            <div>
                <div className="header-container">
                    <header>
                        <div>
                            <button className='header-spacer' onClick={this.back}>
                                {/* <img alt='none' src={back}></img> */}
                            </button>
                        </div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <AccountCircleIcon id="icon-color"/>
                                    <h1>Admin</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div className="form-container">
                    <form id="admin-display">
                        <div className="appt-title-container">
                            <h2 className="appt-title">Appointments</h2>
                        </div>
                        {mappedAppointments}
                    </form>
                </div>

            </div>
        )
    }
}
