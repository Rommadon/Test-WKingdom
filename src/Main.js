import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components'
import Question from "./Question";
import Answer from "./Answer";
import Landing from "./Landing";
import navbarLogo from './images/navbar_logo.png';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    @import url('https://fonts.googleapis.com/css?family=Kanit');
    font-family: 'Kanit', sans-serif;
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }
`

const Navbar = styled.h1`
  list-style-type: none;
  margin: 0;
  padding: 7px;
  overflow: hidden;
  background-color: rgba(150, 40, 27, 1);
`;

const Logo = styled.section`
  float: left;
  display: block;
  text-align: center;
  padding: 5px;
  text-decoration: none;
`;

const Body = styled.div`
  height: 100%;
  background-color: rgba(238,238,238,1);
`;
 
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
        <GlobalStyle />
        <Navbar>
          <Logo className="Logo"><img src={ navbarLogo } /></Logo>
        </Navbar>
        <Body>
          <Route exact path="/" component={() => <Landing />}/>
          <Route path="/Question" component={() => <Question getArrayAns={this.getArrayAns}/>}/>
          <Route path="/Answer" component={() => <Answer arrayAns={this.state.arrayAns}/>}/>
        </Body>
      </HashRouter>
    );
  }
}
 
export default Main;