import React from 'react';
import styled from "styled-components";

const StyledImg = styled.img`
width: 50vw;
justify-content: center;
`

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

function App() {
  return (
    <StyledDiv>
      <header>
        <StyledImg alt='ishit logo' src='https://res.cloudinary.com/dpfixnpii/image/upload/v1583009496/FrontPage_skexy6.png' />
    
      </header>
    </StyledDiv>
  );
}

export default App;
