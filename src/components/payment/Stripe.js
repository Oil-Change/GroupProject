import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Subscription extends Component {
    constructor() {
        super()
        this.state = {
            amount: 6000
        }
    }

    onOpened = () => {
        console.log('this is opened')
    }

    onClosed = () => {
        console.log('this is closed')
    }

    onToken = (token) => {
        console.log(token)
        let { amount } = this.state
        amount /= 100
        console.log(amount)
        token.card = void 0;
        let chargedDate = new Date();
        let price = amount;
        // let { id } = req.params;
        // let { email } = this.props.user.email;
        axios.post('/api/payment', { token, amount: this.state.amount * 100 }).then(res => {
            console.log(res)
            alert(`Congratulations you paid this ${amount}!`)
            this.props.history.push('/instructions');
        });
        // axios.post('/api/receipt', { email }).then(res => {
        //     alert('Receipt sent to your email');
        // });
        // axios.put(`/api/appointment/charged/${id}`, { price, chargedDate }).then(res => {
        //     this.props.history.push('/instructions');
        // }).catch(err => alert('Payment not accepted!'));
    }

    render() {
        return (
            <div>
                <div>
                    <div className='stripe-container'>
                        <StripeCheckout
                            name='Oil Change Charge'
                            image={imageUrl}
                            description='Charging $60.00 for Oil Change'
                            stripeKey={process.env.REACT_APP_STRIPE_KEY}
                            token={this.onToken}
                            amount={this.state.amount}
                            currency="USD"
                            panelLabel="Submit Payment"
                            locale="en"
                            opened={this.onOpened}
                            closed={this.onClosed}
                            allowRememberMe
                            billingAddress={false}
                            zipCode={false}>
                            <button className='stripe-checkout-button'>Checkout</button>
                        </StripeCheckout>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Subscription);

const imageUrl = 'https://th.thgim.com/opinion/op-ed/article19253786.ece/alternates/FREE_660/Th11-Paper%20money'

