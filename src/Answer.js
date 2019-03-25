import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import { questions } from "./data/questions.js";
import { answers } from "./data/answers.js";
import "./Questions.css";
import solutionRight from './images/solution_right.png';
import solutionWrong from './images/solution_wrong.png';
 
class Answer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: questions,
      dataAnswers: answers,
    }
  }

  render() {
    return (
      <div className="containerQuestion">
        {this.state.data.questions.map((q, i) =>
          {
            return <div className="bodyQuestions">
          <div className="titleQuestion">{q.questionId} | Question</div>
          <div className="question">{q.question}</div>
            {
              q.choices.map((c, index) => 
                {
                  return <div className="containerChoices">
                            <button className="choice" >{c}</button>
                            {
                              c == this.state.dataAnswers.answers[i].answer
                              ?
                                <img className="rightLogo" src={ solutionRight } />
                              : null
                            }
                            {
                              (this.props.arrayAns[i] == index) && c != this.state.dataAnswers.answers[i].answer
                              ?
                                <img className="rightLogo" src={ solutionWrong } />
                              : null
                            }
                        </div>
                }
              )
            }
        </div>
          } 
        )}
      </div>
    );
  }
}
 
export default Answer;