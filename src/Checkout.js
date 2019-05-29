import React, { Component } from 'react';
import ShippingAddress from './Checkout/ShippingAddress'
import PaymentCard from './Checkout/PaymentCard'
import Confirmation from './Checkout/Confirmation'
import {Statuses} from './Checkout/Constants'

class Checkout extends Component {

    constructor(props){
        super(props);
        this.state = {
            shippingAddress: Statuses.IN_PROGRESS,
            paymentCard: Statuses.NOT_STARTED,
            Confirmation: Statuses.NOT_STARTED
        }
    }

    submitShipping = () => {
        this.setState({
            shippingAddress: Statuses.COMPLETED,
            paymentCard: Statuses.IN_PROGRESS
        })
    }

    submitPayment = () => {
        this.setState({
            paymentCard: Statuses.COMPLETED,
            Confirmation: Statuses.IN_PROGRESS
        })
    }

    edit = (editStep) => {
        let currentStep = null;
        const entries = Object.entries(this.state);
        for(const [step, status] of entries){
            if (status === Statuses.IN_PROGRESS){
                currentStep = step
            }
        }
        this.setState({
            [editStep]: Statuses.IN_PROGRESS,
            [currentStep]: Statuses.NOT_COMPLETED
        })
    }

    render(){
        return (
            <div>
                <ShippingAddress status={this.state.shippingAddress} submitShipping={this.submitShipping} editShipping={this.edit}/>
                <PaymentCard status={this.state.paymentCard} submitPayment={this.submitPayment} edit={this.edit}/>
                <Confirmation status={this.state.Confirmation}/>
            </div>
        );
    }

    componentDidMount(){

    }
}

export default Checkout;