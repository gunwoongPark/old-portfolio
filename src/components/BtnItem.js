import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #e9ecef;
  outline: 0;
  border: 0;

  margin-top: 1rem;

  &:hover {
    background: #f8f9fa;
  }

  &:active {
    background: #ced4da;
  }

  font-size: 24px;
  padding: 0.75rem;

  cursor: pointer;
`;

const CheckedBtn = styled.button`
  background: #ffa8a8;
  outline: 0;
  border: 0;

  margin: 1rem 0 0 0;

  &:hover {
    background: #ffc9c9;
  }

  &:active {
    background: #ff8787;
  }

  font-size: 24px;
  padding: 0.75rem;

  cursor: pointer;
`;

function BtnItem({ children, selectBtn, selectedMenu }) {
  return (
    <>
      {selectedMenu === children ? (
        <CheckedBtn onClick={selectBtn}>{children}</CheckedBtn>
      ) : (
        <Button onClick={selectBtn}>{children}</Button>
      )}
    </>
  );
}

export default BtnItem;
