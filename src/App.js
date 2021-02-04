import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Profile from "./components/Profile";
import Sidebar from "./components/SideBar";
import { useMediaQuery } from "react-responsive";
import DevStack from "./components/DevStack";
import TimeLine from "./components/TimeLine";
import { Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef; 
}
`;

function App() {
  const [curPage, setCurPage] = useState("Profile");
  const [sidebar, setSidebar] = useState(false);
  const [mode, setMode] = useState("");

  const sidebarItem = [
    { title: "Profile", link: "/Portfolio" },
    { title: "Dev Stack", link: "/devstack" },
    { title: "Time Line", link: "/timeline" },
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
    if (isPc) setMode("isPc");
    else if (isTablet) setMode("isTablet");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc, isTablet]);

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

      <Route exact path="/Portfolio">
        <Profile mode={mode} />
      </Route>

      <Route exact path="/devstack">
        <DevStack mode={mode} />
      </Route>

      <Route exact path="/timeline">
        <TimeLine />
      </Route>

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
