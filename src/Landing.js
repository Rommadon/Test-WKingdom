import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import ImgLandingLogo from './images/landing_background.png';
import styled from 'styled-components'
import landingLogo from './images/landing_logo.png';

const Landing = styled.div`
  background-image: url(${ImgLandingLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%; 
`;

const LandingLogo = styled.img`
  padding-top: 100px;
  display: block;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const TextLanding = styled.div`
  text-align: center;
`;

const TextLandingHighlight = styled.div `
  text-align: center;
  color: rgba(150, 40, 27, 1);
  text-decoration: underline;
`;

const ContainerTextLanding = styled.div`
  padding: 0;
`;

const ButtonStart = styled.button`
  background-color: rgba(150, 40, 27, 1);
  border: none;
  color: white !important;
  padding: 37px;
  text-align: center;
  text-decoration: none !important;
  display: inline-block;
  font-size: 22px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%;
`;

const ContainerStartButton = styled.div`
  padding: 30px;
  text-align: center;
`;

const StartQuestion = styled.div`
  color: white;
  text-decoration: none !important;
`;
 
class Main extends Component {
  render() {
    return (
      <Landing>
        <div>
          <LandingLogo src={ landingLogo } />
        </div>
        <div className="container-textLanding">
          <TextLanding>เรียนภาษาอังกฤษออนไลน์กับเจ้าของภาษาเพียง 800 บาท/เดือน</TextLanding>
          <TextLanding>หลักสูตรของเราออกแบบเพื่อเป้าหมายของคุณ</TextLanding>
          <TextLanding>พัฒนาตัวเองเพื่อเพิ่มโอกาสทางอาชีพ และนำกลับไปใช้ในชีวิตจริง</TextLanding>
        </div>
        <div>
          <TextLanding>พร้อมแล้วหรือยัง ?</TextLanding>
          <TextLanding>วัดระดับภาษากัน</TextLanding>
        </div>
        <ContainerStartButton>
          <ButtonStart><NavLink to="/Question"><StartQuestion>Start</StartQuestion></NavLink></ButtonStart>
        </ContainerStartButton>
        <ContainerTextLanding>
          <TextLanding>สมัครวันนี้ทดลองเรียนฟรี 7 วัน หากไม่ต้องการวัดระดับ</TextLanding>
          <TextLandingHighlight>เริ่มเรียนระดับ Beginner</TextLandingHighlight>
        </ContainerTextLanding>
      </Landing>
    );
  }
}
 
export default Main;