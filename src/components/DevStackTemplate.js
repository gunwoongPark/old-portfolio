import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const DevStackTemplateBlock = styled.div`
  width: 90%;
  height: 300px;

  background: tomato;

  border-radius: 16px;

  position: absolute;
  left: 5%;
  bottom: 5%;
`;

function DevStackTemplate({ children }) {
  return <DevStackTemplateBlock>{children}</DevStackTemplateBlock>;
}

export default DevStackTemplate;
