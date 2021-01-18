import React from "react";
import styled from "styled-components";

const DevStackTemplateBlock = styled.div`
  width: 90%;
  height: 150px;

  position: relative;

  left: 5%;
  margin-top: 265px;
`;

function DevStackTemplate({ children, skills }) {
  return <DevStackTemplateBlock>{children}</DevStackTemplateBlock>;
}

export default DevStackTemplate;
