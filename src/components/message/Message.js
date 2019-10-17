import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import io from 'socket.io-client'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class Message extends Component {

    constructor(){
        super()

        this.state = {
            id: null,
            roomId: null,
            message: '',
            userName: '',
            isAdmin: null,
            timestamp: '',
            messages:[],
            user: [],
            appointment:[]
        }
    }
    componentDidMount () {
        this.getAppt()
        
        this.socket = io();
        this.socket.on('room joined', data => {
          this.joinSuccess(data)
        })
        this.joinRoom()
        this.socket.on('message dispatched', data => {
          // console.log(data)
          this.updateMessages(data);
        })
        
        this.getUser()
        this.setState({
            roomId: this.props.match.params.id,
            userName:this.props.user.first_name,
            isAdmin:this.props.isAdmin
        })
        
    }

    componentWillUnmount() {
        this.socket.disconnect();
      }

      // gettime = () => {
      
      //   console.log(time)
      //   this.setState({
      //       timestamp:time
      //   })
      // }

      joinSuccess = (messages) => {
        this.setState({
          joined: true,
          messages
        })
      }
      sendMessage = () => {

        
        const date = new Date().getDate()
        const month = new Date().getMonth() + 1
        const hours = new Date().getHours()
        const min = new Date().getMinutes()
        const time = hours + ':' + min + ' ' + month + '/' + date
        console.log(this.state.timestamp)
        this.socket.emit('message sent', {
          message: this.state.message,
          roomId: this.state.roomId,
          userName:this.state.userName,
          isAdmin: this.props.isAdmin,
          timestamp:time
        })
        this.setState({
          message: ''
        })
      }
    updateMessages = (messages) => {
      console.log(messages)
        this.setState({
          messages:messages
        })
      }
      joinRoom = () => {
          this.socket.emit('join room', {
            roomId: this.props.match.params.id
          })
         
      }
      getAppt = () => {
        const id= this.props.match.params.id
        
        axios.get(`/api/appointment/${id}`)
        .then(response =>{
            this.setState({
                appointment:response.data[0]
            })
        })
      }
      getUser = () => {
        setTimeout(() => {
          const id = this.state.appointment.user_id
          // console.log(id)
        axios.get(`/api/user/${id}`)
        
        .then(response => {
            this.setState({
                user:response.data[0]
            })
        })
        
        }, 1000);
          
      }
      back = (e) => {
        e.preventDefault()
        this.props.history.push('/admin')
    }

    render() {
      // console.log(this.state.message)
      
      const back = require('../../assets/back.png')
        return (
          <div>
              <div className="header-container">
                  <header>
                      <div>
                        {this.props.isAdmin ?
                          <button className='header-spacer' onClick={this.back}>
                              <img alt='none' src={back}></img>
                          </button>
                          :
                          null}
                      </div>
                      <div className='header-title'>
                          <div className='circle-container'>
                            <div className="circle-info">
                                <MailOutlineIcon id="icon-color"/>
                                <h1>Messages</h1>
                            </div>
                          </div>
                      </div>
                      <div className='header-spacer'></div>
                  </header>
              </div>
              <div className='message-form-container'>
                <div className='message-container'>
                  <div className='username'>
                      <h1>
                        {this.state.user.first_name} {this.state.user.last_name}
                      </h1>
                  </div>
                  <div className='message-display'>{this.state.messages.map(messageObj => {
                      if (messageObj.is_admin) {
                        return (<div className="admin-bubble">
                                  <h2 className="admin">
                                    {messageObj.message}
                                  </h2>
                                </div>)
                      } else {
                        return (<div className="user-bubble">
                                  <h2 className="user">
                                    {messageObj.message}
                                  </h2>
                                </div>)
                      }
                    }
                  )}
                  </div>
                  <div className="mes-bot">
                    {/* <h1>{this.props.user.first_name}</h1> */}
                    <input className='chatInput' value={this.state.message} placeholder='Message'onChange={e => {
                      this.setState({
                        message: e.target.value
                      })
                    }} />
                    <button onClick={this.sendMessage}>Send</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Message)