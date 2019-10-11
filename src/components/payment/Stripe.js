import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAppointment } from '../../redux/reducer';

class Subscription extends Component {
    constructor() {
        super()
        this.state = {
            amount: 6000,
            appointment: {}
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
        console.log('Charged Date: ', chargedDate)
        let price = amount;
        console.log('Price: ', price)
        let { appointment } = this.props;
        console.log('appointment: ', appointment)
        axios.post('/api/appointment/create', { appointment, price, chargedDate }).then(res => {
            console.log('Updating Database')
            console.log('res: ', res.data);
            axios.post('/api/payment', { token, amount: this.state.amount * 100 }).then(res => {
                console.log('Updating stripe')
                console.log(res);
                alert(`Congratulations you paid this ${amount}!`);
                this.props.history.push('/instructions');
            });
        }).catch(err => alert('Unable to connect to DataBase'));
    };

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
const mapStateToProps = (reduxState) => {
    const { appointment } = reduxState;
    return { appointment };
}

const mapDispatchToProps = {
    updateAppointment
}

// export default withRouter(Subscription);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subscription));

const imageUrl = 'https://th.thgim.com/opinion/op-ed/article19253786.ece/alternates/FREE_660/Th11-Paper%20money'

