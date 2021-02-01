import React, { useEffect } from "react";

import styled, { css } from "styled-components";

const Test = styled.div`
  background: black;
  width: 300px;
  height: 300px;

  position: absolute;
  top: 300%;
`;

function Project() {
  return <Test data-aos="flip-left" />;
}

export default Project;
