import React from "react";
import styled, { keyframes } from "styled-components";
import {
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiJava,
} from "react-icons/di";

const bling = keyframes`
from{
    text-shadow: 0 0 20px black;
}
to{
    text-shadow: 0 0 20px white;
}
`;
const hoverA = keyframes`
from{
    background-color: #212121;
}
to{
    background-color: #424242;
}
`;
const Darker = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
`;

const PortContainer = styled.div`
  background: #181818;
`;
const Main = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://miro.medium.com/max/3840/1*ivjksIhvAs7TUXbQCxAU0A.jpeg");
  /* https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png */
`;
const MainTitle = styled.div`
  animation: ${bling} 1s ease-in-out infinite alternate;
  z-index: 3;
  h1 {
    font-size: 100px;
    font-weight: bold;
    color: white;
  }
  span {
    font-size: 40px;
    color: #fff;
  }
`;
const MainItem = styled.a`
  width: 100%;
  padding: 15px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #212121;
  color: #fff;

  cursor: pointer;
  i {
    font-size: 25px;
  }
  h3 {
    letter-spacing: 2px;
    font-weight: 600;
  }
  span {
    font-size: 13px;
  }
  &:hover {
    animation: ${hoverA} 0.5s ease forwards;
    color: #fff;
  }
`;
const MainCatagory = styled.ul`
  width: 70%;
  height: 130px;
  margin: 0 auto;
  display: flex;
  /* flex-wrap: wrap; */
  position: absolute;
  bottom: 0;
  background: white;
  z-index: 3;
  ${MainItem}:last-child {
    border: none;
  }
`;
const SkillSummary = styled.div`
  position: sticky;
  top: 100px;
  text-align: center;
  h1 {
    font-size: 40px;
    padding: 10px;
  }
  span {
    font-size: 18px;
  }
`;

const SkillSection = styled.section`
  width: 70%;
  height: 100vh;
  color: white;
  margin: 0 auto;
  padding: 30px 0;
`;
export default function Port() {
  return (
    <PortContainer>
      <Main>
        <Darker />
        <MainTitle>
          <h1>Portfolio</h1>
          <span>Yoo Won Geun</span>
        </MainTitle>
        <MainCatagory>
          <MainItem href="#w3c">
            <i>
              <DiHtml5 />
            </i>
            <h3>웹표준</h3>
            <span>HTML5 & CSS3 ...</span>
          </MainItem>
          <MainItem href="#node">
            <i>
              <DiNodejsSmall />
            </i>
            <h3>Node.js</h3>
            <span>Node.js & Express.js ...</span>
          </MainItem>
          <MainItem href="#js">
            <i>
              <DiJsBadge />
            </i>
            <h3>JavaScript</h3>
            <span>JS & TS</span>
          </MainItem>
          <MainItem href="#react">
            <i>
              <DiReact />
            </i>
            <h3>React.js</h3>
            <span>React & Redux ...</span>
          </MainItem>
          <MainItem href="#java">
            <i>
              <DiJava />
            </i>
            <h3>JAVA</h3>
            <span>JAVA & Spring ...</span>
          </MainItem>
        </MainCatagory>
      </Main>

      <SkillSection id="w3c">
        <SkillSummary>
          <h1>HTML & CSS</h1>
          <span>HTML5 & CSS3 & SASS(SCSS)</span>
        </SkillSummary>
      </SkillSection>
      <SkillSection id="js">
        <SkillSummary>
          <h1>JAVASCRIPT</h1>
          <span>JavaScript & TypeScript </span>
        </SkillSummary>
      </SkillSection>
      <SkillSection id="react">
        <SkillSummary>
          <h1>REACT.JS</h1>
          <span>React.js & React-Rouder & Styled-Components & Redux </span>
        </SkillSummary>
      </SkillSection>
      <SkillSection id="java">
        <SkillSummary>
          <h1>JAVA</h1>
          <span>JAVA & SPRING & MYSQL & ORACLE & MAVEN</span>
        </SkillSummary>
      </SkillSection>
      <SkillSection id="node">
        <SkillSummary>
          <h1>NODE.JS</h1>
          <span>Node.js & Express.js & MongoDB & Sequilize</span>
        </SkillSummary>
      </SkillSection>
    </PortContainer>
  );
}
