import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Import components
import LandingPage from '../components/landingPage/LandingPage';
import InstructionsPage from '../components/instructionsPage/InstructionsPage'
import Login from '../components/login/Login'
import Register from '../components/register/Register';
import Stripe from '../components/payment/Stripe'
import Messages from '../components/message/Message'

//Router
export default (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/car" component={SignUp}/>
        <Route path="/payment" component={Stripe}/>
        <Route path="/instructions" component={InstructionsPage}/>
        <Route path="/messages" component={Messages}/>
    </Switch>
)