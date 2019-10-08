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
import UserInfo from '../components/admin/UserInfo'
import CarInformation from '../components/carInformation/CarInformation'

//Router
export default (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/car" component={CarInformation}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/instructions" component={InstructionsPage}/>
        <Route path="/messages/:id" component={Messages}/>
        {/* admin */}
        <Route path="/admin/user/:id" component={UserInfo}/>
        <Route path="/admin" component={Admin}/>
    </Switch>
)