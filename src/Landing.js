import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import Question from "./Question";
import Answer from "./Answer";
 
class Main extends Component {
  render() {
    return (
      <div>
        <h1>TEST</h1>
        <ul className="header">
          <li><NavLink to="/Question">Question</NavLink></li>
          <li><NavLink to="/Answer">Answer</NavLink></li>
        </ul>
      </div>
    );
  }
}
 
export default Main;