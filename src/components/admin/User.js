import React, { Component } from 'react'

import axios from 'axios'

import {connect} from 'react-redux'

import {updateAppointment} from '../../redux/reducer'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import appleMaps from '../../assets/apple-maps.jpg'

class User extends Component {
    constructor(){
        super()

        this.state = {
            appointment: "hasn't updated",
            streetAddress: 'this sucks'
        }
    }

    componentDidMount(){
        console.log("match?", this.props.match.params.id)
        console.log("here")
        console.log(this.props.appointment)
        this.getUser()
    }

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/admin')
    }

    getUser = () => {
        let { id } = this.props.match.params
        console.log(id)

        axios.get(`/api/appointment/${id}`)
            .then(res => {
                console.log(res.data[0])
                this.setState({
                    appointment: res.data[0]
                })
                this.correctStreetName()
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    
    correctStreetName = () => {
        console.log(this.state.appointment)
        const {street, city, state, zip} = this.state.appointment
        console.log(street.split(" "))
        // Street is the only case where spaces are available replaced with '+'
        let updatedStreet = street.split(" ").join("+")
        console.log(updatedStreet)
        this.setState({
            streetAddress: `${updatedStreet},+${city},+${state}+${zip}`
        }) 
    }

    pickUp = () => {
        console.log('Pick UP')
        console.log(this.props.match.params)
        let { appointment_id } = this.state.appointment
        console.log(appointment_id)
        axios.put(`/api/appointment/pick_up/${appointment_id}`)
            .then(res => {
            console.log('Updating Pick Up');
            this.props.history.push('/admin')
        })
            .catch(err => alert('Pick Up did not update'));
    };

    dropOff = () => {
        let { appointment_id } = this.props.appointment;
        console.log('Drop Off', appointment_id)
        axios.put(`/api/appointment/drop_off/${appointment_id}`)
            .then(res => {
            console.log('Updaing Drop Off');
            this.props.history.push('/admin')
        })
            .catch(err => alert('Drop Off did not update'));
    };


    render() {
        console.log(this.state.appointment)
        const back = require('../../assets/back.png')
        const classes = makeStyles();
        const path = `http://maps.google.com/maps?q=${this.state.streetAddress}`
        const {street, city, state, zip, first_name, last_name, phone_number, appointment, make, model, trim, year, color, mileage, license_plate, pick_up} = this.state.appointment
        const address = `${this.state.appointment.street}, ${this.state.appointment.city}, ${this.state.appointment.state}, 
        ${this.state.appointment.zip}`
        console.log(this.state.appointment)
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
                                <AccountCircleIcon id='icon-color'/>
                                <h1>User</h1>
                            </div>
                        </div>
                    </div>
                    <div className='header-spacer'></div>
                </header>
                </div>
                <div className='info-container'>
                    <div className='adminUserInfo'>
                        <div className='cardsContainer'>
                            <div className='singleCardContainer'>
                                <Card style={{width: '100%', boxShadow: 'none'}} className={classes.card}>
                                    <CardContent>
                                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Appointment: {this.state.appointment.getMonth() + 1}/{this.state.appointment.getDate()}/{this.state.appointment.getFullYear()}
                                        </Typography> */}
                                        <Typography variant="h5" component="h2">
                                        {first_name} {last_name}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                        {phone_number}
                                        </Typography>
                                        <br/>
                                        <Typography variant="body2" component="p">
                                        {make} | {model} {trim} | {color} | {year} 
                                            <br/>
                                        {license_plate} | {mileage}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>

                            <br/>

                            <div>
                                <Card style={{boxShadow: 'none'}} className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        title="Apple Maps"> 
                                            <img src={appleMaps}
                                            style={{width: '100%'}} alt="Maps" /> 
                                        </CardMedia>
                                        <CardContent style={{height: '15px'}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Directions
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button style={{color: 'blue', textDecoration: 'underline'}}  href={path} target='_blank'> {address} </Button> 
                                    </CardActions>
                                </Card>
                            </div>
                        </div>

                        <div className='buttonContainer'>
                            {
                                !pick_up ?<button className='statusButton' onClick={this.pickUp}>Pick Up</button>
                                :
                                <button className='statusButton' onClick={this.dropOff}>Drop Off</button>
                            }
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

export default connect(mapStateToProps, {updateAppointment})(User)
