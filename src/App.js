import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './Form'

class App extends Component {

  render() {
    return (
      <div>
        <Form />
       {this.props.list.map((element,counter) =>{
         return (
           <div key={counter}>
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
  return { list : state.list };
};

export default connect(mapStateToProps)(App);
