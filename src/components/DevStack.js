import React from "react";
import styled, { keyframes } from "styled-components";

import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import vueIcon from "../assets/vue.png";
import reactIcon from "../assets/react.png";
import pythonIcon from "../assets/python.png";
import cIcon from "../assets/c++.png";
import vuetifyIcon from "../assets/vuetify.svg";
import bootstrapIcon from "../assets/bootstrap.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const SkillIcon = styled.img`
  height: 120px;
  object-fit: cover;

  & + & {
    margin-left: 10px;
    margin-bottom: 10px;
  }

  cursor: pointer;
`;

const DevStackBlock = styled.div`
  position: absolute;
  top: 50%;

  transform: translate(0, -50%);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const SkillIconBlock = styled.div`
  text-align: center;
`;

function DevStack() {
  const contentsArr = [
    { imgSrc: htmlIcon, tooltipText: "HTML" },
    { imgSrc: cssIcon, tooltipText: "CSS" },
    { imgSrc: jsIcon, tooltipText: "JavaScript" },
    { imgSrc: vueIcon, tooltipText: "Vue.js" },
    { imgSrc: vuetifyIcon, tooltipText: "Vuetify" },
    { imgSrc: reactIcon, tooltipText: "React" },
    { imgSrc: bootstrapIcon, tooltipText: "Bootstrap" },
    { imgSrc: pythonIcon, tooltipText: "Python" },
    { imgSrc: cIcon, tooltipText: "C++" },
  ];
  return (
    <Container>
      <DevStackBlock className="container">
        <div className="row">
          <div className="col-1"></div>

          <SkillIconBlock className="col-10">
            {contentsArr.map((el, idx) => {
              return (
                <OverlayTrigger
                  placement={"right"}
                  overlay={
                    <Tooltip id={"tooltip-right"}>{el.tooltipText}</Tooltip>
                  }
                  key={idx}
                >
                  <SkillIcon src={el.imgSrc} alt="test" />
                </OverlayTrigger>
              );
            })}
          </SkillIconBlock>

          <div className="col-1"></div>
        </div>
      </DevStackBlock>
    </Container>
  );
}

export default DevStack;
