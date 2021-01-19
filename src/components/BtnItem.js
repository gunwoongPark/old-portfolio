import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: white;
  outline: 0;
  border: 0;
  & + & {
    margin-top: 1rem;
  }

  &:hover {
    background: #f1f3f5;
  }

  &:active {
    background: #f8f9fa;
  }

  font-family: "Roboto Mono", monospace;
  font-size: 24px;
  padding: 0.75rem;

  cursor: pointer;
`;

function BtnItem({ children, selectBtn }) {
  return <Button onClick={selectBtn}>{children}</Button>;
}

export default BtnItem;
