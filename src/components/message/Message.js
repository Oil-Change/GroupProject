import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import io from 'socket.io-client'
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
        this.getUser()
        this.socket = io();
        this.socket.on('room joined', data => {
          this.joinSuccess(data)
        })
        this.socket.on('message dispatched', data => {
          console.log(data)
          this.updateMessages(data);
        })
        this.joinRoom()
        
        this.setState({
            userName:this.props.user.first_name,
            isAdmin:this.props.user.isAdmin
        })
    }

    componentWillUnmount() {
        this.socket.disconnect();
      }
      gettime = () => {
        const date = new Date().getDate()
        const month = new Date().getMonth() + 1
        const hours = new Date().getHours()
        const min = new Date().getMinutes()
        const time = hours + ':' + min + ' ' + month + '/' + date
        this.setState({
            timestamp:time
        })
      }
      sendMessage = () => {

        
        
        
        this.socket.emit('message sent', {
          message: this.state.input,
          roomId: this.state.appointment.id,
          userName:this.props.userName,
          isAdmin: this.state.isAdmin,
          timestamp:this.state.timestamp
        })
        this.setState({
          message: ''
        })
      }
    updateMessages = (messages) => {
        this.setState({
          messages
        })
      }
      joinRoom = () => {
          this.socket.emit('join', {
            room_id: this.state.roomId
          })
        
      }
      getAppt = () => {
        const id = this.props.match.params
        axios.get('/api/appointment',id)
        .then(response =>{
            this.setState({
                appointment:response.data
            })
        })
      }
      getUser = () => {
          
          const id = this.state.appointment.user_id
        axios.get('/api/user', id)
        
        .then(response => {
            this.setState({
                user:response.data
            })
        })
      }

    render() {
        return (
            <div>
                <header>
                    <button>Back</button>
                    <h1>Messages</h1>
                    
                </header>

                <div>
                    <h1>{this.state.user.first_name}</h1> <h1>{this.state.user.last_name}</h1>
                    
                </div>

                <div>{this.state.messages.map(messageObj => 
          
          <h2 key={messageObj.id}>{messageObj.user_name}: {messageObj.message}</h2>)}</div>
                <h1>{this.props.user.first_name}</h1>

                <input className='chatInput' value={this.state.input} onChange={e => {
                this.setState({
                  input: e.target.value
                })
              }} />
              <button onClick={this.sendMessage}>Send</button>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Message)