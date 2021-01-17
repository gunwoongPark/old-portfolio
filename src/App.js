import React from "react";
import { createGlobalStyle } from "styled-components";
import ProfileContents from "./components/ProfileContents";
import ProfileTemplate from "./components/ProfileTemplate";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;  
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ProfileTemplate>
        <ProfileContents />
      </ProfileTemplate>
    </>
  );
}

export default App;
