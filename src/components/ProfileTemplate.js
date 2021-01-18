import React from "react";
import styled from "styled-components";

const ProfileTemplateBlock = styled.div`
  width: 512px;
  height: 512px;

  position: relative;

  margin: 0 auto;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
`;

function ProfileTemplate({ children }) {
  return <ProfileTemplateBlock>{children} </ProfileTemplateBlock>;
}

export default ProfileTemplate;
