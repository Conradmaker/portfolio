import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Port from "./components/Port";

const Inner = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 98%;
  }
`;
const GlobalStyle = createGlobalStyle`
html{
  background: #181818;
  font-family: 'Titillium Web', sans-serif;
}

a{
  text-decoration: none;
  color:black;
  cursor: pointer;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Inner>
        <Nav />
      </Inner>
      <Inner>
        <Route path="/" component={Home} exact />
      </Inner>

      <Route path="/skills" component={Skills} />
      <Route path="/port" component={Port} />
    </>
  );
}

export default App;
