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

import Calendar from "react-material-ui-calendar";

export default class Calendar extends Component {
    constructor(){
        setSelectedDate: null
    }

     handleDateChange = date => {
        setSelectedDate(date)
    }

    createAppt = () => {
        const appointment = this.state.setSelectedDate
        axios.post('/api/appointment', appointment)
        .then(response => {

        })

    }
    render() {
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
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
