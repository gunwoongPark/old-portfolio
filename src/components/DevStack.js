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

const DevStackBlock = styled.div`
  position: absolute;
  top: 50%;

  transform: translate(0, -50%);

  text-align: center;
`;

const SkillIcon = styled.img`
  height: 120px;
  object-fit: cover;

  & + & {
    margin-left: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function DevStack() {
  return (
    <Container>
      <DevStackBlock className="container">
        <SkillIcon src={htmlIcon} alt="test"></SkillIcon>
        <SkillIcon src={cssIcon} alt="test"></SkillIcon>
        <SkillIcon src={jsIcon} alt="test"></SkillIcon>
        <SkillIcon src={vueIcon} alt="test"></SkillIcon>
        <SkillIcon src={vuetifyIcon} alt="test"></SkillIcon>
        <SkillIcon src={reactIcon} alt="test"></SkillIcon>
        <SkillIcon src={bootstrapIcon} alt="test"></SkillIcon>
        <SkillIcon src={pythonIcon} alt="test"></SkillIcon>
        <SkillIcon src={cIcon} alt="test"></SkillIcon>
      </DevStackBlock>
    </Container>
  );
}

export default DevStack;