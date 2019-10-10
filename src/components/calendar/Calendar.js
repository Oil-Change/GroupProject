import 'date-fns'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateAppointment } from '../../redux/reducer'
import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'

class Calendar extends Component {
    constructor(){
      super()

      this.state = {
        selectedDate: null
      }
    }

    // componentDidMount(){
    //   this.openDatePicker()
    // }

    // openDatePicker(){
    //   this.refs.dp.openDialog()
    // }

    handleDateChange = date => {
      this.setState({
        selectedDate: date
      })
    }

    createAppt = () => {
      console.log(this.state.selectedDate)
      this.props.updateAppointment(this.state.selectedDate)

      console.log(this.props.user)
      console.log(this.props.car)
      console.log(this.props)
      this.props.history.push('/payment')
    }

    getAppointmentCount = (date) => {
      console.log('before: getTodayAPpt')
      console.log('date', date.getMonth(), date.getFullYear())
      axios.get('/api/appointment/date', {month: date.getMonth()+1, year: date.getFullYear()}).then((res) => {
        console.log('here: getTodayAppt')
        console.log(res.data)
        return res.data
      })
    }

    disableDates(date){
      //disable weekends
      if(date.getDay() === 0 || date.getDay() === 6) return true
      //today's date
      let today = new Date()
      //disable past days
      if(date < today) return true
      //disable 'full' days
      // if(this.getTodaysAppointmentCount() >= 40) return true
      //otherwise do not diable this day
      return false
    }

    back = (e) => {
      e.preventDefault()
      this.props.history.push('/car')
    }

  render() {
    const back = require('../../assets/back.png')

    console.log(this.props)
    return (
      <div>
        <header>
          <div><button className='Header-Btn' onClick={this.back}><img alt='none' src={back}></img></button></div>
          <div className='header-title'><div className='circle-container'><h1>Calendar</h1></div></div>
          <div className='header-right'></div>
        </header>
        <div className="cal-form-container">
          <div className="cal-container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              shouldDisableDate={this.disableDates}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
       
        <button className="next-btn" onClick={this.createAppt}>Next</button>
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {updateAppointment})(Calendar)