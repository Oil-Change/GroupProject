import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {

        const img = require('../../assets/landingPage2.png')
        return (
            <div className="landing-container">
                <div>
                <h1 className="welcome">WELCOME</h1>
                <p className="greeting-text">Let's get that pesky oil change taken care of!</p>
                </div>
                <div className="image-container">
                    <img src={img} alt="oil-change"/>
                    <span></span>
                </div>
                <button onClick={() => this.props.history.push(`/login`)}
                className="next-btn">LET'S GO!</button>
            </div>
        )
    }
}
