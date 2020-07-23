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
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
`;

const Darker = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;

  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const MainItem = styled.section`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  h2 {
    color: white;
    font-size: 50px;
    font-weight: bold;
    margin: 0 40px;
    line-height: 1.5;
  }
  h3 {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin: 0 40px;
    line-height: 1.5;
  }
  h4 {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 0 40px;
    line-height: 1.5;
  }
  &:hover {
    text-shadow: 0 0 10px #757575;
  }
`;
const Main = styled(MainItem)`
  background-image: url("https://cdn1.epicgames.com/ue/product/Screenshot/HighresScreenshot00006-1920x1080-1a458d2b7ed4be5a0b2baaa2827147ec.jpg");
  grid-column: 1/13;
  grid-row: 1/2;
`;

const Feature = styled(MainItem)`
  background-image: url("https://thedevcouple.com/wp-content/uploads/2017/10/Interview-React-2.jpg");
  grid-column: 1/8;
  grid-row: 2/3;
  &:hover {
  }
`;
const Aside = styled(MainItem)`
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-java-intermediate.jpg");
  background-size: 150%;
  text-shadow: 0 0 20px black;
  grid-column: 8/13;
  grid-row: 2/3;
  &:hover {
  }
`;
const LeftProduct = styled(MainItem)`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-sJVGgNfzyrtUvWxWmiZiHCOWbuO_yH7tWQ&usqp=CAU");
  background-size: 110%;
  grid-column: 1/4;
  grid-row: 3/4;
  &:hover {
  }
`;
const RightProduct = styled(MainItem)`
  background: gray;
  grid-column: 4/7;
  grid-row: 3/4;
  &:hover {
    background: ${lighten(0.2, "gray")};
  }
`;
const MainProduct = styled(MainItem)`
  background-image: url("https://blogeduonix-2f3a.kxcdn.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg");
  grid-column: 7/13;
  grid-row: 3/4;
  text-shadow: 0 0 10px black;
  &:hover {
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
          <Main>
            <Darker>
              <h2>
                Wanna be Front-End Developer <br /> 유원근임
              </h2>
            </Darker>
          </Main>
          <Feature>
            <Darker>
              <h2>React를 좋아함</h2>
            </Darker>
          </Feature>
          <Aside>
            <Darker>
              <h3>Java도 공부하고 있음</h3>
            </Darker>
          </Aside>
          <LeftProduct>
            <Darker>
              <h4>다음달부터는 Node.js도 익힐 예정</h4>
            </Darker>
          </LeftProduct>
          <RightProduct>
            <Darker></Darker>
          </RightProduct>
          <MainProduct>
            <Darker>
              <h3>멋진 Full-Stack이 될 수 있겠지?</h3>
            </Darker>
          </MainProduct>
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
