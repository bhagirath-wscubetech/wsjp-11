import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Button, FancyButton, SubmitButton, FlashBtn } from "./Button";
import { useState } from "react";
import { StyledImg, AniamtedImg } from "./Image";

const GlobalStyle = createGlobalStyle`
  button {
    font-family: Arail;
    font-weight: bold;
  }

  div{
    box-shadow: 0px 0px 3px grey;
  }
`

function App() {
  const [flag, setFlag] = useState(false);
  const StyledContainer = styled.div`
    max-width:1000px;
    margin: auto;
  `
  return (
    <StyledContainer>
      <GlobalStyle />
      <StyledImg src="https://picsum.photos/200/300"/>
      <AniamtedImg src="https://picsum.photos/200/300"/>
      <StyledImg src="https://picsum.photos/200/300"/>
      <FlashBtn>Hiii</FlashBtn>
      <Button color={flag}>Hello</Button>
      <SubmitButton>Hiii</SubmitButton>
      <FancyButton onClick={() => setFlag(!flag)} color="green"> Fancy Button ka hello</FancyButton>
    </StyledContainer>
  );
}

export default App;
