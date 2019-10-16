import React, { Component } from 'react'
import axios from 'axios'
import { userInfo } from 'os';
import { connect } from 'react-redux'
import { updateAppointment } from '../../redux/reducer'
import {withRouter} from 'react-router-dom'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Badge from '@material-ui/core/Badge';

class UserInfo extends Component {

    constructor() {
        super()

        this.state = { 
            invisible: false,
            pickUp: false,
            dropOff: false

        }
    }

    componentDidMount() {
        console.log(this.props.userAppointment)
        
    }

    message = () => {
        let { appointment_id } = this.props.userAppointment
        this.props.history.push(`/messages/${appointment_id}`)
    }

    pickUp = () => {
        if(!this.state.pickUp){
            let { appointment_id } = this.props.userAppointment
            this.props.history.push(`admin/user/pick_up/${appointment_id}`)
            this.setState({
                pickUp: true
            })
        }
    }

    dropOff = () => {
        if(!this.state.dropOff){
            let { appointment_id } = this.props.userAppointment
            this.props.history.push(`admin/user/drop_off/${appointment_id}`)
            this.setState({
                dropOff: true
            })
        }
    }

    render() {
        const { first_name, last_name, year, make, model, color } = this.props.userAppointment

        return (
            <div className="user-form-container">
                <div className="user-container">
                    <div className="user-info">
                        <h3>{first_name} {last_name}</h3>
                        <p>{year} {make} {model} {color}</p>
                    </div>
                    <div className="userBtn-container">
                        <button className="userBtn" onClick={this.message}>
                            <Badge color="secondary" variant="dot" invisible={this.state.invisible}>
                                <MailOutlineIcon />
                            </Badge>
                        </button>
                        <button className={
                            this.state.dropOff ? "userBtn btn-done"
                            :
                            "userBtn"
                        } onClick={this.pickUp}><AssignmentReturnedOutlinedIcon/></button>
                        <button className={
                            this.state.dropOff ? "userBtn btn-done"
                            :
                            "userBtn"
                        } onClick={this.dropOff}><AssignmentTurnedInOutlinedIcon/></button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps, { updateAppointment })(UserInfo))
