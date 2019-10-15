import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

export class InstructionsPage extends Component {
    constructor() {
        super()
    }

    message = () => {
        let { id } = this.props.appointment
        this.props.history.push(`/messages/${id}`)
    }

    render() {
        return (
            <div id="instructions-page">
                <div className="header-container">
                    <header>
                        <div className="header-spacer"></div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <InsertCommentOutlinedIcon id="icon-color"/>
                                    <h1>Instructions</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div id="lengthen-page" className="background-container">
                    <div className="directions-step-container">
                        <div className="bot-section">
                            <div id="instructions-page" className="general-info-container">
                                <div id="smaller-info" className="general-info">
                                    <div className="info-item">
                                        <AccessAlarmsIcon className="yellowize" fontSize="large"/>
                                    </div>
                                    <div className="info-item">
                                        <p>Have your car available for pick up from 7-11am.</p>
                                    </div>
                                </div>
                                <div id="smaller-info" className="general-info">
                                    <div className="info-item">
                                        <VpnKeyIcon 
                                        className="yellowize" fontSize="large"/>
                                    </div>
                                    <div className="info-item">
                                        <p>Either be home or have your keys hidden under your front door mat.</p>
                                    </div>
                                </div>
                                <div id="smaller-info" className="general-info">
                                    <div className="info-item">
                                        <SentimentSatisfiedAltIcon className="yellowize" 
                                        fontSize="large"/>
                                    </div>
                                    <div className="info-item">
                                        <p>Enjoy your day!</p>
                                    </div>
                                </div>
                                <div id="smaller-info" className="general-info">
                                    <div className="info-item">
                                        <DirectionsCarIcon className="yellowize" 
                                        fontSize="large"/>
                                    </div>
                                    <div className="info-item">
                                        <p>Your Car will be dropped off before 5pm that day.</p>
                                    </div>
                                </div>
                                <div id="smaller-info" className="general-info">
                                    <div className="info-item">
                                        <EventAvailableIcon className="yellowize" 
                                        fontSize="large"/>
                                    </div>
                                    <div className="info-item">
                                        <p>The driver can drop the keys off directly to you or stash them where we picked them up.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="message-bubble" onClick={this.message}>
                    <MessageOutlinedIcon fontSize="large" />
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps)(InstructionsPage))
