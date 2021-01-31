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
  return (
    <Container>
      <DevStackBlock className="container">
        <div className="row">
          <div className="col-1"></div>

          <SkillIconBlock className="col-10">
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip id={"tooltip-right"}>HTML</Tooltip>}
            >
              <SkillIcon src={htmlIcon} alt="test" />
            </OverlayTrigger>

            <SkillIcon src={cssIcon} alt="test" />
            <SkillIcon src={jsIcon} alt="test" />
            <SkillIcon src={vueIcon} alt="test" />
            <SkillIcon src={vuetifyIcon} alt="test" />
            <SkillIcon src={reactIcon} alt="test" />
            <SkillIcon src={bootstrapIcon} alt="test" />
            <SkillIcon src={pythonIcon} alt="test" />
            <SkillIcon src={cIcon} alt="test" />
          </SkillIconBlock>

          <div className="col-1"></div>
        </div>
      </DevStackBlock>
    </Container>
  );
}

export default DevStack;
