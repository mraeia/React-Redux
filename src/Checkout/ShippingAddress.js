import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import ShippingAddressForm from './ShippingAddressForm'

class ShippingAddress extends Component{

    getBody = () => {
        if (this.props.status === 'IN_PROGRESS'){
            return (
                <div key="shippingAddress">
                    <ShippingAddressForm/>
                    <div>
                        <button onClick={this.props.submitShipping}>Continue</button>
                    </div>
                </div>
            )
        }
        else if (this.props.status === 'COMPLETED' || this.props.status === 'NOT_COMPLETED'){
            return (
                <button key="shippingAddressEdit" onClick={() => this.props.edit('shippingAddress')}>Edit</button>
            )
        }
        else {
            return null;
        }
    }

    render(){
        var form = this.getBody();
        return(
            <div className="checkout-steps">
                <h2>Step 1 - Shipping Address</h2>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionLeave={false}
                    transitionEnterTimeout={500}
                    transitionAppearTimeout={500}>
                    {form}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default ShippingAddress