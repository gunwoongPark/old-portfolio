import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import FunCoolSemtle from "./components/FunCoolSemtle";
import Profile from "./components/Profile";
import Sidebar from "./components/SideBar";
import { useMediaQuery } from "react-responsive";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef; 
}
`;

function App() {
  const [curPage, setCurPage] = useState("Information");
  const [sidebar, setSidebar] = useState(false);

  const sidebarItem = [
    "Information",
    "Fun Cool Semtle",
    "Vueticky Note",
    "Dev Stack",
    "dummy2",
    "dummy3",
  ];

  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    console.log(isPc);
    console.log(isTablet);
    console.log(isMobile);
  });

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

      {/* 인포 */}
      {curPage === "Information" ? <Profile /> : null}

      {curPage === "Fun Cool Semtle" ? <FunCoolSemtle /> : null}

      {/* 사이드바 */}
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
