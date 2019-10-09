import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {

        const img = require('../../assets/20306.png')
        return (
            <div className="landing-container">
                <h1 className="welcome">WELCOME</h1>
                <p className="greeting-text">Let's get that pesky oil change taken care of!</p>
                <div className="image-container">
                    <img src={img} alt="oil-change"/>
                </div>
                <button onClick={() => this.props.history.push(`/login`)}
                className="to-twillio-btn">LET'S GO!</button>
            </div>
        )
    }
}
