import React from "react";
import styled from "styled-components";

const ProfileContentsBlock = styled.div`
  background: yellowgreen;
`;

function ProfileContents({ children }) {
  return <ProfileContentsBlock></ProfileContentsBlock>;
}

export default ProfileContents;
