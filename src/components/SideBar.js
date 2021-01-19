import React from "react";
import styled, { keyframes } from "styled-components";
import BtnItem from "./BtnItem";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const slideRight = keyframes`
    from{
        transform: translateX(-260px)
    }
    to{
        transform: translateX(0px);
    }
`;

const OpenBtn = styled.button`
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

  position: fixed;
  top: 1%;
  left: 1%;

  color: #495057;
`;

const CloseBtn = styled.button`
  background: white;
  &:hover {
    background: #f1f3f5;
  }

  &:active {
    background: #f8f9fa;
  }

  cursor: pointer;
  border: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  position: fixed;
  top: 1%;
  left: 320px;

  color: #495057;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideRight};
  animation-fill-mode: forwards;
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const SidebarBlock = styled.div`
  width: 260px;
  height: 100%;
  padding: 1.5rem;
  background: white;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideRight};
  animation-fill-mode: forwards;
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

function SideBar({
  visible,
  sidebarItem,
  selectBtn,
  openSidebar,
  closeSlidebar,
}) {
  function clickOutside(e) {
    console.log("background!");
  }
  return (
    <>
      {!visible && (
        <OpenBtn onClick={openSidebar}>
          <MdNavigateNext size="40" />
        </OpenBtn>
      )}

      {visible && (
        <DarkBackground onClick={clickOutside}>
          <CloseBtn onClick={closeSlidebar}>
            <MdNavigateBefore size="40" />
          </CloseBtn>
          <SidebarBlock>
            <BtnGroup>
              {sidebarItem.map((item, index) => (
                <BtnItem key={index} selectBtn={selectBtn}>
                  {item}
                </BtnItem>
              ))}
            </BtnGroup>
          </SidebarBlock>
        </DarkBackground>
      )}
    </>
  );
}

export default SideBar;
