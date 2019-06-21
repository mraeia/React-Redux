import React, { Component } from 'react'

class StepsWrapper extends Component{

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default StepsWrapper