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
  render() {
    return (
      <HashRouter>
        <ul className="navbar">
          <li className="Logo"><img src={ navbarLogo } /></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Landing}/>
          <Route path="/Question" component={Question}/>
          <Route path="/Answer" component={Answer}/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;