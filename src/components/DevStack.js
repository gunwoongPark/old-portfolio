import React from "react";
import styled from "styled-components";

import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import vueIcon from "../assets/vue.png";
import reactIcon from "../assets/react.png";
import pythonIcon from "../assets/python.png";
import cIcon from "../assets/c++.png";

const DevStackBlock = styled.div`
  width: 90%;
  height: 150px;

  text-align: center;

  position: relative;

  left: 5%;
  margin-top: 100px;
`;

const SkillIcon = styled.img`
  width: 150px;

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
      <SkillIcon src={reactIcon} alt="test"></SkillIcon>
      <SkillIcon src={pythonIcon} alt="test"></SkillIcon>
      <SkillIcon src={cIcon} alt="test"></SkillIcon>
    </DevStackBlock>
  );
}

export default DevStack;
