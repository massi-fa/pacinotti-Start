import React, { useState } from "react";
import styled from "styled-components";
import Education from "./components/Education";

import logo from "./res/logo.svg";
import photo1 from "./res/photo1.svg";
import photo2 from "./res/photo2.svg";

//Dichiarazione Styled Components:
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Navbar = styled.div`
  background-color: #9f3699;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 3rem;
  margin: auto;
  margin-left: 0;
  filter: invert(1);
`;

const DivHome = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 50px;
  padding: 10px;
  align-items: center;
`;

const ElementContent = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  padding: 5px 20px 5px 20px;
`;

const DivScritte = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Title = styled.h1`
  width: 75%;
  margin: auto;
  margin-bottom: 0;
  text-align: center;
  font-size: 4rem;
`;

const Description = styled.h3`
  width: 75%;
  margin: 5px auto;
  text-align: center;
  font-size: 2rem;
  color: black;
`;

const Name = styled.a`
  color: #9f3699;
`;

const Photo = styled.img`
  display: flex;
  margin-bottom: 30px;
  width: 60%;
  max-width: 500px;
  margin: auto;
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const App = () => {
  return (
    <Container>
      <Navbar>
        <Logo src={logo} />
        <ElementContent> Me </ElementContent>
      </Navbar>
      <DivHome>
        <DivScritte>
          <Title>Ciao!</Title>
          <Description>
            Mi chiamo
            <Name> Giulia </Name>e sto seguendo il corso di curvatura
            informatica.
          </Description>
        </DivScritte>
        <Photo src={photo1} />
      </DivHome>
      <DivHome>
        <Photo src={photo2} />
        <Education />
      </DivHome>
    </Container>
  );
};

export default App;
