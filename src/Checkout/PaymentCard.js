import React, { Component } from 'react'

class PaymentCard extends Component{

    getForm = () => {
        if (this.props.status === 'IN_PROGRESS'){
            return (
            <div key="paymentForm" className="checkoutForm fade-in">
                IN_PROGESS
                <div>
                    <button onClick={this.props.submitForm}>Continue</button>
                </div>
            </div>
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
                Step 2
                {form}
            </div>
        )
    }
}

export default PaymentCard