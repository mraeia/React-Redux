import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class ShippingAddressForm extends Component{

    renderInput = ({input,label,type,meta: { touched, error, warning }}) => {
        return(
            <div className="field">
                <label>{label}</label>
                <input {...input} type={type} placeholder={label}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
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
                    <Field name="firstName" component={this.renderInput} label="Enter First Name" validate={[ required]} type="text"/>
                    <Field name="lastName" component={this.renderInput} label="Enter Last Name" validate={[ required]} type="text"/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

const required = value => value ? undefined : 'Required'

export default reduxForm({
    form:  'shippingAddressForm'
})(ShippingAddressForm)