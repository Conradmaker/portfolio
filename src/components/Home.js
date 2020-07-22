import React from "react";
import styled from "styled-components";
import {} from "react-icons/md";
import { darken, lighten } from "polished";

const HomeContainer = styled.div`
  padding: 20px 0;
`;

//VISUAL
const Visul = styled.main`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  height: 1300px;
`;
const Main = styled.section`
  background: #111;
  grid-column: 1/13;
  grid-row: 1/2;
  &:hover {
    background: ${lighten(0.2, "#111")};
  }
`;
const Feature = styled.section`
  background: blue;
  grid-column: 1/8;
  grid-row: 2/3;
  &:hover {
    background: ${lighten(0.2, "blue")};
  }
`;
const Aside = styled.section`
  background: yellowgreen;
  grid-column: 8/13;
  grid-row: 2/3;
  &:hover {
    background: ${lighten(0.2, "yellowgreen")};
  }
`;
const LeftProduct = styled.section`
  background: white;
  grid-column: 1/4;
  grid-row: 3/4;
  &:hover {
    background: ${darken(0.2, "white")};
  }
`;
const RightProduct = styled.section`
  background: gray;
  grid-column: 4/7;
  grid-row: 3/4;
  &:hover {
    background: ${lighten(0.2, "gray")};
  }
`;
const MainProduct = styled.section`
  background: orange;
  grid-column: 7/13;
  grid-row: 3/4;
  &:hover {
    background: ${lighten(0.2, "orange")};
  }
`;

//FOOTER
const Footer = styled.footer`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h5 {
    line-height: 1.5;
    color: ${darken(0.2, "#e3f2fd")};
    small {
      color: #e3f2fd;
    }
  }
`;

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Visul>
          <Main />
          <Feature />
          <Aside />
          <LeftProduct />
          <RightProduct />
          <MainProduct />
        </Visul>
        <Footer>
          <h5>
            Copyright. <small>Yoo Won Geun -Conrad.dev-</small>
            <br />
            Phone. <small>010-8731-0337</small>
          </h5>
        </Footer>
      </HomeContainer>
    </>
  );
}
