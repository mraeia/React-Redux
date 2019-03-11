import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './Form'
import {elementClick} from './actions';

class App extends Component {

  render() {
    return (
      <div>
        <Form />
       {this.props.list.map((element,counter) =>{
         return (
           <div key={counter} onClick={() => this.props.elementClick(element)}>
             {element.name},{element.age}
           </div>
         );
       } 
       )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { list : state.list,
            selectedElement: state.selectedElement};
};

export default connect(mapStateToProps, {elementClick})(App);
