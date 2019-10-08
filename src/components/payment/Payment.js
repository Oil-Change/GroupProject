import React, { Component } from 'react';
import Stripe from './Stripe';

export default class Payment extends Component {
    state = {
        price: 60,
        charged: ''
    };
    
    render() {
        return (
            <div>
                <h1>Invoice</h1>
                <h2>Oil Change: $60.00</h2>
                <Stripe amount={this.state.price}/>
            </div>
        )
    };
}

