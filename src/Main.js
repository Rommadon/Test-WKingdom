import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import "./Main.css"
import Question from "./Question";
import Answer from "./Answer";
import Landing from "./Landing";
import navbarLogo from './images/navbar_logo.png';
 
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrayAns: [],
    }
  }

  getArrayAns = (arrayAns) => {
    this.setState({arrayAns: arrayAns})
  }

  render() {
    return (
      <HashRouter>
        <ul className="navbar">
          <li className="Logo"><img src={ navbarLogo } /></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={() => <Landing />}/>
          <Route path="/Question" component={() => <Question getArrayAns={this.getArrayAns}/>}/>
          <Route path="/Answer" component={() => <Answer arrayAns={this.state.arrayAns}/>}/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;