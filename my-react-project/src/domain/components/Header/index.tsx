import React, { useState } from "react";
import "./style.css";
import { IoIosInformationCircle as InfoIcon } from "react-icons/io";
import { BsPersonArmsUp as PersonIcon } from "react-icons/bs";
import { BsSuitcase2Fill as BriefCaseIcon } from "react-icons/bs";
import { FaPowerOff as PowerIcon } from "react-icons/fa";
import { TbPhotoSensor2 as SensorIcon } from "react-icons/tb";
import { FaVolumeUp as ColorIcon } from "react-icons/fa";

function Header() {
  const [feature, setFeature] = useState<string>(
    "Through years of experimentation, PRAYR is proud to introduce the first smart sensor designed specifically to measure each Rakaa & Sajdah. This sensor measures the user's proximity during their prayer and automatically calculates each input as a Rakaa or Sajdah while taking into account several variables including possible accidental input from the users or their surrounding environments."
  );
  const [activeLink, setActiveLink] = useState<number>(4);
  const handleChangeFeature = (id: number): void => {
    setActiveLink(id);
    if (id === 1) {
      setFeature(
        "PRAYR was designed with simplicity in mind. With 2 multi use buttons and a screen, PRAYR offers the user a lot of benefit with little input. PRAYR is also a very supportive device for people with certain visual or hearing impairments and for children who recently started praying as it helps them focus on their Salat."
      );
    } else if (id === 2) {
      setFeature(
        "PRAYR is designed to be taken anywhere, anytime! It's small and portable design makes it easy to carry around and use on the go."
      );
    } else if (id === 3) {
      setFeature(
        "PRAYR enters into sleep mode after 10 minutes of inactivity to preserve battery consumption, but when resuming your prayer the device continues counting right from where it stopped."
      );
    } else if (id === 4) {
      setFeature(
        "Through years of experimentation, PRAYR is proud to introduce the first smart sensor designed specifically to measure each Rakaa & Sajdah. This sensor measures the user's proximity during their prayer and automatically calculates each input as a Rakaa or Sajdah while taking into account several variables including possible accidental input from the users or their surrounding environments."
      );
    } else if (id === 5) {
      setFeature(
        "In addition to the device's display, PRAYR's optional sound notification system allows users to keep track of their prayer by sound only. With one beep per the number of Rakaas, the user can easily know which part of the Salat they are performing."
      );
    }
  };

  return (
    <div className="header">
      <div className="wrapper-box"></div>
      <div className="header-section1">
        <p>smart Rakaa & Sajdah Prayer Counter</p>
        <h1>Pray With a Clear Mind</h1>
        <div className="header-section1_links">
          <p>Features</p>
          <p>HOW IT WORKS?</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="header-section2">
        <img src="./assets/images/demo.svg" alt="demo_img" />
        <div className="header-section2-icon_box">
          <InfoIcon className="header-section2-icon header-section2_infoIcon1" />
          <div className="header-section2-hover_info display-none">
            <div className="header-section2-hover_info-header">
              <SensorIcon />
              <p>SENSOR</p>
            </div>
            <p>
              PRAYR's smart sensor accurately tracks each Rak'ah and Sajdah by
              detecting the user's movements, intelligently filtering out
              accidental inputs to ensure precise prayer counts.
            </p>
          </div>
        </div>
        <div className="header-section2-icon_box">
          <InfoIcon className="header-section2-icon header-section2_infoIcon2" />
        </div>
        <div className="header-section2-icon_box">
          <InfoIcon className="header-section2-icon header-section2_infoIcon3" />
        </div>
      </div>
      <div className="header-section3">
        <h3>FEATURES</h3>
        <p>{feature}</p>
        <div className="header-section3_links">
          <div
            className={`header-section3_link ${
              activeLink === 1 ? "color-white" : "color-grey"
            }`}
            onClick={() => {
              handleChangeFeature(1);
            }}
          >
            <PersonIcon className="header-section3_link-icon" />
            <p className="header-section3-link_text">Easy To use</p>
          </div>
          <div
            className={`header-section3_link ${
              activeLink === 2 ? "color-white" : "color-grey"
            }`}
            onClick={() => {
              handleChangeFeature(2);
            }}
          >
            <BriefCaseIcon className="header-section3_link-icon" />
            <p className="header-section3-link_text">portable design</p>
          </div>
          <div
            className={`header-section3_link ${
              activeLink === 3 ? "color-white" : "color-grey"
            }`}
            onClick={() => {
              handleChangeFeature(3);
            }}
          >
            <PowerIcon className="header-section3_link-icon" />
            <p className="header-section3-link_text">long lasting</p>
          </div>
          <div
            className={`header-section3_link ${
              activeLink === 4 ? "color-white" : "color-grey"
            }`}
            onClick={() => {
              handleChangeFeature(4);
            }}
          >
            <SensorIcon className="header-section3_link-icon" />
            <p className="header-section3-link_text">custom smart sensor</p>
          </div>
          <div
            className={`header-section3_link ${
              activeLink === 5 ? "color-white" : "color-grey"
            }`}
            onClick={() => {
              handleChangeFeature(5);
            }}
          >
            <ColorIcon className="header-section3_link-icon" />
            <p className="header-section3-link_text">sound notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
