import React, { Component } from 'react';
import './App.css';
import addToList from './actions';
import { connect } from 'react-redux';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '' ,age: ''};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleAgeChange(event) {
        this.setState({ age: event.target.value });
    }

    handleSubmit(event) {
        this.props.addToList({name: this.state.name, age:this.state.age})
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <label>
                    Age:
                <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default connect(null,{addToList})(Form);
