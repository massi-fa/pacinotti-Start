import React, { useState } from "react";
import styled from "styled-components";

import logo from "./res/logo.svg";

//Dichiarazione Styled Components:
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Navbar = styled.div`
  background-color: #1d1d1d;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 3rem;
  margin: auto;
  margin-left: 0;
  filter: invert(1);
`;

const ElementContent = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  padding: 5px 20px 5px 20px;
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

const App = () => {
  return (
    <Container>
      <Navbar>
        <Logo src={logo} />
        <ElementContent> Me </ElementContent>
      </Navbar>
      <Title>ciao!</Title>
      <Description>Mi chiamo Giulia</Description>
    </Container>
  );
};

export default App;
