import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAppointment } from '../../redux/reducer';

class Stripe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 6000,
            appointment: {},
            car: {}
        }
    }

    onOpened = () => {
        console.log('this is opened')
    }

    onClosed = () => {
        console.log('this is closed')
    }

    onToken = (token) => {
        // console.log(token)
        let { amount } = this.state
        amount /= 100
        // console.log(amount)
        token.card = void 0;
        let price = amount;
        // console.log('Price: ', price)
        let appointment = this.props.appointment;
        let car = this.props.car;
        let cid = car.id;
        // console.log('car: ', cid);
        axios.post('/api/appointment/create', { appointment, price, cid }).then(res => {
            // console.log('Updating Database')
            // console.log('res: ', res.data);
            this.props.updateAppointment(res.data);
            this.props.history.push('/instructions');
            axios.post('/api/payment', { token, amount: this.state.amount * 100 }).then(res => {
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
   return reduxState
}

const mapDispatchToProps = {
    updateAppointment
}

// export default withRouter(Subscription);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stripe));

//this is for testing only
// export default connect(mapStateToProps)(Stripe);

const imageUrl = 'https://th.thgim.com/opinion/op-ed/article19253786.ece/alternates/FREE_660/Th11-Paper%20money'

