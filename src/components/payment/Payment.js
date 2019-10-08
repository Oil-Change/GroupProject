import React, { Component } from 'react';
import Stripe from './Stripe';
import axios from 'axios';

export default class Payment extends Component {
    // state = {
    //     invoiceAmount = 0
    // };

    // componentDidMount() {
    //     axios.get('/api/appointment').then(res => {
    //         this.setState({
    //             invoiceAmount: res.data.price
    //         })
    //     }).catch(err => alert('Unable to Connect to DataBase'));
    // };

    render() {
        return (
            <div>
                <h1>Invoice here!</h1>
                {/* <div>{this.state.invoiceAmount}</div>
                <Stripe onClick={this.history.push('/instructions')} /> */}
            </div>
        )
    };
}

