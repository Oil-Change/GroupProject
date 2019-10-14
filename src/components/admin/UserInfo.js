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
        this.props.updateAppointment(this.props.userAppointment)
    }

    message = () => {
        let { id } = this.props.userAppointment
        this.updateAppt()
        this.props.history.push(`/messages/${id}`)
    }

    pickUp = () => {
        this.updateAppt()
        this.props.history.push(`admin/user/pick_up`)
    }

    dropOff = () => {
        this.updateAppt()
        this.props.history.push(`admin/user/drop_off`)
    }

    render() {
        const {first_name, last_name, year, make, model, color} = this.props.userAppointment
        return (
            
            <div className="user-form-container">
                <div className="user-container">
                    <div className="user-info">
                        <h3>{first_name} {last_name}</h3>
                        <p>{year} {make} {model} {color}</p>
                    </div>
                    <div className="userBtn-container">
                        <button className="userBtn" onClick={this.message}>Message</button>
                        <button className="userBtn" onClick={this.pickUp}>Pick Up</button>
                        <button className="userBtn" onClick={this.dropOff}>Drop Off</button>
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
