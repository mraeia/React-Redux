import React, { Component } from 'react';
import {addToList} from './actions';
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
        if (this.state.name !== '' && this.state.age !== ''){
            this.props.addToList({name: this.state.name, age:this.state.age})
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ten wide column">
                <label>
                    Name:
                <div className="ui input">
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                </label>
                <label>
                    Age:
                <div className="ui input">
                    <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
                </div>
                </label>
                <input className="ui button" type="submit" value="Submit" />
            </form>
        );
    }

}

export default connect(null,{addToList})(Form);
