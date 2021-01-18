import React from "react";
import styled from "styled-components";
import userImgSrc from "../assets/user.png";

const UserPhoto = styled.img`
  max-width: 160px;
  border-radius: 100%;

  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0);
`;

const UserInfo = styled.h1`
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);

  text-align: center;

  color: #495057;
`;

function ProfileContents({ children }) {
  return (
    <>
      <UserPhoto src={userImgSrc}></UserPhoto>
      <UserInfo>
        gunwoongPark
        <br />
        97.08.07
        <br />
        Front-End
      </UserInfo>
    </>
  );
}

export default ProfileContents;
