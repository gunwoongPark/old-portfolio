import React from "react";
import styled from "styled-components";
import ProfileContents from "./ProfileContents";

const ProfileTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: tomato;

  margin: 0 auto;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
`;

function ProfileTemplate({ children }) {
  return <ProfileTemplateBlock>{children}</ProfileTemplateBlock>;
}

export default ProfileTemplate;
