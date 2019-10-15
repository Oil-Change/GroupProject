import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class InstructionsPage extends Component {
    constructor() {
        super()
    }

    message = () => {
        let { id } = this.props.appointment
        this.props.history.push(`/messages/${id}`)
    }

    render() {
        return (
            <div>
                <div className="header-container">
                    <header>
                        <div className='header-spacer'>
                            <button className='header-btn' onClick={this.back}>
                                <img alt='none' src={back}/>
                            </button>
                        </div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <DriveEtaIcon id='icon-color'/>
                                    <h1>Vehicle Info</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div className="ins-form-container">
                    <div className="ins-container">

                        <ol>
                            <li>Have your car available for pick up from 7-11am.</li>
                            <li>Either be home or have your keys hidden in a previously designated location with your driver.</li>
                            <li>Enjoy your day!</li>
                            <li>Your Car will be dropped off before 5pm that day.</li>
                            <li>The driver can drop the keys off directly to you or stash them in the same location they were picked up.(Discuss options with driver)</li>
                        </ol>

                        <button className="ins-message" onClick={this.message}><ing></ing></button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps)(InstructionsPage))
