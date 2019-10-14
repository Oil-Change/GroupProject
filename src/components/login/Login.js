import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePhone } from '../../redux/reducer'
import axios from 'axios';

export class Login extends Component {
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
            <div className="landing-container">
                <header>
                    <div><button className='Header-Btn' onClick={this.back}><img alt='none' src={back}></img></button></div>
                    <div className='header-title'><div className='circle-container'><h1>Login</h1></div></div>
                    <div className='header-right'></div>
                </header>
                {this.state.error ? 
                    <div>SMS code was incorrect</div> 
                    : null
                }
                <div className="verify">
                    <input onChange={(e) => this.setState({phone_number: e.target.value})} placeholder="Mobile number"/>
                    <button onClick={this.codeSend}
                    className="next-btn">Send SMS code</button>
                </div>

                {this.state.sentCode ? 
                    <div className="verify">
                        <input onChange={(e) => this.setState({code: e.target.value})} placeholder="SMS code"/>
                        <button onClick={this.codeVerify}
                        className="next-btn">Verify code</button>
                    </div>
                    : <div className="verify"></div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {updatePhone})(Login)