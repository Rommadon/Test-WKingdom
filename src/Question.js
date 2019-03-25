import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import { questions } from "./data/questions.js";
import { answers } from "./data/answers.js";
import "./Questions.css";
import solutionRight from './images/solution_right.png';
import solutionWrong from './images/solution_wrong.png';
 
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
       return <button className="buttonQuestion" onClick={() => {
                if (this.state.indexCurrentQuestions < this.state.data.questions.length -1 ) {
                  this.setState({indexCurrentQuestions: this.state.indexCurrentQuestions + 1, statusButton: !this.state.statusButton, status: "", currentChoice: ""})
                }
              }}>Next
      </button>
      } else if(this.state.indexCurrentQuestions == this.state.data.questions.length -1 && this.state.statusButton)
      {
        return <button className="buttonQuestion" onClick={() => {
          this.setState({statusPopup: !this.state.statusPopup})
        }}>Finish
        </button>
      }
      else {
        return <button className="buttonQuestion" onClick={() => {
          if (this.state.indexCurrentQuestions < this.state.data.questions.length && this.state.currentChoice != "") {
            if(this.state.currentChoice == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer) {
              this.setState({status: "correct", statusButton: !this.state.statusButton, score: this.state.score + 1})
            }
            else {
              this.setState({status: "incorrect", statusButton: !this.state.statusButton})
            }
          }
        }}>Submit
        </button>
      }
  }

  render() {
    console.log(this.state.arrayAns)
    return (
      <div className="containerQuestion">
        <div className="bodyQuestions">
          <div className="titleQuestion">{this.state.indexCurrentQuestions+1} | Question</div>
          <div className="question">{this.state.data.questions[this.state.indexCurrentQuestions].question}</div>
          <div className="containerChoices">
            <button className="choice" onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[0]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(0)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(0)
                }
              }}>A. {this.state.data.questions[this.state.indexCurrentQuestions].choices[0]}
            </button>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[0] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[0] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <img className="rightLogo" src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[0] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <img className="rightLogo" src={ solutionWrong } />
                :
                null
            }
          </div>
          <div className="containerChoices">
            <button className="choice" onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[1]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(1)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(1)
                }              }}>B. {this.state.data.questions[this.state.indexCurrentQuestions].choices[1]}
            </button>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[1] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[1] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <img className="rightLogo" src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[1] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <img className="rightLogo" src={ solutionWrong } />
                :
                null
            }
          </div>
          <div className="containerChoices">
            <button className="choice" onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[2]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(2)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(2)
                }              }}>C. {this.state.data.questions[this.state.indexCurrentQuestions].choices[2]}
            </button>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[2] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[2] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <img className="rightLogo" src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[2] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <img className="rightLogo" src={ solutionWrong } />
                :
                null
            }
          </div>
          <div className="containerChoices">
            <button className="choice" onClick={() => {
                this.setState({currentChoice: this.state.data.questions[this.state.indexCurrentQuestions].choices[3]})
                if(this.state.arrayAns[this.state.indexCurrentQuestions] == null){
                  this.state.arrayAns.push(3)
                } else {
                  this.state.arrayAns.pop()
                  this.state.arrayAns.push(3)
                }              }}>D. {this.state.data.questions[this.state.indexCurrentQuestions].choices[3]}
            </button>
            {
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[3] == this.state.currentChoice && this.state.status == "correct") || 
                (this.state.data.questions[this.state.indexCurrentQuestions].choices[3] == this.state.dataAnswers.answers[this.state.indexCurrentQuestions].answer && this.state.status != "")
                ?
                <img className="rightLogo" src={ solutionRight } />
                :
                null
            }
            {
                this.state.data.questions[this.state.indexCurrentQuestions].choices[3] == this.state.currentChoice && this.state.status == "incorrect"
                ?
                <img className="rightLogo" src={ solutionWrong } />
                :
                null
            }
          </div>
        </div>
        <div className="containerQuestionButton">
          {this.renderButton()}
        </div>
        {
          this.state.statusPopup
          ?
          <div className="centered">
            <div className="title-score">Your score</div>
            <div className="show-score">{this.state.score} / 5</div>
            <div>
              <button><NavLink to="/Answer" onClick={() => {this.props.getArrayAns(this.state.arrayAns)}} >Solution</NavLink></button>
            </div>
          </div>
          :
          null
        }
      </div>
    );
  }
}
 
export default Question;