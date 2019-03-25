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
        margin-bottom: 50px;
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

const RightLogo = styled.img `
    float: right;
    width: 30px;
    padding-right: 20px;
  `;
 
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
      <ContainerQuestion>
        {this.state.data.questions.map((q, i) =>
          {
            return <BodyQuestions>
                    <TitleQuestion>{q.questionId} | Question</TitleQuestion>
                    <QuestionStyle>{q.question}</QuestionStyle>
            {
              q.choices.map((c, index) => 
                {
                  return <ContainerChoices>
                            <Choice>{c}</Choice>
                            {
                              c == this.state.dataAnswers.answers[i].answer
                              ?
                                <RightLogo src={ solutionRight } />
                              : null
                            }
                            {
                              (this.props.arrayAns[i] == index) && c != this.state.dataAnswers.answers[i].answer
                              ?
                                <RightLogo src={ solutionWrong } />
                              : null
                            }
                        </ContainerChoices>
                }
              )
            }
            </BodyQuestions>
          } 
        )}
      </ContainerQuestion>
    );
  }
}
 
export default Answer;