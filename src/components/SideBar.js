import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
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

const fadeOut = keyframes`
    from{
        opacity:1;
    }
    to{
        opacity:0;
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

const slideLeft = keyframes`
    from{
        transform: translateX(0px)
    }
    to{
        transform: translateX(-260px);
    }
`;

const OpenBtn = styled.button`
  background: #e9ecef;
  &:hover {
    background: #f8f9fa;
  }
  &:active {
    background: #ced4da;
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

  color: #343a40;
`;

const CloseBtn = styled.button`
  background: #e9ecef;
  &:hover {
    background: #f8f9fa;
  }

  &:active {
    background: #ced4da;
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

  color: #343a40;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideRight};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideLeft};
    `}
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

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const SidebarBlock = styled.div`
  width: 260px;
  height: 100%;
  padding: 1.5rem;
  background: #e9ecef;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideRight};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideLeft};
    `}
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
  selectedMenu,
}) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible true -> false
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) {
    return (
      <OpenBtn onClick={openSidebar}>
        <MdNavigateNext size="40" />
      </OpenBtn>
    );
  } else {
    return (
      <DarkBackground disappear={!visible}>
        <CloseBtn onClick={closeSlidebar} disappear={!visible}>
          <MdNavigateBefore size="40" />
        </CloseBtn>
        <SidebarBlock disappear={!visible}>
          <BtnGroup>
            {sidebarItem.map((item, index) => (
              <BtnItem
                key={index}
                selectBtn={selectBtn}
                selectedMenu={selectedMenu}
              >
                {item}
              </BtnItem>
            ))}
          </BtnGroup>
        </SidebarBlock>
      </DarkBackground>
    );
  }
}

export default SideBar;
