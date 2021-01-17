import React from "react";
import styled, { css } from "styled-components";
import userImgSrc from "../assets/user.png";

const UserPhoto = styled.img`
  width: 120px;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
`;

function ProfileContents({ children }) {
  return <UserPhoto src={userImgSrc}></UserPhoto>;
}

export default ProfileContents;
