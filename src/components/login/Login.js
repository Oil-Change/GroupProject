import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePhone } from '../../redux/reducer'

class Login extends Component {
    updateRedux = (e) => {
        this.props.updatePhone(e)
    }
    render() {
        return (
            <div className="landing-container">
                <p>- Twilio -</p>
                <input onChange={this.updateRedux} placeholder="temp phone number"/>
                <button onClick={() => this.props.history.push(`/register`)}
                className="next-btn">Next</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {updatePhone})(Login)