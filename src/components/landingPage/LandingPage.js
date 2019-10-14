import React, { Component } from 'react'
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';

export default class LandingPage extends Component {
    render() {

        const img = require('../../assets/landingPage3.png')
        return (
            <div className="landing-container">
                <div className="top-section">
                    <div className="image-container">
                        <img src={img} alt="oil-change"/>
                    </div>
                </div>
                <div className="bot-section">
                    <h1 className="welcome">WELCOME!</h1>
                    <div className="general-info-container">
                        <div className="general-info">
                            <div className="info-item">
                                <EmojiObjectsOutlinedIcon className="yellowize" fontSize="large"/>
                            </div>
                            <div className="info-item">
                                <h3><b>Make Your Day Seemless</b></h3>
                            </div>
                            <div className="info-item">
                                <p>Just add your address and you'll see everything you need!</p>
                            </div>
                        </div>
                        <div className="general-info">
                            <div className="info-item">
                                <EmojiTransportationOutlinedIcon className="yellowize" fontSize="large"/>
                            </div>
                            <div className="info-item">
                                <h3><b>Fast And Easy Pickup</b></h3>
                            </div>
                            <div className="info-item">
                                <p>Certified drivers take exceptional care of your car from doorstep to delivery. </p>
                            </div>
                        </div>
                        <div className="general-info">
                            <div className="info-item">
                                <BuildOutlinedIcon className="yellowize" 
                                fontSize="large"/>
                            </div>
                            <div className="info-item">
                                <h3><b>Professional Service</b></h3>
                            </div>
                            <div className="info-item">
                                <p>We are more than just an oil change, HapWagon handles your vehicle’s needs.</p>
                            </div>
                        </div>
                    </div>
                    <button className="go-btn" onClick={() => this.props.history.push(`/login`)}
                    className="next-btn">LET'S GO!</button>
                </div>
            </div>
        )
    }
}
