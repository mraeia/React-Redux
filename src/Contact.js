import React, { Component } from 'react';
import ShippingAddress from './Checkout/ShippingAddress'
import PaymentCard from './Checkout/PaymentCard'
import Confirmation from './Checkout/Confirmation'

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            shippingAddress: "IN_PROGRESS",
            paymentCard: "NOT_STARTED",
            Confirmation: "NOT_STARTED"
        }
    }

    submitShipping = () => {
        this.setState({
            shippingAddress: "COMPLETED",
            paymentCard: "IN_PROGRESS"
        })
    }

    submitPayment = () => {
        this.setState({
            paymentCard: "COMPLETED",
            Confirmation: "IN_PROGRESS"
        })
    }

    render(){
        return (
            <div>
                <ShippingAddress status={this.state.shippingAddress} submitShipping={this.submitShipping}/>
                <PaymentCard status={this.state.paymentCard} submitPayment={this.submitPayment}/>
                <Confirmation status={this.state.Confirmation}/>
            </div>
        );
    }

    componentDidMount(){

    }
}

export default Contact;