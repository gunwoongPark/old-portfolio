import React from "react";
import styled from "styled-components";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const SideBarBtn = styled.button`
  background: #f8f9fa;
  &:hover {
    background: white;
  }
  &:active {
    background: #e9ecef;
  }

  cursor: pointer;
  border: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  position: absolute;
  top: 1%;
  left: 1%;

  color: #495057;
`;

function SideBar() {
  return (
    <>
      <SideBarBtn>
        <MdNavigateNext size="40" />
      </SideBarBtn>
    </>
  );
}

export default SideBar;
