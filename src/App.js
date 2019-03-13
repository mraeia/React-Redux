import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './Form'
import {elementClick} from './actions';
import ShowElement from './ShowElement'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log("hello!");
    e.preventDefault();
  }

  render() {
    return (
      <div className="App container">
        <div >
          <Form />
          <ShowElement />
          <div>
            {this.props.list.map((element,counter) =>{
            return (
              <div className="Element" key={counter} onClick={() => this.props.elementClick(element)}>
                {element.name},{element.age}
              </div>
            );
          } 
          )}
          </div>
        </div>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }

  componentDidMount(){
    
  }
}

const mapStateToProps = state => {
  return { list : state.list,
            selectedElement: state.selectedElement};
};

export default connect(mapStateToProps, {elementClick})(App);
