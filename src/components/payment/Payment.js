import React, { Component } from 'react';
import Stripe from './Stripe';

export class Payment extends Component {
    render() {
        return (
            <div>
                <div>Invoice here!</div>
                <Stripe onClick={this.history.push('')} />
            </div>
        )
    }
}

