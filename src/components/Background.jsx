import React from "react";
import styled from "styled-components";

const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 9.8rem;
  background-color: hsl(180, 29%, 50%);
  z-index: -1;
`;

const BackgroundDiv = styled.div`
  position: absolute;
  background-color: hsl(180, 52%, 96%);
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const ImageWrapperDesktop = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 814px) {
    display: none;
  }
`;

const ImageWrapperMobile = styled.img`
  width: 100%;
  height: 100%;
  display: none;

  @media (max-width: 814px) {
    display: block;
  }
`;

const Background = () => {
  return (
    <>
      <Header>
        <ImageWrapperDesktop
          src={window.location.origin + "/images/bg-header-desktop.svg"}
          alt="bg-header-img"
        ></ImageWrapperDesktop>
        <ImageWrapperMobile
          src={window.location.origin + "/images/bg-header-mobile.svg"}
          alt="bg-header-img"
        ></ImageWrapperMobile>
      </Header>
      <BackgroundDiv />
    </>
  );
};

export default Background;
