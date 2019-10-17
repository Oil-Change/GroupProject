import React, { Component } from 'react';
import Stripe from './Stripe';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { connect } from 'react-redux'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

class Payment extends Component {
    back = (e) => {
        e.preventDefault()
        this.props.history.push('/appointment')
    }
    render() {
        return (
            <div id="instructions-page">
                <div className="header-container">
                    <header>
                        <div className="header-spacer"></div>
                        <div className='header-title'>
                            <div className='circle-container'>
                                <div className="circle-info">
                                    <ShoppingCartOutlinedIcon id="icon-color"/>
                                    <h1>Checkout</h1>
                                </div>
                            </div>
                        </div>
                        <div className='header-spacer'></div>
                    </header>
                </div>
                <div id="lengthen-page" className="background-container">
                    <div className="directions-step-container">
                        <div className="bot-section" id="space-bot-section">
                            <div id="instructions-page" className="general-info-container">
                                <div id="smaller-info" className="general-info">
                                    <div className="info-item">
                                        <CreditCardIcon className="yellowize" fontSize="large"/>
                                    </div>
                                    <div className="info-item">
                                        <p>Your appointment has been book-marked! Make your way to payment to get your appointment made.</p>
                                    </div>
                                    <Stripe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
  }
  
export default connect(mapStateToProps)(Payment)