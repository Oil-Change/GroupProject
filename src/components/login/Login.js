import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePhone } from '../../redux/reducer'
import axios from 'axios';
import PhoneLockedIcon from '@material-ui/icons/PhoneLocked';

 class Login extends Component {
    constructor(){
        super()

        this.state = {
            phone_number: '',
            code: '',
            sentCode: false,
            error: false
        }
    }

    updateRedux = (e) => {
        this.props.updatePhone(e.phone_number)
    }

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/')
    }

    codeSend = () => {
        console.log(this.state.phone_number)
        let min = 10000
        let max = 99999
        let code = Math.floor(Math.random() * (max - min + 1)) + min
        axios.post('/api/user/create', {phone_number: this.state.phone_number}).then((res) => {
            console.log("sending to chris")
            axios.post('/twilio/send-code', {code, phone_number: this.state.phone_number}).then(() => {
                console.log("finished")
                this.setState({sentCode: true})
                axios.post('/api/user/code', {code, phone_number: this.state.phone_number})
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    codeVerify = () => {
        let {code, phone_number} = this.state
        console.log(code, phone_number)
        axios.post('/auth/code', {code, phone_number}).then((res) => {
            console.dir(res)
            let userInfo = res.data
            this.updateRedux(userInfo)
            if(userInfo.is_admin){
                this.props.history.push(`/admin`)
            } else {
                this.props.history.push(`/register`)
            }
        }).catch((error) => {
            console.log(error)
            this.setState({error: true})
        })
    }

    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                <div className="header-container">
                    <header>
                        <div className="header-spacer">
                            <button className='header-btn' onClick={this.back}>
                                <img alt='none' src={back}/>
                            </button>
                        </div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <PhoneLockedIcon id="icon-color"/>
                                    <h1>Login</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div className="background-container">
                    <div className="directions-step-container">
                        <div className="directions-container">
                            <div className="title">
                                <h2>Login With Your Phone</h2>
                            </div>
                            <p>We send you a text with a code. The text is free, you're not charge for it.</p>
                        </div>
                        {/* One of the inputs is wrong */}
                        {
                            this.state.error ? 
                            <div>SMS code was incorrect</div> 
                            : null
                        }
                        <div className="verify-container">
                            <div className="verify">
                                <div className="step-container">
                                    <h2 className="step-text">Step 1:</h2>
                                    <p className="sub-text">Enter your phone number</p>
                                </div>
                                <div className="input-step-container">
                                    <input onChange={(e) => this.setState({phone_number: e.target.value})} placeholder="Mobile number"
                                    className="phone-number-input"/>
                                    <button onClick={this.codeSend}
                                    className="send-btn">Send</button>
                                </div>
                            </div>
                            <div className="verify">
                                <div className="step-container">
                                    <h2 className="step-text">Step 2:</h2>
                                    <p className="sub-text">Enter the code you received your text message</p>
                                </div>
                                <div className="step-container">
                                    
                                    <div className="input-container">
                                        <input className="code-input" onChange={(e) => this.setState({code: e.target.value})} placeholder="SMS code"/>
                                    </div>
                                    <button onClick={this.codeVerify}
                                    className="verify-btn">Verify code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {updatePhone})(Login)