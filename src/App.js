import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import DevStack from "./components/DevStack";
import FunCoolSemtle from "./components/FunCoolSemtle";
import Profile from "./components/Profile";

import Sidebar from "./components/Sidebar";

const GlobalStyle = createGlobalStyle`
body{
  background: #f8f9fa; 
}
`;

function App() {
  const [curPage, setCurPage] = useState("Information");
  const [sidebar, setSidebar] = useState(false);

  const sidebarItem = [
    "Information",
    "Fun Cool Semtle",
    "Vueticky Note",
    "dummy1",
    "dummy2",
    "dummy3",
  ];

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSlidebar = () => {
    setSidebar(false);
  };

  const selectBtn = (e) => {
    setCurPage(e.target.innerText);
    setSidebar(false);
  };

  return (
    <>
      <GlobalStyle />
      {curPage === "Information" ? (
        <>
          <Profile />

          <DevStack />
        </>
      ) : null}

      {curPage === "Fun Cool Semtle" ? <FunCoolSemtle /> : null}

      <Sidebar
        visible={sidebar}
        sidebarItem={sidebarItem}
        selectBtn={selectBtn}
        openSidebar={openSidebar}
        closeSlidebar={closeSlidebar}
        selectedMenu={curPage}
      />
    </>
  );
}

export default App;
