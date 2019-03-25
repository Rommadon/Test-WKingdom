import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "./Landing.css"
import landingLogo from './images/landing_logo.png';
 
class Main extends Component {
  render() {
    return (
      <div className="Landing">
        <div>
          <img className="landingLogo" src={ landingLogo } />
        </div>
        <div className="container-textLanding">
          <div className="textLanding">เรียนภาษาอังกฤษออนไลน์กับเจ้าของภาษาเพียง 800 บาท/เดือน</div>
          <div className="textLanding">หลักสูตรของเราออกแบบเพื่อเป้าหมายของคุณ</div>
          <div className="textLanding">พัฒนาตัวเองเพื่อเพิ่มโอกาสทางอาชีพ และนำกลับไปใช้ในชีวิตจริง</div>
        </div>
        <div>
          <div className="textLanding">พร้อมแล้วหรือยัง ?</div>
          <div className="textLanding">วัดระดับภาษากัน</div>
        </div>
        <div className="container-start-button">
          <button className="buttonStart"><NavLink to="/Question">Start</NavLink></button>
        </div>
        <div className="container-textLanding">
          <div className="textLanding">สมัครวันนี้ทดลองเรียนฟรี 7 วัน หากไม่ต้องการวัดระดับ</div>
          <div className="textLandingHighlight">เริ่มเรียนระดับ Beginner</div>
        </div>
      </div>
    );
  }
}
 
export default Main;