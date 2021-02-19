import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 1rem;

  background: #e9ecef;
  outline: 0;
  border: 0;

  &:hover {
    background: #f8f9fa;
  }

  &:active {
    background: #ced4da;
  }

  &:focus {
    border: 0;
    outline: 0;
  }

  font-size: 24px;
  padding: 0.75rem;

  cursor: pointer;
`;

const CheckedBtn = styled.button`
  margin-top: 1rem;

  background: #ffa8a8;
  outline: 0;
  border: 0;

  &:hover {
    background: #ffc9c9;
  }

  &:active {
    background: #ff8787;
  }

  &:focus {
    border: 0;
    outline: 0;
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
