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

    // this.props.match.params
    render() {
        const back = require('../../assets/back.png')
        const classes = makeStyles();
        return (
            <div>
                
                <header>
                    <div><button className='Header-Btn' onClick={this.back}><img alt='none' src={back}></img></button></div>
                    <div className='header-title'><div className='circle-container'><h1>User Information</h1></div></div>
                    <div className='header-right'></div>
                </header>
                <div className='info-container'>
                    <div className='adminUserInfo'>
                        <div>
                            <div>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Appointment: 10/12
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        Alex Standfield
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                        801-368-0547
                                        </Typography>
                                        <br/>
                                        <Typography variant="body2" component="p">
                                        Mazda | Mazda 3 lx | Black | 2016 
                                        <br/>
                                        Y2K 345 | 30,000
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions> */}
                                </Card>
                            </div>


                            <div>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Share
                                        </Button>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
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
