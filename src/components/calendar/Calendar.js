import 'date-fns'
import axios from 'axios'
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

export default class Calendar extends Component {
    constructor(){
        selectedDate: null
    }

     handleDateChange = date => {
        this.setState({
          selectedDate: date
        })
    }

    createAppt = () => {
        const appointment = this.state.selectedDate
        appointmentUpdate
        // axios.post('/api/appointment', appointment)
        // .then(response => {

        // })
    }

    getTodaysAppointmentCount = async () => {
      const appts = await axios.get('/api/appointment/today')
      return appts.data.length
    }

    disableDates(date){
      //disable weekends
      if(date.getDay() === 0 || date.getDay() === 6) return true
      //today's date
      let today = new Date()
      //disable past days
      if(date < today) return true
      //disable 'full' days
      if(this.getTodaysAppointmentCount === 40) return true
    }

    render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              shouldDisableDate={disableDates}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <button onClick={this.createAppt}>Next</button>
      </div>
    )
  }
}
