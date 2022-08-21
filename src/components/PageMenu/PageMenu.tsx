// BASE
import React from "react";

// STYLES
import styled from "styled-components";
import { StyledButtonMenu } from "../StyledComponents/Buttons";
import { StyledMainPage, Header } from "../StyledComponents/MainPage";
import "./PageMenuStyles.css";

function PageMenu() {
  const fastQuit = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };
  const emailData = localStorage.getItem("email");

  return (
    <>
      <div>
        <StyledMainPage>
          <Header>ONLY.</Header>
          <MainProfile>
            <p className="helloUser">
              Здравствуйте, <span>{emailData}</span>
            </p>
            <a href="/login">
              <StyledButtonMenu onClick={fastQuit}>Выйти</StyledButtonMenu>
            </a>
          </MainProfile>
        </StyledMainPage>
      </div>
    </>
  );
}

const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default PageMenu;
