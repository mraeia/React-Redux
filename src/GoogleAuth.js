import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAuthChange } from './actions'

class GoogleAuth extends Component {

    constructor(props){
        super(props);
        this.onAuthChange = this.onAuthChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '522123076229-o7iq4i1ui048pjvuedamsl58qpdlf3kv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })  
    }

    onAuthChange(){
        if (this.auth.isSignedIn.get()){
            this.props.onAuthChange(
                {isSignedIn: true,
                userID: this.auth.currentUser.get().getId(),
                userGivenName: this.auth.currentUser.get().getBasicProfile().getGivenName()}
            )
        } else {
            this.props.onAuthChange(
                {isSignedIn: false,
                userID: null,
                userGivenName: null}
            )
        }
    }

    signIn(){
        this.auth.signIn();
    }

    signOut(){
        this.auth.signOut();
    }

    render(){
        if (this.props.signInState === null){
            return null;
        } else if (this.props.signInState.isSignedIn){
            return <button className="ui primary button" onClick={this.signOut}>
                        <i className="google icon"></i> 
                        Sign out
                    </button>
        } else {
            return <button className="ui primary button" onClick={this.signIn}>
                        <i className="google icon"></i>
                        Sign in
                    </button>
        }
    }
}

const mapStateToProps = state => {
    return { signInState : state.signInState };
}

export default connect(mapStateToProps, {onAuthChange})(GoogleAuth);