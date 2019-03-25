import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import styled from 'styled-components'
import { questions } from "./data/questions.js";
import { answers } from "./data/answers.js";
import solutionRight from './images/solution_right.png';
import solutionWrong from './images/solution_wrong.png';

const ContainerQuestion = styled.div`
      background-color: rgba(238, 238, 238, 1);
      padding: 100px 0;
      `;

const BodyQuestions = styled.div`
        background-color: white;
        border: 1px solid black;
        width: 75%;
        margin: 0 auto;
      `;

const TitleQuestion = styled.div`
      padding: 30px 0 10px 10px;
      font-size: 25px;
    `;

const QuestionStyle = styled.div`
      padding-left: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid black;
    `;
const ContainerChoices = styled.div `
      border-bottom: 1px solid black;
      padding: 10px 0 20px 0;
    `;

const Choice = styled.button`
      border-style: none !important;
      border-width: 0 !important;
      background-color: white !important;
      font-size: 15px;
    `;
    
const ButtonQuestion = styled.button `
      background-color: rgba(0, 181, 204, 1); /* Green */
      border: none;
      color: white;
      padding: 15px 50px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 25px;
    `;
    
const ContainerQuestionButton = styled.div `
      text-align: center;
      padding: 30px 0;
    `;
    
const RightLogo = styled.img `
      float: right;
      width: 30px;
      padding-right: 20px;
    `;
    
const Centered = styled.div `
      position: fixed;
      top: 50%;
      left: 50%;
      /* bring your own prefixes */
      transform: translate(-50%, -50%);
      background-color: rgba(65, 131, 215, 1);
      width: 25%;
    `;
    
const TitleScore = styled.div `
      color: white;
      padding: 10px 0 20px 20px;
    }`;
    
const ShowScore = styled.div `
      color: white;
      padding: 0;
      text-align: center;
      font-size: 30px;
    `;

const ContainerSolution = styled.div`
    text-align: center;
`;

const SolutionButton = styled.button`
margin: 20px;
background: orange;
padding: 10px 30px;
font-size: 15px;
border-radius: 20px;
`;
 
class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: questions,
      dataAnswers: answers,
      indexCurrentQuestions: 0,
      currentChoice: "",
      status: "",
      statusButton: false,
      statusPopup: false,
      score: 0,
      arrayAns: [],
    }
  }

  renderButton() {
      if (this.state.statusButton && this.state.indexCurrentQuestions != this.state.data.questions.length -1 ) {
       return <ButtonQuestion onClick={() => {
                if (this.state.indexCurrentQuestions < this.state.data.questions.length -1 ) {
                  this.setState({indexCurrentQuestions: this.state.indexCurrentQuestions + 1, statusButton: !this.state.statusButton, status: "", currentChoice: ""})
                }
              }}>Next
      </ButtonQuestion>
      } else if(this.state.indexCurrentQuestions == this.state.data.questions.length -1 && this.state.statusButton)
      {
        return <ButtonQuestion onClick={() => {
          this.setState({statusPopup: !this.state.statusPopup})
        }}>Finish
        </ButtonQuestion>
      }
      else {
        return <ButtonQuestion onClick={() => {
          if (this.state.indexCurrentQuestions < this.state.data.questions.length && this.state.currentChoice != "") {
            if(this.state.currentChoice == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer) {
              this.setState({status: "correct", statusButton: !this.state.statusButton, score: this.state.score + 1})
            }
            else {
              this.setState({status: "incorrect", statusButton: !this.state.statusButton})
            }
          }
        }}>Submit
        </ButtonQuestion>
      }
  }

  render() {
    console.log(this.state.arrayAns)
    return (
      <ContainerQuestion>
        <BodyQuestions>
          <TitleQuestion>{this.state.indexCurrentQuestions+1} | Question</TitleQuestion>
          <QuestionStyle>{this.state.data.questions[this.state.indexCurrentQuestions].question}</QuestionStyle>
          <ContainerChoices>
            <Choice onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[0]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(0)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(0)
                }
              }}>A. {this.state.data.questions[this.state.indexCurrentQuestions].choices[0]}
            </Choice>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[0] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[0] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <RightLogo src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[0] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <RightLogo src={ solutionWrong } />
                :
                null
            }
          </ContainerChoices>
          <ContainerChoices>
            <Choice onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[1]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(1)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(1)
                }              }}>B. {this.state.data.questions[this.state.indexCurrentQuestions].choices[1]}
            </Choice>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[1] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[1] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <RightLogo src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[1] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <RightLogo src={ solutionWrong } />
                :
                null
            }
          </ContainerChoices>
          <ContainerChoices>
            <Choice onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[2]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(2)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(2)
                }              }}>C. {this.state.data.questions[this.state.indexCurrentQuestions].choices[2]}
            </Choice>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[2] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[2] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <RightLogo src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[2] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <RightLogo src={ solutionWrong } />
                :
                null
            }
          </ContainerChoices>
          <ContainerChoices>
            <Choice onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[3]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(3)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(3)
                }              }}>D. {this.state.data.questions[this.state.indexCurrentQuestions].choices[3]}
            </Choice>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[3] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[3] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <RightLogo src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[3] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <RightLogo src={ solutionWrong } />
                :
                null
            }
          </ContainerChoices>
        </BodyQuestions>
        <ContainerQuestionButton>
          {this.renderButton()}
        </ContainerQuestionButton>
        {
          this.state.statusPopup
          ?
          <Centered>
            <TitleScore>Your score</TitleScore>
            <ShowScore>{this.state.score} / 5</ShowScore>
            <ContainerSolution>
              <SolutionButton><NavLink to="/Answer" onClick={() => {this.props.getArrayAns(this.state.arrayAns)}}><div>See Solution</div></NavLink></SolutionButton>
            </ContainerSolution>
          </Centered>
          :
          null
        }
      </ContainerQuestion>
    );
  }
}
 
export default Question;