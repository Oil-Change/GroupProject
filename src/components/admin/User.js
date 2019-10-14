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

import appleMaps from '../../assets/apple-maps.jpg'

class User extends Component {

    back = (e) => {
        e.preventDefault()
        this.props.history.push('/admin')
    }

    pickUp = () => {
        this.updateAppt()
        console.log('Pick UP')
        let { id } = this.props.appointment
        let pickUpTime = new Date();
        let pickUp = true;
        axios.put(`/api/appointment/pick_up/${id}`, { pickUp, pickUpTime }).then(res => {
            console.log('Updating Pick Up');
        }).catch(err => alert('Pick Up did not update'));
    };

    dropOff = () => {
        this.updateAppt()
        console.log('Drop Off')
        let { id } = this.props.appointment;
        let dropOffTime = new Date();
        let dropOff = true;
        axios.put(`/api/appointment/drop_off/${id}`, { dropOff, dropOffTime }).then(res => {
            console.log('Updaing Drop Off');
        }).catch(err => alert('Drop Off did not update'));
    };

    correctStreetName = () => {
        const {street, city, state, zip} = this.props.appointment

        console.log(street)
        // Street is the only case where spaces are available replaced with '+'
        // const updatedStreet = street.split(' ').join('+')
        // return `${updatedStreet},+${city},+${state}+${zip}`

    }

    // this.props.match.params
    render() {
        const back = require('../../assets/back.png')
        const classes = makeStyles();
        const path = `http://maps.google.com/maps?q=${this.correctStreetName()}`
        return (
            <div>
                
                <header>
                    <div>
                        <button className='Header-Btn' onClick={this.back}>
                            <img alt='none' src={back}></img>
                        </button>
                    </div>
                    <div className='header-title'>
                        <div className='circle-container'>
                            <h1>User Information</h1>
                        </div>
                    </div>
                    <div className='header-right'></div>
                </header>
                <div className='info-container'>
                    <div className='adminUserInfo'>
                        <div className='cardsContainer'>
                            <div className='singleCardContainer'>
                                <Card style={{width: '100%'}} className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Appointment: {this.props.appointment.appointment}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        {this.props.appointment.first_name}{this.props.appointment.last_name}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                        {this.props.appointment.phone_number}
                                        </Typography>
                                        <br/>
                                        <Typography variant="body2" component="p">
                                        {this.props.appointment.make} | {this.props.appointment.model}{this.props.appointment.trim} | {this.props.appointment.color} | {this.props.appointment.year} 
                                            <br/>
                                        {this.props.appointment.license_plate} | {this.props.appointment.mileage}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>

                            <br/>

                            <div>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        title="Apple Maps"> 
                                            <img src={appleMaps}
                                            style={{width: '100%', height:'275px'}} alt="Maps" /> 
                                        </CardMedia>
                                        <CardContent style={{height: '15px'}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Directions
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <a href={path}> {this.props.appointment.street}{this.props.appointment.city}{this.props.appointment.state}
                                        {this.props.appointment.zip} </a> 
                                    </CardActions>
                                </Card>
                            </div>
                        </div>

                        <div className='buttonContainer'>
                            {!this.props.appointment.pick_up
                            ?
                            (<button className='statusButton' onClick={this.pickUp} >Pick Up</button>)
                            :
                            (<button className='statusButton' onClick={this.dropOff}>Drop Off</button>)
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
