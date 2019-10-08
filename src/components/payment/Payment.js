import React, { Component } from 'react';
import Stripe from './Stripe';
import axios from 'axios';

export class Payment extends Component {
    state = {
        invoiceAmount = 0
    };

    componentDidMount() {
        axios.get('/api/appointment').then(res => {
            this.setState({
                invoiceAmount: res.data.price
            })
        }).catch(err => alert('Unable to Connect to DataBase'));
    };

    render() {
        return (
            <div>
                <div>Invoice here!</div>
                <div>{this.state.invoiceAmount}</div>
                <Stripe onClick={this.history.push('/instructions')} />
            </div>
        )
    };
}

