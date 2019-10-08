import React, { Component } from 'react';
import Stripe from '../stripe/Stripe';

export class Payment extends Component {
    render() {
        return (
            <div>
                
                <Stripe /> 
            </div>
        )
    }
}

