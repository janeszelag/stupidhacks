import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

const StyledImg = styled.img`
  width: 50vw;
  justify-content: center;
  margin-bottom: 1em;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4em;
`;



const Quote = styled.p`
  font-size: large;
  padding: 2em;
  font-style: italic;
`;

const StyledNav = styled(Nav)`
background-color: #f2f2f2;
padding: 1em;
font-size: large;
font-weight: bold; 
`

function App() {
  return (
    <div>
      <StyledNav defaultActiveKey="/"  >
        <Nav.Item >
          iShit
        </Nav.Item>
      </StyledNav>
      <StyledDiv>
        <StyledImg
          alt="ishit logo"
          src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583009496/FrontPage_skexy6.png"
        />
        <Quote>
          "I have learned more from the iShit than any other product I own." -
          Elon Musk
        </Quote>
        <StyledImg
          alt="ishit phone"
          src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583016478/Cool_Text_-_1-800-iShit4k_350651155734935_h91by9.png"
        />
        <iframe title="ishit "width="900" height="600" src="https://www.youtube.com/embed/TvcrFymy0kQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </StyledDiv>
   
    </div>
  );
}

export default App;
