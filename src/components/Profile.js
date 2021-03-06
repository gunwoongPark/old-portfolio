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

      width: 100%;

      margin-top: 36px;
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
  position: relative;
  text-align: center;
  color: #343a40;

  font-size: 24px;
  line-height: 225%;

  ${(props) =>
    props.uName &&
    css`
      font-size: 32px;
    `}

  ${(props) =>
    props.mode === "isMobile" &&
    css`
      line-height: 200%;
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

  &:focus {
    border: 0;
    outline: 0;
  }
`;

function Profile({ mode }) {
  return (
    <>
      <ProfileBlock mode={mode}>
        <UserPhoto src={userImgSrc} />

        <UserInfo uName={true} mode={mode}>
          Park Gun Woong
        </UserInfo>
        <UserInfo mode={mode}>Front-End Developer</UserInfo>
        <UserInfo mode={mode}>97.08.07</UserInfo>
        <UserInfo mode={mode}>금오공과대학교</UserInfo>
        <UserInfo mode={mode}>컴퓨터공학과</UserInfo>
        <UserInfo mode={mode}>+82 10-5217-5646</UserInfo>

        <LinkBtnGroup>
          <a href="https://github.com/gunwoongPark" target="__blank">
            <LinkBtn mode={mode}>
              <SiGithub size="50"></SiGithub>
            </LinkBtn>
          </a>

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
