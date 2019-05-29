import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { elementClick } from './actions';
import { BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import GoogleAuth from './GoogleAuth';
import StreamCreate from './StreamCreate';
import Checkout from './Checkout';
//import Fetch from './Fetch';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      active : null
    }
  }

  setActive(){
    var menuItems = document.getElementsByClassName("item");
    for (var i=0; i < menuItems.length;i++){
      menuItems[i].classList.remove("active");
    }
    var e = null;
    switch(this.state.active){
      case "home":
        e = document.getElementById('home')
        break
      case "checkout":
        e = document.getElementById('checkout')
        break
      case "create-stream":
        e = document.getElementById('create-stream')
        break
      default:
        break
    }
    if (e){
      e.classList.add('active')
    }
  }

  render() {
    return (
      <BrowserRouter >
        <div className="ui container">
          <div className="ui secondary menu">
            <Link id="home" className="item" to="/" onClick={() => this.setState({active : "home"})}>
              Home
            </Link>
            <Link id="checkout" className="item" to="/checkout" onClick={() => this.setState({active : "checkout"})}>
              Checkout
            </Link>
            <Link id="create-stream" className="item" to="/streams/new" onClick={() => this.setState({active : "create-stream"})}>
              Create Stream
            </Link>
            {/* <Link id="fetch" className="item" to="/fetch" onClick={() => this.setState({active : "fetch"})}>
              Fetch
            </Link> */}
            <div className="right menu">
              <div className="item">
                <GoogleAuth />
              </div>
            </div>
          </div>
          <h4 id="header">
              Welcome {this.props.signInState ? this.props.signInState.userGivenName : null}!
          </h4>
          <div className="body">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/checkout" exact component={Checkout} />
              <Route path="/streams/new" exact component={StreamCreate} />
              {/* <Route path="/fetch" exact component={Fetch} /> */}
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  componentDidUpdate(){
    this.setActive();
  }
  componentDidMount(){
    switch(window.location.pathname){
      case "/":
        this.setState({active : "home"})
        break
      case "/checkout":
        this.setState({active : "checkout"})
        break
      case "/streams/new":
        this.setState({active : "create-stream"})
        break
      default:
        break
    }
  }
}

const mapStateToProps = state => {
  return {  list : state.list,
            selectedElement: state.selectedElement,
            signInState: state.signInState
          };
};

export default connect(mapStateToProps, {elementClick})(App);
