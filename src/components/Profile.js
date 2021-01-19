import React from "react";
import styled from "styled-components";
import userImgSrc from "../assets/User2.jpg";
import { SiGithub } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const ProfileBlock = styled.div`
  width: 512px;
  height: 600px;

  position: relative;

  margin: 0 auto;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
`;

const UserPhoto = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;

  position: relative;
  align-self: center;
`;

const UserName = styled.h1`
  font-family: "Roboto Mono", monospace;
  position: relative;
  text-align: center;
  color: #495057;

  font-size: 48px;
`;

const UserInfo = styled.h1`
  font-family: "Roboto Mono", monospace;
  position: relative;
  text-align: center;
  color: #495057;
  line-height: 150%;
`;

const LinkBtnGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LinkBtn = styled.button`
  color: #495057;
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

function Profile({ children }) {
  return (
    <ProfileBlock>
      <UserPhoto src={userImgSrc}></UserPhoto>
      <UserName> Park Gun Woong</UserName>
      <UserInfo>
        97.08.07
        <br />
        Front-End Developer
        <br />
        +82 10-5217-5646
      </UserInfo>

      <LinkBtnGroup>
        <LinkBtn>
          <SiGithub size="50" />
        </LinkBtn>

        <LinkBtn onClick={() => console.log("kakao!")}>
          <RiKakaoTalkFill size="50" />
        </LinkBtn>

        <LinkBtn>
          <MdEmail size="50" />
        </LinkBtn>
      </LinkBtnGroup>
    </ProfileBlock>
  );
}

export default Profile;
