import React, { Component } from 'react';
import Stripe from './Stripe';

export default class Payment extends Component {    
    render() {
        return (
            <div>
                <h1>Invoice</h1>
                <h2>Oil Change: $60.00</h2>
                <Stripe />
                {/* onClick={this.props.history.push('/instructions')}  */}
            </div>
        )
    };
}

