import React from "react";
import styled from "styled-components";
import dummy from "../assets/dummy.PNG";

const Contain = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1024px;

  display: flex;
  flex-direction: column;
`;

const TitleText = styled.h1`
  margin-top: 64px;
  text-align: center;
  font-family: "Nanum Gothic Coding", monospace;
`;

const MainPhotoFrame = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  text-align: center;
`;

const MainPhoto = styled.img`
  max-width: 100%;
  height: auto;
`;

// const M;

function FunCoolSemtle() {
  return (
    <>
      <Contain>
        <TitleText>Fun Cool Semtle</TitleText>
        <MainPhotoFrame>
          <MainPhoto src={dummy}></MainPhoto>
        </MainPhotoFrame>
      </Contain>
    </>
  );
}

export default FunCoolSemtle;
