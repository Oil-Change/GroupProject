import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Subscription extends Component {
    constructor(props) {
        super(props)
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
        token.card = void 0
        axios.post('/api/payment', { token, amount: this.state.amount * 100 }).then(res => {
            console.log(res)
            alert(`Congratulations you paid this ${amount}!`)
        })
    }

    charge = (req, res) => {
        const id = req.params;
        axios.put(`/api/appointment/charged/${id}`).then(res => {

        }).catch(err => alert('Unable to Complete Transaction'));
    }

    render() {
        return (
                <div>
                    <div >
                    <div className='stripe-constainer'>
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

export default Subscription;

const imageUrl = 'https://th.thgim.com/opinion/op-ed/article19253786.ece/alternates/FREE_660/Th11-Paper%20money'

