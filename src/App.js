import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import DevStackContents from "./components/DevStackContents";
import DevStackTemplate from "./components/DevStackTemplate";
import ProfileContents from "./components/ProfileContents";
import ProfileTemplate from "./components/ProfileTemplate";
import Sidebar from "./components/Sidebar";

const GlobalStyle = createGlobalStyle`
body{
  background: #f8f9fa; 
}
`;

function App() {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => {
    setSidebar(true);
  };
  const sidebarItem = [
    "Fun Cool Semtle",
    "Vueticky Note",
    "dummy1",
    "dummy2",
    "dummy3",
  ];
  const selectBtn = () => {
    setSidebar(false);
  };
  const closeSlidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <GlobalStyle />

      <ProfileTemplate>
        <ProfileContents />
      </ProfileTemplate>

      <DevStackTemplate>
        <DevStackContents />
      </DevStackTemplate>

      <Sidebar
        visible={sidebar}
        sidebarItem={sidebarItem}
        selectBtn={selectBtn}
        openSidebar={openSidebar}
        closeSlidebar={closeSlidebar}
      />
    </>
  );
}

export default App;
