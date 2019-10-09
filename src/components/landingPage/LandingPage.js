import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-container">
                <h1 className="welcome">WELCOME</h1>
                <p className="greeting-text">Let's get that pesky oil change taken care of!</p>
                <div className="image-container">
                    <img src="#" alt="oil-change"/>
                </div>
                <button onClick={() => this.props.history.push(`/login`)}
                className="next-btn">LET'S GO!</button>
            </div>
        )
    }
}
