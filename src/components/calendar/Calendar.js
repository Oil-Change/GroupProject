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

     handleDateChange = date => {
        this.setState({
          selectedDate: date
        })
    }

    createAppt = () => {
        this.props.appointmentUpdate(this.state.selectedDate)
        // axios.post('/api/appointment', appointment)
        // .then(response => {

        // })
    }

    getTodaysAppointmentCount = () => {
      console.log('before: getTodayAPpt')
      axios.get('/api/appointment/today').then((res) => {
        console.log('here: getTodayAPpt')
        return res.data.length
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
      if(this.getTodaysAppointmentCount() >= 40) return true
      //otherwise do not diable this day
      return false
    }

  render() {
    return (
      <div>
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
        <button onClick={this.createAppt}>Next</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {updateAppointment})(Calendar)