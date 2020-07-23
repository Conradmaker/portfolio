import React from "react";
import styled from "styled-components";
import { TopButton, Main, MainTitle, MainCatagory, MainItem } from "./Port";
const Inner = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 95%;
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

const SkillsContainer = styled.div`
  background: #181719;
`;
const SkillsMain = styled(Main)`
  background-image: url("https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png");
  background-repeat: no-repeat;
`;

const SkillCatagory = styled(MainCatagory)`
  bottom: 150px;
  width: 40%;
  background: none;
`;
const SkillItem = styled(MainItem)`
  width: 100%;
  margin: 0 20px;
  box-shadow: 0 0 50px black;
  h3 {
    font-size: 23px;
  }
  span {
    font-size: 19px;
  }
  &:hover {
    box-shadow: 0 0 10px gray;
  }
`;
const SkillSection = styled.main`
  height: 100vh;
  padding: 130px 0;
  box-sizing: border-box;
`;
const SkillsItemImg = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: -9999px;
  font-size: 30px;
  text-shadow: 0 0 5px black;
  &:hover {
    background-size: 150%;
    color: white;
    text-indent: 0;
  }
`;

const SkillsBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-shadow: 4px 4px 10px gray;
    font-weight: bold;
  }
`;
const FEBox = styled(SkillsBox)`
  ${SkillsItemImg}:nth-child(1) {
    grid-row: 1/2;
    grid-column: 1/3;
    background-image: url("https://heropy.blog/css/images/vendor_icons/html5.png");
  }
  ${SkillsItemImg}:nth-child(2) {
    grid-row: 1/2;
    grid-column: 3/5;
    background-image: url("https://heropy.blog/css/images/vendor_icons/css3.png");
  }
  ${SkillsItemImg}:nth-child(3) {
    grid-row: 1/2;
    grid-column: 5/7;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png");
  }
  ${SkillsItemImg}:nth-child(4) {
    grid-row: 1/3;
    grid-column: 8/11;
    background-image: url("https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png");
  }
  ${SkillsItemImg}:nth-child(5) {
    grid-row: 1/2;
    grid-column: 11/13;
    background-image: url("https://miro.medium.com/max/2800/1*sBEsewtZXFh4V1bYCP3llQ.png");
  }
  ${SkillsItemImg}:nth-child(6) {
    grid-row: 2/3;
    grid-column: 11/13;
    background-image: url("https://media.vlpt.us/images/jkzombie/post/a96cb4bd-8219-4899-9530-bf1344e74318/typescript-1174965.png");
  }
  ${SkillsItemImg}:nth-child(7) {
    grid-row: 3/5;
    grid-column: 1/4;
    background-image: url("https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png");
  }
  ${SkillsItemImg}:nth-child(8) {
    grid-row: 3/4;
    grid-column: 4/6;
    background-image: url("https://velopert.com/wp-content/uploads/2017/01/vertical@2x.png");
  }
  ${SkillsItemImg}:nth-child(9) {
    grid-row: 4/5;
    grid-column: 4/6;
    background-image: url("https://media.vlpt.us/images/hanblueblue/post/81aa6950-adba-4b35-a07b-ff056d91859a/redux.png");
  }
  ${SkillsItemImg}:nth-child(10) {
    grid-row: 4/5;
    grid-column: 6/8;
    background-image: url("https://media.vlpt.us/images/ansrjsdn/post/53e503e2-f8fa-47f6-a5c2-da5f6bdb3cb5/styled-components.png");
  }
  ${SkillsItemImg}:nth-child(11) {
    grid-row: 3/4;
    grid-column: 6/9;
  }

  h1:nth-child(11) {
    font-size: 70px;
    letter-spacing: 10px;
    grid-column: 1/8;
    grid-row: 2/3;
  }
  h1:nth-child(12) {
    font-size: 130px;
    grid-column: 8/13;
    grid-row: 3/5;
  }
`;
const BEBox = styled(SkillsBox)`
  ${SkillsItemImg} {
    background-color: #b3e5fc;
  }
  ${SkillsItemImg}:nth-child(1) {
    grid-row: 1/3;
    grid-column: 1/4;
    background-image: url("https://keepmind.net/wp-content/uploads/2019/11/Java-image-scaled.png");
  }
  ${SkillsItemImg}:nth-child(2) {
    grid-row: 1/2;
    grid-column: 4/6;
    background-image: url("https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A05A405C51C0C112");
  }
  ${SkillsItemImg}:nth-child(3) {
    grid-row: 2/3;
    grid-column: 4/6;
    background-image: url("https://image.flaticon.com/icons/png/512/28/28968.png");
  }
  ${SkillsItemImg}:nth-child(4) {
    grid-row: 1/3;
    grid-column: 8/11;
    background-image: url("https://lh3.googleusercontent.com/proxy/gKzk97cO9olROtUVUwP8x6LQoR_QTzE_aJobKSyL3EJzb8OC03QgoRk9h3iUVzug0UvFOw7OqAR_Um7dEtQdjg");
  }
  ${SkillsItemImg}:nth-child(5) {
    grid-row: 1/2;
    grid-column: 11/13;
    background-image: url("https://rap0d.github.io/assets/img/logo/oracledb_logo.png");
  }
  ${SkillsItemImg}:nth-child(6) {
    grid-row: 2/3;
    grid-column: 11/13;
    background-image: url("https://media.vlpt.us/images/hanblueblue/post/b18a8bbd-1589-4bef-9c20-d45bcb0bdf75/MongoDB-Logo.wine.png");
  }
  ${SkillsItemImg}:nth-child(7) {
    grid-row: 3/5;
    grid-column: 1/4;
    background-image: url("https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png");
  }
  ${SkillsItemImg}:nth-child(8) {
    grid-row: 3/4;
    grid-column: 4/6;
    background-image: url("https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/6b427/express-routing-logo.png");
  }
  ${SkillsItemImg}:nth-child(9) {
    grid-row: 4/5;
    grid-column: 4/6;
    background-image: url("data:image/png;base64,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");
  }
  ${SkillsItemImg}:nth-child(10) {
    grid-row: 4/5;
    grid-column: 6/8;
    background-image: url("https://cdn-images-1.medium.com/max/1200/1*RHQ7lpGDV_M3yWRa9DiR2g.png");
  }
  ${SkillsItemImg}:nth-child(11) {
    grid-row: 3/4;
    grid-column: 6/9;
  }

  h1:nth-child(11) {
    font-size: 70px;
    letter-spacing: 14px;
    grid-column: 6/8;
    grid-row: 1/4;
    text-align: center;
    writing-mode: vertical-rl;
  }
  h1:nth-child(12) {
    font-size: 130px;
    grid-column: 8/13;
    grid-row: 3/5;
  }
`;
const SkillsBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <SkillsMain id="main">
        <Darker />

        <MainTitle>
          <h1>Skill Stack</h1>
          <span>Introduce my Skills</span>
        </MainTitle>

        <SkillCatagory>
          <SkillItem href="#FrontEnd">
            <h3>Front-End</h3>
            <span>Main</span>
          </SkillItem>
          <SkillItem href="#BackEnd">
            <h3>Back-End</h3>
            <span>Sub</span>
          </SkillItem>
        </SkillCatagory>
      </SkillsMain>
      <SkillSection id="FrontEnd">
        <Inner>
          <SkillsBoxContainer>
            <FEBox>
              <SkillsItemImg>HTML5</SkillsItemImg>
              <SkillsItemImg>CSS3</SkillsItemImg>
              <SkillsItemImg>SASS</SkillsItemImg>
              <SkillsItemImg>JavaScript</SkillsItemImg>
              <SkillsItemImg>ESLint</SkillsItemImg>
              <SkillsItemImg>TypeScript</SkillsItemImg>
              <SkillsItemImg>React.js</SkillsItemImg>
              <SkillsItemImg>Router</SkillsItemImg>
              <SkillsItemImg>Redux</SkillsItemImg>
              <SkillsItemImg>Styled-Componetns</SkillsItemImg>
              <h1>FRONT-END</h1>
              <h1>SKILLS</h1>
            </FEBox>
          </SkillsBoxContainer>
        </Inner>
      </SkillSection>
      <SkillSection id="BackEnd">
        <Inner>
          <SkillsBoxContainer>
            <BEBox>
              <SkillsItemImg>Java</SkillsItemImg>
              <SkillsItemImg>Spring</SkillsItemImg>
              <SkillsItemImg>JavaServerPage</SkillsItemImg>
              <SkillsItemImg>MySQL</SkillsItemImg>
              <SkillsItemImg>OracleDB</SkillsItemImg>
              <SkillsItemImg>MongoDB</SkillsItemImg>
              <SkillsItemImg>Node.js</SkillsItemImg>
              <SkillsItemImg>Express.js</SkillsItemImg>
              <SkillsItemImg>sequelize</SkillsItemImg>
              <SkillsItemImg>GraphQL</SkillsItemImg>
              <h1>BACK END</h1>
              <h1>SKILLS</h1>
            </BEBox>
          </SkillsBoxContainer>
        </Inner>
      </SkillSection>

      <TopButton href="#main">TOP</TopButton>
    </SkillsContainer>
  );
}
