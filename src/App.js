import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { elementClick } from './actions';
import { BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import { Contact } from './Contact';
import GoogleAuth from './GoogleAuth';

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
      case "contact":
        e = document.getElementById('contact')
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
      <BrowserRouter>
        <div className="ui secondary menu">
          <Link id="home" className="item" to="/" onClick={() => this.setState({active : "home"})}>
            Home
          </Link>
          <Link id="contact" className="item" to="/contact" onClick={() => this.setState({active : "contact"})}>
            Contact
          </Link>
          <div className="right menu">
            <div className="item">
              <GoogleAuth />
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidUpdate(){
    this.setActive();
  }
  componentDidMount(){
    var e = null;
    switch(window.location.pathname){
      case "/":
        e = document.getElementById('home')
        break
      case "/contact":
        e = document.getElementById('contact')
        break
      default:
        break
    }
    if (e){
      e.classList.add('active')
    }
  }
}

const mapStateToProps = state => {
  return { list : state.list,
            selectedElement: state.selectedElement};
};

export default connect(mapStateToProps, {elementClick})(App);
