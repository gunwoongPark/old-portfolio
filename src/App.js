import React from "react";
import { createGlobalStyle } from "styled-components";
import DevStackContents from "./components/DevStackContents";
import DevStackTemplate from "./components/DevStackTemplate";
import ProfileContents from "./components/ProfileContents";
import ProfileTemplate from "./components/ProfileTemplate";

const GlobalStyle = createGlobalStyle`
body{
  background: #f8f9fa; 
}
h1{
  font-family: 'Gothic A1', sans-serif
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ProfileTemplate>
        <ProfileContents />
      </ProfileTemplate>
      <DevStackTemplate>
        <DevStackContents />
      </DevStackTemplate>
    </>
  );
}

export default App;
