import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component{
    renderInput = ({input,label, meta}) => {
        return(
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
                <div>{this.renderError(meta)}</div>
            </div>
            );
    }

    renderError({error,touched}){
        if (touched && error){
            return error
        }
    }

    onSubmit(formValues){
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
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
    form:  'streamCreate',
    validate: validateForm
})(StreamCreate)