import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {

        const img = require('../../assets/landingPage3.png')
        return (
            <div className="landing-container">
                <div className="top-section">
                <h1 className="welcome">WELCOME</h1>
                <div className="image-container">
                    <img src={img} alt="oil-change"/>
                </div>
                </div>
                <div className="bot-section">
                
                <p className="greeting-text">Let's get that pesky oil change taken care of!</p>
                <button onClick={() => this.props.history.push(`/login`)}
                className="next-btn">LET'S GO!</button>
                </div>
            </div>
        )
    }
}
