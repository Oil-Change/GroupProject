import React, { Component } from 'react';
import Stripe from './Stripe';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { connect } from 'react-redux'

class Payment extends Component {
    back = (e) => {
        e.preventDefault()
        this.props.history.push('/appointment')
    }
    render() {
        console.log(this.props)
        const back = require('../../assets/back.png')
        return (
            <div>
                <div className="header-container">
                    <header>
                        <div className='header-spacer'>
                            <button className='header-btn' onClick={this.back}>
                                <img alt='none' src={back}/>
                            </button>
                        </div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <CreditCardIcon id='icon-color'/>
                                    <h1>Payment</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div className="pay-form-container">
                    <div className="inv-container">
                        <h1>Invoice</h1>
                        <h2>Oil Change: $60.00</h2>
                        <Stripe />
                    </div>
                </div>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return state
  }
  
export default connect(mapStateToProps)(Payment)