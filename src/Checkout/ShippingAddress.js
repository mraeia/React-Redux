import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class ShippingAddress extends Component{

    getForm = () => {
        if (this.props.status === 'IN_PROGRESS'){
            return (
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div key="shippingAddress" className="checkoutForm">
                    IN_PROGESS
                    <div>
                        <button onClick={this.props.submitShipping}>Continue</button>
                    </div>
                </div>
            </CSSTransitionGroup>
            )
        }
        else if (this.props.status === 'COMPLETED'){
            return (
                <button onClick={this.props.submitShipping}>Edit</button>
            )
        }
        else {
            return null;
        }
    }

    render(){
        var form = this.getForm();
        return(
            <div>
                Step 1
                {form}
            </div>
        );
    }
}

export default ShippingAddress