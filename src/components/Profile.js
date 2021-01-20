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

  position: relative;

  left: 50%;
  transform: translate(-50%);

  margin-top: 72px;

  display: flex;
  flex-direction: column;

  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  padding-top: 1rem;
  padding-bottom: 1rem;

  width: 500px;
  border: 2px solid#343a40;
  border-radius: 1rem;
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
  background: #f8f9fa;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background: white;
  }

  &:active {
    background: #e9ecef;
  }
`;

function Profile() {
  return (
    <>
      <ProfileBlock>
        <UserPhoto src={userImgSrc}></UserPhoto>

        <UserInfo uName={true}> Park Gun Woong</UserInfo>

        <UserInfo>97.08.07</UserInfo>
        <UserInfo>금오공과대학교</UserInfo>
        <UserInfo>컴퓨터공학과</UserInfo>
        <UserInfo>+82 10-5217-5646</UserInfo>

        <LinkBtnGroup>
          <LinkBtn>
            <SiGithub size="50" />
          </LinkBtn>

          <LinkBtn>
            <AiFillInstagram size="50" />
          </LinkBtn>

          <LinkBtn>
            <MdEmail size="50" />
          </LinkBtn>
        </LinkBtnGroup>
      </ProfileBlock>
    </>
  );
}

export default Profile;
