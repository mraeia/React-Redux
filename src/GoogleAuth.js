import React, { Component } from 'react';

class GoogleAuth extends Component {

    constructor(props){
        super(props);
        this.state= {isSignedIn: null};
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
                this.setState({isSignedIn : this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })  
    }

    onAuthChange(){
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    signIn(){
        this.auth.signIn();
    }

    signOut(){
        this.auth.signOut();
    }

    render(){
        if (this.state.isSignedIn){
            return <button className="ui primary button" onClick={this.signOut}>Sign out</button>
        } else {
            return <button className="ui primary button" onClick={this.signIn}>Sign in</button>
        }

    }
}

export default GoogleAuth;