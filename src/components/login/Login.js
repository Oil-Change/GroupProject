import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePhone } from '../../redux/reducer'
import axios from 'axios';

class Login extends Component {

    updateRedux = (e) => {
        this.props.updatePhone(e)
    }

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/')
    }

    codeSend = async () => {
        let min = 10000
        let max = 99999
        let code = Math.floor(Math.random() * (max - min + 1)) + min
        
        await axios.post('/twilio/send-verify', {code, phone_number: this.props.phone_number})

        await axios.post('/api/user/code/1', {code, phone_number: this.props.phone_number})

    }

    codeVerify = async (code) => {
        const dbCode = await axios.get('/auth/user/code/2', {code, phone_number: this.props.phone_number})
    }

    render() {
        const back = require('../../assets/back.png')
        return (
            <div className="landing-container">
                <header>
                    <div><button className='Header-Btn' onClick={this.back}><img alt='none' src={back}></img></button></div>
                    <div className='header-title'><div className='circle-container'><h1>Login</h1></div></div>
                    <div className='header-right'></div>
                </header>
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