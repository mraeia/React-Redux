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
                <button key="paymentCardEdit" onClick={() => this.props.edit('paymentCard')}>Edit</button>
            )
        }
        else {
            return null;
        }
    }

    render(){
        var form = this.getForm();
        return(
            <div className="checkout-steps">
                <h2>Step 2 - Payment Card</h2>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionLeave={false}
                    transitionEnterTimeout={500}
                    transitionAppearTimeout={500}>
                    {form}
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default PaymentCard