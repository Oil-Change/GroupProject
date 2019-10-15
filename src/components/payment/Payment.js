import React, { Component } from 'react';
import Stripe from './Stripe';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';

export default class Payment extends Component {
    back = (e) => {
        e.preventDefault()
        this.props.history.push('/appointment')
    }
    render() {
        const back = require('../../assets/back.png')
        return (
            <div>
                 <div className="header-container">
                  <header>
                      <div>
                          <button className='header-spacer' onClick={this.back}>
                              <img alt='none' src={back}></img>
                          </button>
                      </div>
                      <div className='header-title'>
                          <div className='circle-container'>
                            <div className="circle-info">
                                <PaymentOutlinedIcon id="icon-color"/>
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

