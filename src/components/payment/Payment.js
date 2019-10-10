import React, { Component } from 'react';
import Stripe from './Stripe';

export default class Payment extends Component {   
    back = (e) => {
        e.preventDefault()
        this.props.history.push('/appointment')
    }
    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                <header>
                    <div><button className='Header-Btn' onClick={this.back}><img alt='none' src={back}></img></button></div>
                    <div className='header-title'><div className='circle-container'><h1>Payment</h1></div></div>
                    <div className='header-right'></div>
                </header>
                <div className="pay-form-container">
                    <div className="inv-container">
                <h1>Invoice</h1>
                <h2>Oil Change: $60.00</h2>
                <Stripe />
                {/* onClick={this.props.history.push('/instructions')}  */}
                </div>
                </div>
            </div>
        )
    };
}

