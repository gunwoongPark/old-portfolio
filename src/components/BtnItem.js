import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  margin-top: 1rem;

  width: 100%;
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

  width: 100%;
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
      {selectedMenu === children.title ? (
        <Link to={children.link} style={{ textAlign: "center" }}>
          <CheckedBtn onClick={selectBtn}>{children.title}</CheckedBtn>
        </Link>
      ) : (
        <Link to={children.link} style={{ textAlign: "center" }}>
          <Button onClick={selectBtn}>{children.title}</Button>
        </Link>
      )}
    </>
  );
}

export default BtnItem;
