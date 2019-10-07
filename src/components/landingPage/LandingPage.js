import React, { Component } from 'react'

export default class LandingPage extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div classname="landing-container">
                <h1 className="welcome">WELCOME</h1>
                <p className="greeting-text">Let's get that pesky oil change taken care of!</p>
                <div className="image-container">
                    <img src="#"/>
                </div>
                <button onClick={() => this.props.history.push(`/#`)}
                className="to-twillio-btn">LET'S GO!</button>
            </div>
        )
    }
}
