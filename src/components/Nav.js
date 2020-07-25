import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  MdReorder,
  MdYoutubeSearchedFor,
  MdKeyboardReturn,
} from "react-icons/md";
import { darken } from "polished";

//KEYFRAMES
const slide = keyframes`
from{
    transform: translateX(-300px)
}
to{
    transform: translateX(0px)
}
`;
const slideLeft = keyframes`
from{
    transform: translateX(300px)
}
to{
    transform: translateX(0px)
}
`;

// HEADER
const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  background: none;
  position: fixed;
  top: 0;
  left: 0px;
  right: 00px;
  z-index: 10;
  text-shadow: 0 0 10px black;

  padding-top: 20px;

  @media (max-width: 1024px) {
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
  }
`;
const NavMenu = styled.a`
  display: flex;
  align-items: center;
  margin-left: 250px;
  color: #e3f2fd;
  i {
    font-size: 25px;
    margin-right: 5px;
  }
  small {
    font-weight: 600;
  }
  &:hover {
    color: ${darken(0.2, "#e3f2fd")};
  }
  @media (max-width: 1024px) {
    grid-row: 2/3;
    margin: 0;
  }
`;
const NavLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 10px;
  }
  small {
    color: #fff;
  }
  @media (max-width: 1024px) {
    grid-column: 1/3;
  }
`;
const NavSearch = styled.a`
  display: flex;
  align-items: center;
  color: #e3f2fd;
  margin-right: 250px;
  i {
    font-size: 25px;
    margin-right: 5px;
  }
  small {
    font-weight: 600;
  }
  &:hover {
    color: ${darken(0.2, "#e3f2fd")};
  }
  @media (max-width: 1024px) {
    grid-row: 2/3;
    margin: 0;
  }
`;
//SEARCH
const BackBTN = styled.div`
  width: 100%;
  text-align: end;
  border-bottom: 1px solid #6d6d6d;
  i {
    display: flex;
    align-content: center;
    justify-content: flex-end;
    padding: 10px;
    font-size: 30px;
    color: #6d6d6d;
    cursor: pointer;
    &:hover {
      color: ${darken(0.2, "#6d6d6d")};
    }
  }
`;
const SearchContainer = styled.nav`
  position: fixed;
  width: 20%;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  background: #424242;
  animation: ${slideLeft} 0.3s ease-in;
  ${(props) =>
    props.searchOpen &&
    css`
      display: none;
    `};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Search = styled.ul`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: white;
  input {
    margin-top: 10px;
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: none;
    color: #bdbdbd;
    border-bottom: 1px solid #6d6d6d;
    background: none;
  }
  button {
    width: 100%;
    font-size: 18px;
    color: #bdbdbd;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background: #6d6d6d;
    }
  }
  ${BackBTN} {
    i {
      justify-content: flex-start;
    }
  }
`;

//MENU
const MenuContainer = styled.nav`
  position: fixed;
  width: 20%;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  background: #424242;
  animation: ${slide} 0.3s ease-in;
  ${(props) =>
    props.menuOpen &&
    css`
      display: none;
    `};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Menu = styled.ul`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: white;
`;
const MenuItem = styled.a`
  display: flex;
  align-content: center;
  border-bottom: 1px solid #6d6d6d;
  li {
    width: 100%;
    display: block;
    padding: 15px;
    color: #bdbdbd;
    font-size: 20px;
    font-weight: 500;
    &:hover {
      background: #616161;
    }
    a {
      display: inline-block;
      color: #bdbdbd;
      width: 100%;
      height: 100%;
    }
  }
`;
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(true);
  return (
    <div>
      <Header>
        <NavMenu onClick={() => setMenuOpen(!menuOpen)}>
          <i>
            <MdReorder />
          </i>
          <small>MENU</small>
        </NavMenu>
        <NavLogo>
          <h1>Conrad</h1>
          <small>F.E Devaloper</small>
        </NavLogo>
        <NavSearch onClick={() => setSearchOpen(!searchOpen)}>
          <i>
            <MdYoutubeSearchedFor />
          </i>
          <small>SEARCH</small>
        </NavSearch>
      </Header>
      <MenuContainer menuOpen={menuOpen}>
        <Menu>
          <BackBTN>
            <i onClick={() => setMenuOpen(!menuOpen)}>
              <MdKeyboardReturn />
            </i>
          </BackBTN>
          <MenuItem>
            <li>
              <Link to="/">Home</Link>
            </li>
          </MenuItem>
          <MenuItem>
            <li>
              <Link>Resume</Link>
            </li>
          </MenuItem>
          <MenuItem>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </MenuItem>
          <MenuItem>
            <li>
              <Link to="/port">Portfolio</Link>
            </li>
          </MenuItem>
          <MenuItem href="https://github.com/Conradmaker?tab=repositories">
            <li>GitHub</li>
          </MenuItem>
        </Menu>
      </MenuContainer>
      <SearchContainer searchOpen={searchOpen}>
        <Search>
          <BackBTN>
            <i onClick={() => setSearchOpen(!searchOpen)}>
              <MdKeyboardReturn />
            </i>
          </BackBTN>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <button>검색</button>
        </Search>
      </SearchContainer>
    </div>
  );
}
