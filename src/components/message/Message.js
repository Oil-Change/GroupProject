import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()

        this.state = {
            id: null,
            roomId: null,
            message: '',
            userName: '',
            isAdmin: null
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
