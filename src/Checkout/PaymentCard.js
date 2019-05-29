import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class PaymentCard extends Component{

    getForm = () => {
        if (this.props.status === 'IN_PROGRESS'){
            return (
                <div key="paymentCard">
                    IN_PROGESS
                    <div>
                        <button onClick={this.props.submitPayment}>Continue</button>
                    </div>
                </div>
            )
        }
        else if (this.props.status === 'COMPLETED'|| this.props.status === 'NOT_COMPLETED'){
            return (
                <button onClick={() => this.props.edit('paymentCard')}>Edit</button>
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
                <h2>Step 2</h2>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionLeave={true}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppearTimeout={500}>
                    {form}
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default PaymentCard