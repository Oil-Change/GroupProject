import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Subscription extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0
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
        axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
            console.log(res)
            alert(`Congratulations you paid this ${amount}!`)
        })
    }

    render() {
        // console.log(typeof this.state.amount)

        return (
                <div>
                    <div >
                    <div className='stripe-constainer'>
                        <StripeCheckout
                            name='CLass' 
                            image={imageUrl}
                            description='This is stuff going beneath the header' 
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
                            <button>Checkout</button>
                        </StripeCheckout>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subscription;

const imageUrl = 'https://www.google.com/url?sa=i&source=images&cd=&ved=&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fmoney%2F&psig=AOvVaw1n_oG-CM9a0vWJFwSLlkyp&ust=1570648126671225'

