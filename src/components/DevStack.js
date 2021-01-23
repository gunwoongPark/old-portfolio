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

const DevStackBlock = styled.div`
  width: 100%;
  height: 120px;
  display: flex;

  margin-top: 50px;
  justify-content: center;
`;

const SkillIcon = styled.img`
  width: 120px;

  & + & {
    margin-left: 10px;
  }
`;

function DevStack() {
  return (
    <DevStackBlock>
      <SkillIcon src={htmlIcon} alt="test"></SkillIcon>
      <SkillIcon src={cssIcon} alt="test"></SkillIcon>
      <SkillIcon src={jsIcon} alt="test"></SkillIcon>
      <SkillIcon src={vueIcon} alt="test"></SkillIcon>
      <SkillIcon src={vuetifyIcon} alt="test"></SkillIcon>
      <SkillIcon src={reactIcon} alt="test"></SkillIcon>
      <SkillIcon src={pythonIcon} alt="test"></SkillIcon>
      <SkillIcon src={cIcon} alt="test"></SkillIcon>
    </DevStackBlock>
  );
}

export default DevStack;
