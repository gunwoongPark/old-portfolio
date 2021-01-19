import React from "react";
import styled from "styled-components";
import userImgSrc from "../assets/user.png";
import { SiGithub } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const ProfileBlock = styled.div`
  width: 512px;
  height: 512px;

  position: relative;

  margin: 0 auto;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
`;

const PhotoFrame = styled.div`
  height: 180px;
  width: 180px;
  overflow: hidden;

  border-radius: 50%;

  position: relative;

  left: 50%;
  transform: translate(-50%, 0);
`;

const UserPhoto = styled.img`
  max-width: 100%;
  height: auto;
`;

const UserInfo = styled.h1`
  font-family: "Roboto Mono", monospace;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  color: #495057;
  line-height: 175%;
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
      <PhotoFrame>
        <UserPhoto src={userImgSrc}></UserPhoto>
      </PhotoFrame>
      <UserInfo>
        gunwoongPark
        <br />
        97.08.07
        <br />
        Front-End
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
