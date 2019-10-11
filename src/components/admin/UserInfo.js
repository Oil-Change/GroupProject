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
        return (
            <div className="user-form-container">
                <div className="user-container">
                <div className="user-info">
                <h3>{this.props.appointment.first_name} {this.props.appointment.last_name}</h3>
                <p>{this.props.appointment.year} {this.props.appointment.make} {this.props.appointment.model} {this.props.appointment.color}</p>
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