import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Question from "./Question";
import Answer from "./Answer";
import Landing from "./Landing";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
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