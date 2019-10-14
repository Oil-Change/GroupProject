import React, { Component } from 'react'
import axios from 'axios'
import { userInfo } from 'os';
import { connect } from 'react-redux'
import { updateAppointment } from '../../redux/reducer'
import {withRouter} from 'react-router-dom'

class UserInfo extends Component {
    constructor() {
        super()
    }




    updateAppt = () => {
        this.props.updateAppointment(this.props.appointments)
    }

    message = () => {
        let { id } = this.props.appointments
        this.updateAppt()
        this.props.history.push(`/messages/${id}`)
    }

   

    render() {
        console.log('user-appt', this.props.appointments)
        console.log('name', this.props.appointment.first_name)
        return (
            
            <div className="user-form-container">
                <div className="user-container">
                <div className="user-info">
                <h3>{this.props.appointments.first_name} {this.props.appointments.last_name}</h3>
                <p>{this.props.appointments.year} {this.props.appointments.make} {this.props.appointments.model} {this.props.appointments.color}</p>
                </div>
                <div className="userBtn-container">
                <button className="userBtn" onClick={this.message}></button>
                <button className="userBtn" onClick={this.pickUp}></button>
                <button className="userBtn" onClick={this.dropOff}></button>
                </div>
                </div>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return state
  }
  
  export default withRouter(connect(mapStateToProps, {updateAppointment})(UserInfo))