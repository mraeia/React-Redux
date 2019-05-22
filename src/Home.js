import React, { Component } from 'react';
import ShowElement from './ShowElement';
import Form from './Form';
import { connect } from 'react-redux';
import { elementClick } from './actions';

class Home extends Component{
    render(){
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { list : state.list,
              selectedElement: state.selectedElement};
  };
  
export default connect(mapStateToProps, {elementClick})(Home);