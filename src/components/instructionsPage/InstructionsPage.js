import React, { Component } from 'react'
import {connect} from 'react-redux'

class InstructionsPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="left-hdr"></div>
                    <div className='header-title'><div className='circle-container'><h1>Instructions</h1></div></div>
                    <div className='header-right'></div>
                </header>
                <div className="ins-form-container">
                    <div className="ins-container">

                <ol>
                    <li>Have your car available for pick up from 7-11am.</li>
                    <li>Either be home or have your keys hidden in a previously designated location with your driver.</li>
                    <li>Enjoy your day!</li>
                    <li>Your Car will be dropped off before 5pm that day.</li>
                    <li>The driver can drop the keys off directly to you or stash them in the same location they picked them up.(Discuss options with driver)</li>
                    
                </ol>
                
                <button className="ins-message"><ing></ing></button>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(InstructionsPage)
