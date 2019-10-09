import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCar } from '../../redux/reducer'

class CarInformation extends Component {
    constructor() {
        super()
        this.state = {
            make: '',
            model: '',
            trim: '',
            year: '',
            color: '',
            licensePlate: '',
            mileage: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        let userID = this.props.user.id

        const body = {
            make: this.state.make,
            model: this.state.model,
            trim: this.state.trim,
            year: this.state.year,
            color: this.state.color,
            licensePlate: this.state.licensePlate,
            mileage: this.state.mileage

        }
        axios.post(`/api/car/${userID}`, body)
            .then(response => {
                this.props.updateCar(response.data)
                this.props.history.push('/calendar')
            })
            .catch(error => {
                console.log(error)
            })
        //push to store
    }

    render() {
        return (
            <div>
                <header>
                    <button>Back</button>
                    <h1>Car Info</h1>
                    
                </header>
                <div className="carForm-container">
                    <form>
                        <input type='text' placeholder='Make' onChange={this.handleChange} name='make' />
                        <input type='text' placeholder='Model' onChange={this.handleChange} name='model' />
                        <input type='text' placeholder='Trim' onChange={this.handleChange} name='trim' />
                        <input type='text' placeholder='Year' onChange={this.handleChange} name='year' />
                        <input type='text' placeholder='Color' onChange={this.handleChange} name='color' />
                        <input type='text' placeholder='License' onChange={this.handleChange} name='licensePlate' />
                        <input type='text' placeholder='Mileage' onChange={this.handleChange} name='mileage' />

                        <button onClick={this.submit}>Next</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {updateCar})(CarInformation)