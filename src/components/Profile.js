import React from "react";
import styled, { keyframes, css } from "styled-components";
import userImgSrc from "../assets/User2.jpg";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

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

const ProfileBlock = styled.div`
  background: white;

  width: 500px;
  border: 2px solid#343a40;
  border-radius: 1rem;

  position: relative;

  left: 50%;
  transform: translate(-50%);

  display: flex;
  flex-direction: column;

  margin-top: 72px;

  padding-top: 1rem;
  padding-bottom: 1rem;

  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.mode === "isMobile" &&
    css`
      border: none;
      background: #e9ecef;

      max-height: 607px;
    `}
`;

const UserPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;

  position: relative;
  align-self: center;
`;

const UserInfo = styled.h1`
  font-family: "Nanum Gothic Coding", monospace;
  position: relative;
  text-align: center;
  color: #343a40;

  font-size: 24px;

  ${(props) =>
    props.uName &&
    css`
      font-size: 32px;
    `}
`;

const LinkBtnGroup = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin-top: 16px;
`;

const LinkBtn = styled.button`
  color: #343a40;
  background: white;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 50%;

  ${(props) =>
    props.mode === "isMobile" &&
    css`
      background: #e9ecef;
    `}
`;

function Profile({ mode }) {
  return (
    <>
      <ProfileBlock mode={mode}>
        <UserPhoto src={userImgSrc}></UserPhoto>

        <UserInfo uName={true}> Park Gun Woong</UserInfo>

        <UserInfo>97.08.07</UserInfo>
        <UserInfo>금오공과대학교</UserInfo>
        <UserInfo>컴퓨터공학과</UserInfo>
        <UserInfo>+82 10-5217-5646</UserInfo>

        <LinkBtnGroup>
          <LinkBtn mode={mode}>
            <SiGithub size="50" />
          </LinkBtn>

          <LinkBtn mode={mode}>
            <AiFillInstagram size="50" />
          </LinkBtn>

          <LinkBtn mode={mode}>
            <MdEmail size="50" />
          </LinkBtn>
        </LinkBtnGroup>
      </ProfileBlock>
    </>
  );
}

export default Profile;
