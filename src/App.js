import React from "react";
import { createGlobalStyle } from "styled-components";
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
      <ProfileTemplate> test </ProfileTemplate>
    </>
  );
}

export default App;
