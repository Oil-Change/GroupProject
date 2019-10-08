import React from 'react'
import {Switch, Route} from 'react-router-dom'

//Import components
import LandingPage from '../components/landingPage/LandingPage';
import InstructionsPage from '../components/instructionsPage/InstructionsPage'
import Login from '../components/login/Login'
import Register from '../components/register/Register';
import Payment from '../components/payment/Payment'
import Messages from '../components/message/Message'
import Admin from '../components/admin/Admin'
import User from '../components/admin/User'

//Router
export default (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/car" component={SignUp}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/instructions" component={InstructionsPage}/>
        <Route path="/messages" component={Messages}/>
        {/* admin */}
        <Route path="/admin" component={Admin}/>
        <Route path="/admin/user/:id" component={User}/>
    </Switch>
)