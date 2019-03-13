import React, {Component} from 'react';
import { connect } from 'react-redux';


class ShowElement extends Component{
    render(){
        var label = 'SELECT';
        if (this.props.selectedElement){
            label = this.props.selectedElement.name
        }
        return(
            <div>
                {label}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {selectedElement: state.selectedElement};
  };

export default connect(mapStateToProps)(ShowElement);