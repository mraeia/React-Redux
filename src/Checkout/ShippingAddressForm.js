import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class ShippingAddressForm extends Component{

    renderInput = ({input,label}) => {
        return(
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
            </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues)
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <div className="two fields">
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

const validateForm = (formValues) => {
    const errors = {};

    if (!formValues.title){
        errors.title = 'You must enter a title';
    }

    if (!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form:  'shippingAddressForm',
    validate: validateForm
})(ShippingAddressForm)